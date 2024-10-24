import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoMultasComponent } from './pago-multas.component';

describe('PagoMultasComponent', () => {
  let component: PagoMultasComponent;
  let fixture: ComponentFixture<PagoMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoMultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
