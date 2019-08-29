import { Injectable  , NgZone} from '@angular/core';
import { Alert , AlertType } from '../models/alert.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public _snackBar: MatSnackBar ,  private zone: NgZone) {

   }
 
 
  open(message, action = 'success', duration = 50000) {
    this.zone.run(() => {
        this._snackBar.open(message, action, { duration });
    });

}
}
