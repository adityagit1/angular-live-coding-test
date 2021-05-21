import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'form-validation',
    pathMatch: 'full',
    component: FormValidationComponent,
  },
  {
    path: 'table',
    pathMatch: 'full',
    component: TableComponent,
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    pathMatch: 'full',
    component: ProductViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
