import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDestinoViajeComponent } from './forms-destino-viaje.component';

describe('FormsDestinoViajeComponent', () => {
  let component: FormsDestinoViajeComponent;
  let fixture: ComponentFixture<FormsDestinoViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDestinoViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDestinoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
