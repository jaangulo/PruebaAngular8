import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VISTADOSComponent } from './vista-dos.component';

describe('VISTADOSComponent', () => {
  let component: VISTADOSComponent;
  let fixture: ComponentFixture<VISTADOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VISTADOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VISTADOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
