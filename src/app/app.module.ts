import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { MoinComponent } from "./moin/moin.component";

@NgModule({
  declarations: [MoinComponent],
  entryComponents: [MoinComponent],
  imports: [BrowserModule]
})
export class AppModule {
  constructor(private injector: Injector) {
    const moinComponent = createCustomElement(MoinComponent, { injector });
    customElements.define("moin-moin", moinComponent);
  }

  ngDoBootstrap() {}
}
