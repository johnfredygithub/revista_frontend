import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ApiEditorialService } from "src/app/services/api-editorial.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import { editorial } from "src/app/models/editorial";
import { getMultipleValuesInSingleSelectionError } from "@angular/cdk/collections";
@Component({
    templateUrl: 'dialogeditorial.component.html'
})
export class dialogeditorialComponent{
    constructor(
        public dialogREF: MatDialogRef <dialogeditorialComponent>,
        public api_editorial:ApiEditorialService,
        public snackBar:MatSnackBar,
    ){     
    }
close(){
    this.dialogREF.close();
}

addEditorial()
{
    const Editorial :editorial = { titulo:'SDAD', descripcion:'DADS', autor:'SADDA', estado:'ASDA'}
    this.api_editorial.add(Editorial).subscribe(response =>{
        if(response.exito===1){
            this.dialogREF.close();
            this.snackBar.open("NOTICIA ingresadA",'',{
                duration:2000
            });
        }
    });
}
}