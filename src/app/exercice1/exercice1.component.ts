import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }

  value: any = "Date";
  message: string = "Welcome";
  ngOnInit(): void {
  }

  changeInput(): void {
    if (this.value === "Date") {
      this.value = "email";
      console.log("changement pour email");
    } else {
      this.value = "Date";
      console.log("changement pour date");
    }
  }
}
