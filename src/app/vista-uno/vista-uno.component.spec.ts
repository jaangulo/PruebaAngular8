import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VISTAUNOComponent } from './vista-uno.component';

describe('VISTAUNOComponent', () => {
  let component: VISTAUNOComponent;
  let fixture: ComponentFixture<VISTAUNOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VISTAUNOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VISTAUNOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
