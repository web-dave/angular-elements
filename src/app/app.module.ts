import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { MoinComponent } from "./moin/moin.component";
import { BtnComponent } from "./btn/btn.component";

@NgModule({
  declarations: [MoinComponent, BtnComponent],
  entryComponents: [MoinComponent, BtnComponent],
  imports: [BrowserModule]
})
export class AppModule {
  constructor(private injector: Injector) {
    const moinComponent = createCustomElement(MoinComponent, { injector });
    const btnComponent = createCustomElement(BtnComponent, { injector });
    // console.log(moinComponent);
    customElements.define("moin-moin", moinComponent);
    customElements.define("moin-btn", btnComponent);
  }
  ngDoBootstrap() {}
}
