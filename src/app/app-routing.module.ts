import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NopageComponent } from './Components/nopage/nopage.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductComponent } from './Components/product/product.component';
import { SigninComponent } from './Components/signin/signin.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { UserlistComponent } from './Components/userlist/userlist.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"", component: SigninComponent},
  {path:"dashboard",component: DashboardComponent, canActivate:[AuthGuard]},
  {path:"products", component:ProductListComponent, canActivate:[AuthGuard]},
  {path:"products/:id", component: ProductComponent, canActivate:[AuthGuard]},
  {path:"userlist", component: UserlistComponent, canActivate:[AuthGuard]},
  {path:"userdetails/:id", component: UserdetailsComponent, canActivate:[AuthGuard]},
  {path:"adduser", component: AdduserComponent, canActivate:[AuthGuard]},
  { path: 'not-found', component: NopageComponent},
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
