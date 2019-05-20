import { Component, OnInit, ViewChild } from '@angular/core';
import { DirectiveService } from 'src/app/shared/services/directive.service';
import { DirectiveListComponent } from '../directive-list/directive-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(DirectiveListComponent)
  private directiveComponent: DirectiveListComponent;
  directiveList = [{
    "name": 'Password show/hide',
    "type": 'hideandshowPassword'
  },{
    "name": 'Debounce',
    "type": 'debounce'
  }]

  constructor(private ds: DirectiveService) { }

  ngOnInit() {
  }

  selectedDirective(type,name){
    this.directiveComponent.selectedDirective(type, name);
  }

}
