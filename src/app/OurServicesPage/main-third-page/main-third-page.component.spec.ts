import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThirdPageComponent } from './main-third-page.component';

describe('MainThirdPageComponent', () => {
  let component: MainThirdPageComponent;
  let fixture: ComponentFixture<MainThirdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainThirdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainThirdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
