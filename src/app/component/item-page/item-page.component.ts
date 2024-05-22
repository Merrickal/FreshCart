import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MydataService } from 'src/app/services/mydata.service';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})

export class ItemPageComponent implements OnInit {
  nbOfReviews:number=0;
  OutStock:boolean=false;
  itemId:any = [];
  item_details:any =[];
  constructor(private _ActivatedRoute:ActivatedRoute , private _MydataService:MydataService){}

  Item_Details(itemId:any){
    this._MydataService.getSpecificItem(itemId).subscribe({
      next: (response) => {
        this.item_details = response.data;
        this.nbOfReviews = this.item_details.reviews.length;
        if (this.item_details.quantity==0) {
          this.OutStock = true
        }
        console.log(this.item_details)
        console.log(this.OutStock)
      },
      error: (err) => {
        console.log(err);
      },
      complete : () =>{
        console.log("complete");
        
      }
    })
  }
  itemIdCapture(){
    this._ActivatedRoute.paramMap.subscribe((params) =>{
      this.itemId = params.get("item_id");
      this.Item_Details(this.itemId)
    })
  }
  addToCart(){
    this._MydataService.addItemToCart(this.itemId)
    console.log(localStorage.getItem('UserToken'));
    console.log("success")
  }
  ngOnInit(): void {
      this.itemIdCapture();
  }

}
