import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionGeneralComponent } from './edicion-general.component';

describe('EdicionGeneralComponent', () => {
  let component: EdicionGeneralComponent;
  let fixture: ComponentFixture<EdicionGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
