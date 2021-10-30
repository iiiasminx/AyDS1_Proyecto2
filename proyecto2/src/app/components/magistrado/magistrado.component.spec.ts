import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagistradoComponent } from './magistrado.component';

describe('MagistradoComponent', () => {
  let component: MagistradoComponent;
  let fixture: ComponentFixture<MagistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
