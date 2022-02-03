import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSingleNewsComponent } from './main-single-news.component';

describe('MainSingleNewsComponent', () => {
  let component: MainSingleNewsComponent;
  let fixture: ComponentFixture<MainSingleNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSingleNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSingleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
