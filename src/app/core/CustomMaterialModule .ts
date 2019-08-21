import {NgModule} from "@angular/core";
import  {MatButtonModule, MatCardModule, MatMenuModule ,  MatInputModule, MatCheckboxModule,
    MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule  ,MatProgressSpinnerModule, MatExpansionModule, MatDividerModule, MatGridListModule, MatTableModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
    const Material = [
      MatToolbarModule,
      MatButtonModule,
      MatListModule,
      MatSidenavModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatCardModule,
      MatInputModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      MatExpansionModule,
      MatGridListModule,
      MatDividerModule,
      MatSelectModule,
      MatTableModule
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