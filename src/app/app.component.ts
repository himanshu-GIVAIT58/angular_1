import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 count = 0;


  ngOnInit(): void {
    this.count = 0;
  }

 increment(){
  this.count++;

 }

 decrement(){
  this.count--;
 }

 reset(){
  this.count = 0;
 }


}
