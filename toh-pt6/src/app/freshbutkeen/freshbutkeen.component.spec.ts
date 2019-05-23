import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshbutkeenComponent } from './freshbutkeen.component';

describe('FreshbutkeenComponent', () => {
  let component: FreshbutkeenComponent;
  let fixture: ComponentFixture<FreshbutkeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshbutkeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshbutkeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
