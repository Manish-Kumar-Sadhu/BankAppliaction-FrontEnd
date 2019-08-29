import {NgModule} from "@angular/core";
import  { MatButtonModule, MatCardModule, MatMenuModule ,  MatInputModule, MatCheckboxModule, MatDialogModule,
          MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule  ,MatProgressSpinnerModule, MatPaginatorModule,
          MatExpansionModule, MatDividerModule, MatGridListModule, MatTableModule , MatTabsModule, MatSlideToggleModule, MatSortModule} from '@angular/material';
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
      MatTableModule,
      MatTabsModule,
      MatDialogModule,
      MatPaginatorModule,
      MatSlideToggleModule,
      MatSortModule
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