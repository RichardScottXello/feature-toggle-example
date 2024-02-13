import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFeatureToggle]'
})
export class FeatureToggleDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appFeatureToggle(featureEnabled: boolean) {
    if (featureEnabled && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!featureEnabled && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
