import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextConsultsComponent } from './next-consults.component';

describe('NextConsultsComponent', () => {
  let component: NextConsultsComponent;
  let fixture: ComponentFixture<NextConsultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextConsultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextConsultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
