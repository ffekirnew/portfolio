import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsComponent } from './specializations.component';

describe('SpecializationsComponent', () => {
  let component: SpecializationsComponent;
  let fixture: ComponentFixture<SpecializationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
