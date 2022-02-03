import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsPageComponent } from './main-news-page.component';

describe('MainNewsPageComponent', () => {
  let component: MainNewsPageComponent;
  let fixture: ComponentFixture<MainNewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNewsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
