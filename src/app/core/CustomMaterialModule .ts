import {NgModule} from "@angular/core";
import  {MatButtonModule, MatCardModule, MatMenuModule ,  MatInputModule, MatCheckboxModule, MatSelectModule,
      MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule  ,MatProgressSpinnerModule, MatExpansionModule, 
      MatDividerModule, MatGridListModule, MatSnackBarModule} from '@angular/material';

    const Material = [
      MatToolbarModule,
      MatButtonModule,
      MatListModule,
      MatSidenavModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      MatExpansionModule,
      MatGridListModule,
      MatDividerModule,
      MatSnackBarModule,
      MatSelectModule
    ]

    @NgModule({
        imports: [
          Material
        ],
        exports:[
          Material
        ]
      })

      export class CustomMaterialModule  { }