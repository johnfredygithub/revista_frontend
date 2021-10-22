import { Component, OnInit } from '@angular/core';
import { ApiEditorialService } from '../services/api-editorial.service';
import { Response } from '../models/response'
import { dialogeditorialComponent } from './dialog/dialogeditorial.component';
import {MatDialog} from '@angular/material/dialog';
import { editorial } from '../models/editorial';
import { DialogDeleteComponent } from '../common/delete/dialogdelete.component';
//import { timingSafeEqual } from 'crypto';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { Estado } from '../models/estado';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
public lst: any[]=[];
public columnas: string[] = ['id','titulo','descripcion','autor','estado','ACTIONS'];
readonly width:string='300px';
  constructor(
    private ApiEditorial:ApiEditorialService,
    public dialog:MatDialog,
    public snackBar:MatSnackBar,
  ) {
   }

  ngOnInit(): void {
    this.geteditorial();
  }
geteditorial(){
  this.ApiEditorial.geteditorial().subscribe( response => {
    this.lst=response.data;
  });
}  

openAdd(){
   const dialogREF=this.dialog.open(dialogeditorialComponent,{
     width:this.width
   });
   dialogREF.afterClosed().subscribe(result => {
     this.geteditorial();
   });
}


openEdit(Editorial: editorial){
  const dialogREF=this.dialog.open(dialogeditorialComponent,{
    width:this.width,
    data:Editorial
    
  });
  dialogREF.afterClosed().subscribe(result => {
    this.geteditorial();
  });
  console.log(Editorial);
}

delete (Editorial: editorial){
  const dialogREF=this.dialog.open(DialogDeleteComponent,{
    width:this.width,        
  });
  dialogREF.afterClosed().subscribe(result => {
    if(result){
      this.ApiEditorial.DELETE(Editorial.id).subscribe(response => {
        if(response.exito===1){
          this.geteditorial();
          this.snackBar.open("NOTICIA ELIMINADA CON EXITO","",{
            duration:2000
          });
        }
      });
    }
    
  });

}



}

