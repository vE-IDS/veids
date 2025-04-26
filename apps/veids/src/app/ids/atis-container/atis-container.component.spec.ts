import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtisContainerComponent } from './atis-container.component';

describe('AtisContainerComponent', () => {
  let component: AtisContainerComponent;
  let fixture: ComponentFixture<AtisContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtisContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
