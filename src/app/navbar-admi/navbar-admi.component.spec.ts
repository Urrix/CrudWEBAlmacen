import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdmiComponent } from './navbar-admi.component';

describe('NavbarAdmiComponent', () => {
  let component: NavbarAdmiComponent;
  let fixture: ComponentFixture<NavbarAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
