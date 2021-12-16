import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './../../../../ngrx-forms/src/lib/dynamic-form/dynamic-form.component';
import { NgrxErrorModule } from '@angular-ngrx-nx-realworld-example-app/ngrx-error';
import { NgrxFormsModule } from '@angular-ngrx-nx-realworld-example-app/ngrx-forms';
import { ProfileArticlesComponent } from './../../../../profile/src/lib/profile-articles.component';
import { ProfileModule } from './../../../../profile/src/lib/profile.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule],
  entryComponents: [ProfileModule, NgrxErrorModule, NgrxFormsModule],
})
export class UiWebcomponentsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const profiles = createCustomElement(ProfileArticlesComponent, { injector: this.injector });
    const dynamicform = createCustomElement(DynamicFormComponent, { injector: this.injector });
    customElements.define('dynamic-form', profiles);
    customElements.define('profiles', dynamicform);
  }
}
