import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { ItemPageComponent } from './component/item-page/item-page.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,title:'home'},
  {path:'home/:item_id',canActivate:[AuthGuard],component:ItemPageComponent,title:'item_page'},
  {path:'login',component:LoginComponent,title:'login'},
  {path:'register',component:RegisterComponent,title:'register'},
  {path:'product',canActivate:[AuthGuard],component:ProductComponent,title:'product'},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent,title:'cart'},
  {path:'**',component:NotfoundComponent,title:'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
