import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OberoikiSharedComponent } from './oberoiki-shared.component';

describe('OberoikiSharedComponent', () => {
  let component: OberoikiSharedComponent;
  let fixture: ComponentFixture<OberoikiSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OberoikiSharedComponent]
    });
    fixture = TestBed.createComponent(OberoikiSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
