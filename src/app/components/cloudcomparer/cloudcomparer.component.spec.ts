import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudcomparerComponent } from './cloudcomparer.component';

describe('CloudcomparerComponent', () => {
  let component: CloudcomparerComponent;
  let fixture: ComponentFixture<CloudcomparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudcomparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudcomparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
