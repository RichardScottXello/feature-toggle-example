import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyCoolFeatureComponent } from './my-cool-feature/my-cool-feature.component';
import { FeatureToggleDirective } from './feature-toggle.directive';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MyCoolFeatureComponent, FeatureToggleDirective],
    });
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should render my-cool-feature when the feature is enabled', () => {
    appComponent.isFeatureEnabled = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const coolFeatureElement = compiled.querySelector('app-my-cool-feature');
    expect(compiled.querySelector('app-my-cool-feature')).toBeTruthy();
    expect(coolFeatureElement.children.length).toBeGreaterThan(0);
  });

  it('should not render my-cool-feature when the feature is disabled', () => {
    appComponent.isFeatureEnabled = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const coolFeatureElement = compiled.querySelector('app-my-cool-feature');

    expect(coolFeatureElement).toBeFalsy();
    if (coolFeatureElement) {
      expect(coolFeatureElement.children.length).toBe(0);
    }
  });

  it('should toggle my-cool-feature based on feature state', () => {
    appComponent.isFeatureEnabled = true;
    fixture.detectChanges();

    let compiled = fixture.nativeElement;
    let coolFeatureElement = compiled.querySelector('app-my-cool-feature');

    expect(coolFeatureElement).toBeTruthy();
    expect(coolFeatureElement.children.length).toBeGreaterThan(0);

    appComponent.isFeatureEnabled = false;
    fixture.detectChanges();

    compiled = fixture.nativeElement;
    coolFeatureElement = compiled.querySelector('app-my-cool-feature');

    expect(coolFeatureElement).toBeFalsy();
    if (coolFeatureElement) {
      expect(coolFeatureElement.children.length).toBe(0);
    }
  });

  it('should respond to dynamic changes in feature state', () => {
    appComponent.isFeatureEnabled = true;
    fixture.detectChanges();

    let compiled = fixture.nativeElement;
    let coolFeatureElement = compiled.querySelector('app-my-cool-feature');

    expect(coolFeatureElement).toBeTruthy();
    expect(coolFeatureElement.children.length).toBeGreaterThan(0);

    // Simulate dynamic feature state change
    appComponent.isFeatureEnabled = !appComponent.isFeatureEnabled;
    fixture.detectChanges();

    compiled = fixture.nativeElement;
    coolFeatureElement = compiled.querySelector('app-my-cool-feature');

    expect(coolFeatureElement).toBeFalsy();
    if (coolFeatureElement) {
      expect(coolFeatureElement.children.length).toBe(0);
    }
  });


});
