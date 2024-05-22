import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private _HttpClient:HttpClient){}
  headers:any={
    headers:{
      'token' : localStorage.getItem('UserToken')!
    }
  }
  BaseUrl:string=`https://ecommerce.routemisr.com`
  // this._HttpClient.get("").subscribe()

  getItems():Observable<any>{
    return this._HttpClient.get(this.BaseUrl+`/api/v1/products`)
  }
  getSpecificItem(id:string):Observable<any>{
    return this._HttpClient.get(this.BaseUrl+`/api/v1/products/`+id)
  }
  addItemToCart(id:string):Observable<any>{
    return this._HttpClient.post(this.BaseUrl+`/api/v1/cart`,{headers:this.headers,data:{id}})
    
  }
  getItemInCart():Observable<any>{
    return this._HttpClient.get(this.BaseUrl+`/api/v1/cart`,this.headers)
  }
}
