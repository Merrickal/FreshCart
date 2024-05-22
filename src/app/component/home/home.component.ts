import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private _MydataService:MydataService){}

  items:any = []

  Items(){
    this._MydataService.getItems().subscribe({
      next: (response) => {
        this.items = response.data;
        console.log(this.items)
      },
      error: (err) => {
        console.log(err);
      },
      complete : () =>{
        console.log("complete");
        
      }
    })
  }

  ngOnInit(): void {
      this.Items()
  }
}
