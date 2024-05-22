import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private _MydataService:MydataService){}
  items:any=[]
  totalCartPrice:number = 0
  itemsInCart(){
    this._MydataService.getItemInCart().subscribe({
      next:(response)=>{
        console.log(response);
        this.items=response.data.products
        this.totalCartPrice = response.data.totalCartPrice
      }
    })
  }
  ngOnInit(): void {
      this.itemsInCart()
  }

}
