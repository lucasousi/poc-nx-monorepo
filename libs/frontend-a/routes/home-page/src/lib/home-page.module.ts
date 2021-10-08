import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { PrivateButtonModule } from '@primavera/frontend-a/components/private-button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
      },
    ]),
    PrivateButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
