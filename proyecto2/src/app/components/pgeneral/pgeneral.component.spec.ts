import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgeneralComponent } from './pgeneral.component';

describe('PgeneralComponent', () => {
  let component: PgeneralComponent;
  let fixture: ComponentFixture<PgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
