import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsLayoutComponent } from './ids-layout.component';

describe('IdsLayoutComponent', () => {
  let component: IdsLayoutComponent;
  let fixture: ComponentFixture<IdsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
