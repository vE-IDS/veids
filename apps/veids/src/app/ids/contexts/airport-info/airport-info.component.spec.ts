import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirportInfoComponent } from './airport-info.component';

describe('AirportInfoComponent', () => {
  let component: AirportInfoComponent;
  let fixture: ComponentFixture<AirportInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
