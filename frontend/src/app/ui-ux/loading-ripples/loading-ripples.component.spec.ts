import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingRipplesComponent } from './loading-ripples.component';

describe('LoadingRipplesComponent', () => {
  let component: LoadingRipplesComponent;
  let fixture: ComponentFixture<LoadingRipplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingRipplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingRipplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
