import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoolFeatureComponent } from './my-cool-feature.component';

describe('MyCoolFeatureComponent', () => {
  let component: MyCoolFeatureComponent;
  let fixture: ComponentFixture<MyCoolFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCoolFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCoolFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
