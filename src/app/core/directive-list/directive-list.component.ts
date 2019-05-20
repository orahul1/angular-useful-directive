import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-list',
  templateUrl: './directive-list.component.html',
  styleUrls: ['./directive-list.component.scss']
})
export class DirectiveListComponent implements OnInit {
  userSelectedDirective: string = 'hideandshowPassword';
  userSelectedDirectiveName: string = 'Password show/hide';
  password:string = 'Password123';

  constructor() { }

  ngOnInit() {
  }

  selectedDirective(type, name){
    this.userSelectedDirective = type;
    this.userSelectedDirectiveName = name;
  }


}
