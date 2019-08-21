import {NgModule} from "@angular/core";
import  {MatButtonModule, MatCardModule, MatMenuModule ,  MatInputModule, MatCheckboxModule, MatTabsModule,
    MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule  ,MatProgressSpinnerModule, MatExpansionModule, MatDividerModule, MatGridListModule, MatTabGroup, MatTableModule, MatSnackBarModule} from '@angular/material';
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
      MatSnackBarModule,
      MatSelectModule,
      MatTabsModule,
      MatIconModule
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