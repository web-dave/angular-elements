import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MoinComponent } from "./moin/moin.component";
import { AppComponent } from "./app/app.component";

@NgModule({
  declarations: [MoinComponent, AppComponent],
  entryComponents: [MoinComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
