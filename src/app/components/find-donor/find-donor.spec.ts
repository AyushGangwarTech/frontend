import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDonor } from './find-donor';

describe('FindDonor', () => {
  let component: FindDonor;
  let fixture: ComponentFixture<FindDonor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindDonor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDonor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
