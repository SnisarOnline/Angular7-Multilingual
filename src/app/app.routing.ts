import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const MyRootRoutes: Routes = [
  {
    path : 'todo',
    loadChildren: './todo-main/todo-main.module#TodoMainModule',
  },
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule',
  },
  { path: '**',  redirectTo: '', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(MyRootRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
