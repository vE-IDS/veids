import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterButtonComponent } from './footer-button.component';

describe('FooterButtonComponent', () => {
  let component: FooterButtonComponent;
  let fixture: ComponentFixture<FooterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
