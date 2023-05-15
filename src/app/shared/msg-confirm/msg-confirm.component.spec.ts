import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgConfirmComponent } from './msg-confirm.component';

describe('MsgConfirmComponent', () => {
  let component: MsgConfirmComponent;
  let fixture: ComponentFixture<MsgConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
