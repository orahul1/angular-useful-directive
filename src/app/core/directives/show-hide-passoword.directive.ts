import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[showHidePassoword]'
})
export class ShowHidePassowordDirective {
  //initially setting as false
  private _shown = false; 
  //right side input show eye image => change here if you want
  showImage = '<img style="width: 20px; margin-left: -30px; cursor: pointer;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC44NSA0ODguODUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC44NSA0ODguODU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIGQ9Ik0yNDQuNDI1LDk4LjcyNWMtOTMuNCwwLTE3OC4xLDUxLjEtMjQwLjYsMTM0LjFjLTUuMSw2LjgtNS4xLDE2LjMsMCwyMy4xYzYyLjUsODMuMSwxNDcuMiwxMzQuMiwyNDAuNiwxMzQuMiAgIHMxNzguMS01MS4xLDI0MC42LTEzNC4xYzUuMS02LjgsNS4xLTE2LjMsMC0yMy4xQzQyMi41MjUsMTQ5LjgyNSwzMzcuODI1LDk4LjcyNSwyNDQuNDI1LDk4LjcyNXogTTI1MS4xMjUsMzQ3LjAyNSAgIGMtNjIsMy45LTExMy4yLTQ3LjItMTA5LjMtMTA5LjNjMy4yLTUxLjIsNDQuNy05Mi43LDk1LjktOTUuOWM2Mi0zLjksMTEzLjIsNDcuMiwxMDkuMywxMDkuMyAgIEMzNDMuNzI1LDMwMi4yMjUsMzAyLjIyNSwzNDMuNzI1LDI1MS4xMjUsMzQ3LjAyNXogTTI0OC4wMjUsMjk5LjYyNWMtMzMuNCwyLjEtNjEtMjUuNC01OC44LTU4LjhjMS43LTI3LjYsMjQuMS00OS45LDUxLjctNTEuNyAgIGMzMy40LTIuMSw2MSwyNS40LDU4LjgsNTguOEMyOTcuOTI1LDI3NS42MjUsMjc1LjUyNSwyOTcuOTI1LDI0OC4wMjUsMjk5LjYyNXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />';
  //right side input hide eye image => change here if you want
  hideImage = '<img style="width: 20px; margin-left: -30px; cursor: pointer;"  src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDk3LjE5OSA0OTcuMTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTcuMTk5IDQ5Ny4xOTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTkxLjIsMjQ4LjZjMC0xNS4zLDUuNy0yOC43LDE3LjItNDAuMnMyNC45LTE3LjIsNDAuMi0xNy4yTDE5MS4yLDI0OC42eiBNMTc0LDI2NS44Yy0xLjktNS43LTEuOS0xMS41LTEuOS0xNy4yICAgYzAtNDIuMSwzNC40LTc2LjUsNzYuNS03Ni41YzUuNzAxLDAsMTEuNSwwLDE3LjIwMSwxLjlsNTEuNi01MS42Yy0yMS01LjctNDQtNy43LTY4LjktNy43Qzc2LjUsMTE0LjcsMCwyNDguNiwwLDI0OC42ICAgczMwLjYsNTMuNSw5Ny41LDkzLjdMMTc0LDI2NS44eiBNMzA2LDI0OC42TDI0OC42LDMwNmMxNS4zLDAsMjguNzAxLTUuNyw0MC4yMDEtMTcuMkMzMDAuMTk5LDI3Ny4zLDMwNiwyNjMuODk5LDMwNiwyNDguNnogICAgTTM5OS42OTksMTU0Ljg5OWwtNzYuNSw3Ni41YzEuOSw1LjcsMS45LDExLjUsMS45LDE3LjJjMCw0Mi4xLTM0LjQsNzYuNS03Ni41LDc2LjVjLTUuNywwLTExLjUsMC0xNy4yLTEuOUwxNzkuOCwzNzQuOCAgIGMyMSw1LjcsNDQsNy42LDY4LjgsNy42YzE3Mi4wOTksMCwyNDguNTk5LTEzMy45LDI0OC41OTktMTMzLjlTNDY2LjYsMTk1LjEsMzk5LjY5OSwxNTQuODk5eiBNNDAxLjQsNzYuODk5bC0zMjQuNSwzMjQuNSAgIGwxOC45LDE4LjlMNDIwLjQsOTUuN0w0MDEuNCw3Ni44OTl6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />';

  constructor(private el: ElementRef) {
    this.setup()
   }


  toggle(span: HTMLElement){
    //toggle hide and show base on user click event
    this._shown = !this._shown;
    if(this._shown){
      //changing type from password to text 
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = this.hideImage;
    }else{
      //changing type from text to password 
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = this.showImage;
    }
  }

  setup(){
    //parent element reference
    const parent = this.el.nativeElement.parentNode;
    //creating new span element
    const span = document.createElement('span');
    //adding image to span => opened eye
    span.innerHTML = this.showImage;
    //adding EventListener for click
    span.addEventListener( 'click', (event) => {
      this.toggle(span);
    });
    //adding span to the parent element
    parent.appendChild(span);      
  }

}
