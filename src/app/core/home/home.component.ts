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
    "id": 'hideAndShowPassword',
    "type": 'directive'
  },{
    "name": 'Debounce',
    "id": 'debounce',
    "type": 'directive'
  },{
    "name": 'Search (from a list)',
    "id": 'searchLocal',
    "type": 'directive'
  },{
    "name": 'Date (Built-in)',
    "id": 'date',
    "type": 'pipe'
  },{
    "name": 'Number (Built-in)',
    "id": 'number',
    "type": 'pipe'
  },{
    "name": 'String (Built-in)',
    "id": 'string',
    "type": 'pipe'
  }]

  constructor(private ds: DirectiveService) { }

  ngOnInit() {
  }

  selectedDirective(id,name){
    this.directiveComponent.selectedDirective(id, name);
  }

}
