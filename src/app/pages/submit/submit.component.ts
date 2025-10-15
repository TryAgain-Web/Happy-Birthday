import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
name: string='';
message: string='';
photo: string='';
onSubmit() {
  console.log(this.name, this.message, this.photo);
  // later you’ll push it toz Firebase or MySQL
}

  constructor() { }

  ngOnInit(): void {
  }

}
