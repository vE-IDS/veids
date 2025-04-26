import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtisComponent } from './atis.component';

describe('AtisComponent', () => {
  let component: AtisComponent;
  let fixture: ComponentFixture<AtisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
