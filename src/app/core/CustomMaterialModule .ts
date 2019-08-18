import {NgModule} from "@angular/core";
import  {MatButtonModule, MatCardModule, MatMenuModule ,  MatInputModule, MatCheckboxModule,
    MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule  ,MatProgressSpinnerModule} from '@angular/material';

    const MaterialComponents = [
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

    @NgModule({
        imports: [
          MaterialComponents
        ],
        exports:[
          MaterialComponents
        ]
      })

      export class CustomMaterialModule  { }