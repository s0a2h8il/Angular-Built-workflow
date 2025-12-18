import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExample } from './angular-example';

describe('AngularExample', () => {
  let component: AngularExample;
  let fixture: ComponentFixture<AngularExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
