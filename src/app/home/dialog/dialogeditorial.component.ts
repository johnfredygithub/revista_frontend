import { Component , Inject } from "@angular/core";
import { MatDialogRef ,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiEditorialService } from "src/app/services/api-editorial.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import { editorial } from "src/app/models/editorial";
import { getMultipleValuesInSingleSelectionError } from "@angular/cdk/collections";
@Component({
    templateUrl: 'dialogeditorial.component.html'
})

export class dialogeditorialComponent{
 
    ///var tittulo="";
    public titulo: string="";
    public descripcion: string="";
    public autor: string="";
    //public estador: string="";
    
    estados=[{
        est:1,
        nombre: "activo"
    },{
        est:2,
        nombre: "inactivo"
    }
];    
seleccionada: string = this.estados[0].nombre;

    constructor(
        public dialogREF: MatDialogRef <dialogeditorialComponent>,
        public api_editorial:ApiEditorialService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA)public Editorial : editorial
    ){     
        if(this.Editorial!==null){
            this.titulo=Editorial.titulo;
            this.descripcion=Editorial.descripcion;
            this.autor=Editorial.autor;
            this.seleccionada=Editorial.estado;
        }
    }
close(){
    this.dialogREF.close();
}


EditEditorial()
{ 
    const Editorial :editorial = {id:this.Editorial.id , titulo:this.titulo, descripcion:this.descripcion, autor:this.autor, estado:this.seleccionada}
    this.api_editorial.edit(Editorial).subscribe(response =>{
        if(response.exito===1){
            this.dialogREF.close();
            this.snackBar.open("NOTICIA EDITADA CORRECTAMENTE ",'',{
                duration:2000
            });
        }
    });
}







addEditorial()
{
     
    const Editorial :editorial = {id:0, titulo:this.titulo, descripcion:this.descripcion, autor:this.autor, estado:this.seleccionada}
    this.api_editorial.add(Editorial).subscribe(response =>{
        if(response.exito===1){
            this.dialogREF.close();
            this.snackBar.open("NOTICIA INGRESADA CORRECTAMENTE ",'',{
                duration:2000
            });
        }
    });
}




}