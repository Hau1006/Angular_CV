import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainInfoComponent } from './main-info/main-info.component'
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/mycv', pathMatch: 'full' },
  { path: 'mycv', component: MainInfoComponent },
  { path: 'mycv/:id', component: MainInfoComponent },
  { path: 'list', component: ListComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: 'http://google.com' }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
