import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaMagistradoComponent } from './baja-magistrado.component';

describe('BajaMagistradoComponent', () => {
  let component: BajaMagistradoComponent;
  let fixture: ComponentFixture<BajaMagistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaMagistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaMagistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
