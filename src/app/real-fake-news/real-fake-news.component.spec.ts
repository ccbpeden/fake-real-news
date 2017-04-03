import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealFakeNewsComponent } from './real-fake-news.component';

describe('RealFakeNewsComponent', () => {
  let component: RealFakeNewsComponent;
  let fixture: ComponentFixture<RealFakeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealFakeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealFakeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
