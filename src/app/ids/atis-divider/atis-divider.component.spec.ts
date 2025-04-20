import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtisDividerComponent } from './atis-divider.component';

describe('AtisDividerComponent', () => {
  let component: AtisDividerComponent;
  let fixture: ComponentFixture<AtisDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtisDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtisDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
