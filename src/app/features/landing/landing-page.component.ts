import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { environment } from '../../../environments/environment';
import { PORTFOLIO_CONTENT } from '../../content/portfolio-content';
import { GithubService } from '../../core/data/github.service';
import { GithubOverview } from '../../shared/models/github.model';
import { SectionId } from '../../shared/models/portfolio-content.model';
import { NavItem } from '../../shared/ui/dot-nav/dot-nav.component';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  spinDir: number;
  baseSpeed: number;
  angle: number;
  orbitPhase: number;
  orbitSpeed: number;
  size: number;
  alpha: number;
  drift: number;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sparkCanvas') sparkCanvas?: ElementRef<HTMLCanvasElement>;

  readonly content = PORTFOLIO_CONTENT;
  readonly navItems: NavItem[] = [
    { id: 'person', label: 'Person' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection: SectionId = 'person';
  githubOverview: GithubOverview | null = null;

  private readonly magnetSelector = '.project-card, .timeline-item, .chip, .repo-list li, a, button';
  private readonly sparks: Spark[] = [];
  private animationFrameId = 0;
  private sparkContext: CanvasRenderingContext2D | null = null;
  private canvasWidth = 0;
  private canvasHeight = 0;
  private pointerTarget: { x: number; y: number } | null = null;
  private hoveredElement: Element | null = null;
  private readonly reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(private readonly githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .loadOverview({
        username: environment.github.username,
        repoLimit: environment.github.repoLimit,
        endpoint: environment.github.endpoint
      })
      .subscribe((overview) => {
        this.githubOverview = overview;
      });

    this.updateActiveSection();
  }

  ngAfterViewInit(): void {
    if (this.reducedMotion) {
      return;
    }

    this.setupCanvas();
    document.addEventListener('pointerover', this.handlePointerOver, true);
    document.addEventListener('pointerout', this.handlePointerOut, true);
    document.addEventListener('pointermove', this.handlePointerMove, { passive: true, capture: true });
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.animationFrameId = window.requestAnimationFrame(this.animateSparks);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
    }

    document.removeEventListener('pointerover', this.handlePointerOver, true);
    document.removeEventListener('pointerout', this.handlePointerOut, true);
    document.removeEventListener('pointermove', this.handlePointerMove, true);
    window.removeEventListener('resize', this.handleResize);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  scrollToSection(sectionId: SectionId): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private updateActiveSection(): void {
    const currentScroll = window.scrollY + window.innerHeight * 0.35;

    this.navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) {
        return;
      }

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (currentScroll >= top && currentScroll < bottom) {
        this.activeSection = item.id;
      }
    });
  }

  private setupCanvas(): void {
    const canvas = this.sparkCanvas?.nativeElement;
    if (!canvas) {
      return;
    }

    this.sparkContext = canvas.getContext('2d');
    if (!this.sparkContext) {
      return;
    }

    this.resizeCanvas();
    this.seedSparks();
  }

  private resizeCanvas(): void {
    const canvas = this.sparkCanvas?.nativeElement;
    const context = this.sparkContext;
    if (!canvas || !context) {
      return;
    }

    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(this.canvasWidth * pixelRatio);
    canvas.height = Math.floor(this.canvasHeight * pixelRatio);
    canvas.style.width = `${this.canvasWidth}px`;
    canvas.style.height = `${this.canvasHeight}px`;

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  private seedSparks(): void {
    this.sparks.length = 0;

    const area = this.canvasWidth * this.canvasHeight;
    const baseCount = Math.max(35, Math.min(110, Math.floor(area / 22000)));
    const sparkCount = Math.max(150, Math.min(126, Math.floor(baseCount * 1.3)));

    for (let i = 0; i < sparkCount; i += 1) {
      this.sparks.push(this.createSpark(Math.random() * this.canvasWidth, Math.random() * this.canvasHeight));
    }
  }

  private createSpark(x: number, y: number): Spark {
    const baseSpeed = 0.2 + Math.random() * 0.42;
    const angle = Math.random() * Math.PI * 2;

    return {
      x,
      y,
      vx: Math.cos(angle) * baseSpeed,
      vy: Math.sin(angle) * baseSpeed,
      spinDir: Math.random() > 0.5 ? 1 : -1,
      baseSpeed,
      angle,
      orbitPhase: Math.random() * Math.PI * 4,
      orbitSpeed: (0.5 + Math.random() * 0.012) * (Math.random() > 0.5 ? 1 : -1),
      size: 0.8 + Math.random() * 2.1,
      alpha: 0.2 + Math.random() * 0.5,
      drift: 0.1 + Math.random() * 0.8
    };
  }

  private animateSparks = (): void => {
    const context = this.sparkContext;
    if (!context || this.canvasWidth === 0 || this.canvasHeight === 0) {
      return;
    }

    context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    const attractor = this.pointerTarget;

    this.sparks.forEach((spark) => {
      const waveX = Math.cos(spark.orbitPhase) * 0.05 * spark.drift;
      const waveY = Math.sin(spark.orbitPhase * 1.25) * 0.05 * spark.drift;
      const targetVx = Math.cos(spark.angle) * spark.baseSpeed + waveX;
      const targetVy = Math.sin(spark.angle) * spark.baseSpeed + waveY;

      spark.vx += (targetVx - spark.vx) * 0.08;
      spark.vy += (targetVy - spark.vy) * 0.08;
      spark.orbitPhase += spark.orbitSpeed;
      spark.angle += Math.sin(spark.orbitPhase * 0.65) * 0.001;

      if (attractor) {
        const dx = attractor.x - spark.x;
        const dy = attractor.y - spark.y;
        const distance = Math.hypot(dx, dy);
        const attractorRadius = 400 + spark.size * 120;

        if (distance > 0 && distance < attractorRadius) {
          const influence = 1 - distance / attractorRadius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          const angular = directionX * spark.vy - directionY * spark.vx;
          if (Math.abs(angular) > 0.02) {
            spark.spinDir = angular >= 0 ? 1 : -1;
          }
          const tangentX = -directionY * spark.spinDir;
          const tangentY = directionX * spark.spinDir;
          const speed = Math.hypot(spark.vx, spark.vy);
          const sizeFactor = Math.min(1.65, Math.max(0.6, spark.size / 2.6));
          const speedFactor = Math.min(1.6, Math.max(0.5, speed / 1.5));
          const desiredRadius = 14 + spark.size * 13;
          const radialError = distance - desiredRadius;
          const radialNormalized = Math.max(-1, Math.min(1, radialError / Math.max(desiredRadius, 1)));
          const outwardDamping = radialError < 0 ? 0.5 : 1;
          const radialCorrection = radialNormalized * 0.016 * influence * outwardDamping;
          const gravityPull = (0.014 + influence * 0.03) * (0.9 + sizeFactor * 0.28);
          const ringProximity =
            1 - Math.min(1, Math.abs(radialError) / Math.max(desiredRadius * 0.9, 1));
          const orbitPull = (0.016 + speed * 0.01) * sizeFactor * speedFactor * influence;
          const tangentialForce = orbitPull * (0.5 + ringProximity * 0.9);

          spark.vx += directionX * gravityPull;
          spark.vy += directionY * gravityPull;
          spark.vx += directionX * radialCorrection;
          spark.vy += directionY * radialCorrection;
          spark.vx += tangentX * tangentialForce;
          spark.vy += tangentY * tangentialForce;
        }
      }

      spark.vx *= 0.992;
      spark.vy *= 0.992;
      spark.x += spark.vx;
      spark.y += spark.vy;

      if (spark.x < -30) {
        spark.x = this.canvasWidth + 30;
      } else if (spark.x > this.canvasWidth + 30) {
        spark.x = -30;
      }

      if (spark.y < -30) {
        spark.y = this.canvasHeight + 30;
      } else if (spark.y > this.canvasHeight + 30) {
        spark.y = -30;
      }

      context.beginPath();
      context.fillStyle = `rgba(176, 239, 255, ${spark.alpha})`;
      context.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
      context.fill();
    });

    this.animationFrameId = window.requestAnimationFrame(this.animateSparks);
  };

  private readonly handlePointerOver = (event: PointerEvent): void => {
    const source = event.target as Element | null;
    const match = source?.closest(this.magnetSelector);

    if (!match) {
      return;
    }

    this.hoveredElement = match;
    this.pointerTarget = { x: event.clientX, y: event.clientY };
  };

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (!this.hoveredElement) {
      return;
    }

    this.pointerTarget = { x: event.clientX, y: event.clientY };
  };

  private readonly handlePointerOut = (event: PointerEvent): void => {
    if (!this.hoveredElement) {
      return;
    }

    const source = event.target as Element | null;
    const exited = source?.closest(this.magnetSelector);
    if (!exited || exited !== this.hoveredElement) {
      return;
    }

    const next =
      event.relatedTarget instanceof Element ? event.relatedTarget.closest(this.magnetSelector) : null;

    if (next === exited) {
      return;
    }

    this.hoveredElement = null;
    this.pointerTarget = null;
  };

  private readonly handleResize = (): void => {
    this.resizeCanvas();
    this.seedSparks();
  };
}
