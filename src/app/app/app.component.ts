import { Component, OnInit } from "@angular/core";

@Component({
  selector: "moin-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor() {}
  hiFifeYourself(m) {
    console.log(m);
  }

  ngOnInit() {}
}
