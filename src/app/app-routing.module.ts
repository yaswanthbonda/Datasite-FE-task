// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { CrudListComponent } from './modules/crud/crud-list/crud-list.component';

// const routes: Routes = [

//   {path:'posts',component:CrudListComponent},
//   {
//     path: 'list',
//     loadChildren: () => import('./modules/crud/crud.module').then(m => m.CrudModule),
//   }
// ];


// const rotes:Routes=[
//   {
//     path: '',
//     loadChildren: () => import('./modules/crud/crud.module').then(m => m.CrudModule),
//     outlet: 'child1'
// },
// {
//     path: '',
//     loadChildren: () => import('./modules/crud-grid/crud-grid.module').then(m => m.CrudGridModule),
//     outlet: 'child2'
// }
// ]

// @NgModule({
//   imports: [RouterModule.forRoot(rotes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
