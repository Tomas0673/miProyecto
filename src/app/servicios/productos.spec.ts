import { TestBed } from '@angular/core/testing';
import { Productos } from '../paginas/productos/productos';

describe('Productos', () => {
  let service: Productos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


