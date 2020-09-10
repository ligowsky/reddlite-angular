import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './features/auth/auth-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule, AuthRoutingModule],
})
export class AppRoutingModule {}
