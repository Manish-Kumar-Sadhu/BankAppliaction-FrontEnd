import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOpsComponent } from './bank-ops.component';

describe('BankOpsComponent', () => {
  let component: BankOpsComponent;
  let fixture: ComponentFixture<BankOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
