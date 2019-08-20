import {NgModule} from "@angular/core";
import  {MatButtonModule, MatCardModule, MatMenuModule ,  MatInputModule, MatCheckboxModule,
    MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule  ,MatProgressSpinnerModule, MatExpansionModule, MatDividerModule, MatGridListModule} from '@angular/material';

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