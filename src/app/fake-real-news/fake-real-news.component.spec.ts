import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeRealNewsComponent } from './fake-real-news.component';

describe('FakeRealNewsComponent', () => {
  let component: FakeRealNewsComponent;
  let fixture: ComponentFixture<FakeRealNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeRealNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeRealNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
