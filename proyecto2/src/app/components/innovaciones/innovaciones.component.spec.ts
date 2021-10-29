import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovacionesComponent } from './innovaciones.component';

describe('InnovacionesComponent', () => {
  let component: InnovacionesComponent;
  let fixture: ComponentFixture<InnovacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
