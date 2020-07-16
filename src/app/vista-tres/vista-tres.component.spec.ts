import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VISTATRESComponent } from './vista-tres.component';

describe('VISTATRESComponent', () => {
  let component: VISTATRESComponent;
  let fixture: ComponentFixture<VISTATRESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VISTATRESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VISTATRESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
