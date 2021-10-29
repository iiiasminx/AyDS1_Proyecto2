import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMagistradosComponent } from './lista-magistrados.component';

describe('ListaMagistradosComponent', () => {
  let component: ListaMagistradosComponent;
  let fixture: ComponentFixture<ListaMagistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMagistradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMagistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
