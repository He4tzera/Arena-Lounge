import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteRouteComponent } from './teste-route.component';

describe('TesteRouteComponent', () => {
  let component: TesteRouteComponent;
  let fixture: ComponentFixture<TesteRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
