import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateButtonComponent } from './private-button.component';

describe('PrivateButtonComponent', () => {
  let component: PrivateButtonComponent;
  let fixture: ComponentFixture<PrivateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
