import { ElectronicDetailComponent } from './../../components/electronic-list/electronic-detail/electronic-detail.component';
import { ElectronicListComponent } from './../../components/electronic-list/electronic-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'electronics', component: ElectronicListComponent },
  { path: '', component: ElectronicListComponent },
  { path: ':index', component: ElectronicDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
