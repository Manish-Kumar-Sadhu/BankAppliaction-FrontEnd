import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';


import  {MatButtonModule, MatCardModule, MatMenuModule ,  MatInputModule, MatCheckboxModule,
    MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule  ,MatProgressSpinnerModule} from '@angular/material';


    @NgModule({
        imports: [
          CommonModule,
          MatToolbarModule,
          MatButtonModule,
          MatListModule,
          MatSidenavModule,
          MatIconModule,
          MatMenuModule,
          MatCardModule,
          MatInputModule,
          MatProgressSpinnerModule,
          MatCheckboxModule
        ],
        exports:[
            CommonModule,
          MatToolbarModule,
          MatButtonModule,
          MatListModule,
          MatSidenavModule,
          MatIconModule,
          MatMenuModule,
          MatCardModule,
          MatInputModule,
          MatProgressSpinnerModule,
          MatCheckboxModule
        ]
      })

      export class CustomMaterialModule  { }