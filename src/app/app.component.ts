import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Continous integration setup Done';
  typesucess = 'success';
  typeinfo = 'info';
  typewarning = 'warning';
  typedanger = 'danger';
  hidesucess = false;
  hidewarning = false;
  hideinfo = false;
  hidedanger = false;

  hsucess () {
    this.hidesucess = true;
  }
  hwarning () {
    this.hidewarning = true;
  }
  hinfo () {
    this.hideinfo = true;
  }
  hdanger () {
    this.hidedanger = true;
  }
}
