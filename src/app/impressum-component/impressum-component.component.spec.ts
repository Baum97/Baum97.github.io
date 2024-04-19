import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumComponentComponent } from './impressum-component.component';

describe('ImpressumComponentComponent', () => {
  let component: ImpressumComponentComponent;
  let fixture: ComponentFixture<ImpressumComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpressumComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpressumComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
