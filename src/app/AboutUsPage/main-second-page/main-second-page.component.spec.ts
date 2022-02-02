import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSecondPageComponent } from './main-second-page.component';

describe('MainSecondPageComponent', () => {
  let component: MainSecondPageComponent;
  let fixture: ComponentFixture<MainSecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSecondPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
