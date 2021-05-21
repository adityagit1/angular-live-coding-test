import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDiloagComponent } from './email-diloag.component';

describe('EmailDiloagComponent', () => {
  let component: EmailDiloagComponent;
  let fixture: ComponentFixture<EmailDiloagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDiloagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDiloagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
