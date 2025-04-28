import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotamsPanelComponent } from './notams-panel.component';

describe('NotamsPanelComponent', () => {
  let component: NotamsPanelComponent;
  let fixture: ComponentFixture<NotamsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotamsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotamsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
