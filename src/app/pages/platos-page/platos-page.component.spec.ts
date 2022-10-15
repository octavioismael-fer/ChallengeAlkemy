import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosPageComponent } from './platos-page.component';

describe('PlatosPageComponent', () => {
  let component: PlatosPageComponent;
  let fixture: ComponentFixture<PlatosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
