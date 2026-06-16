import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orfertas } from './orfertas';

describe('Orfertas', () => {
  let component: Orfertas;
  let fixture: ComponentFixture<Orfertas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orfertas],
    }).compileComponents();

    fixture = TestBed.createComponent(Orfertas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
