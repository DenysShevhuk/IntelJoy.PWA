import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {CommonModule} from '@angular/common';
const routes: Routes = [
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class MenuModules {
}

