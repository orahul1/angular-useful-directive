import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-list',
  templateUrl: './directive-list.component.html',
  styleUrls: ['./directive-list.component.scss']
})
export class DirectiveListComponent implements OnInit {
  userSelectedDirective: string = 'hideAndShowPassword';
  userSelectedDirectiveName: string = 'Password show/hide';
  password: string = 'Password123';

  constructor() { }

  ngOnInit() {
  }

  selectedDirective(id, name){
    this.userSelectedDirective = id;
    this.userSelectedDirectiveName = name;
  }


}
