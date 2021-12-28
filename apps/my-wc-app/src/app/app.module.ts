import { DummyComponent, UiWebcomponentsModule } from '@angular-ngrx-nx-realworld-example-app/ui/webcomponents/src';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiWebcomponentsModule],
  providers: [],
  bootstrap: [], // EMPTY!
})
export class AppModule implements DoBootstrap {
  
  constructor(private injector: Injector) {
  }
  
  ngDoBootstrap(appRef: ApplicationRef): void {
    const ce = createCustomElement(DummyComponent, { injector: this.injector });
    customElements.define('my-dummy', ce);
  }


}

