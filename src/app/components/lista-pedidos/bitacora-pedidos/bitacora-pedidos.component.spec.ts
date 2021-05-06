import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraPedidosComponent } from './bitacora-pedidos.component';

describe('BitacoraPedidosComponent', () => {
  let component: BitacoraPedidosComponent;
  let fixture: ComponentFixture<BitacoraPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
