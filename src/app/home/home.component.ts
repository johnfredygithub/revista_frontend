import { Component, OnInit } from '@angular/core';
import { ApiEditorialService } from '../services/api-editorial.service';
import { Response } from '../models/response'
import { dialogeditorialComponent } from './dialog/dialogeditorial.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
  public lst: any[]=[];
public columnas: string[] = ['id','titulo','descripcion','autor','estado'];

  constructor(
    private ApiEditorial:ApiEditorialService,
    public dialog:MatDialog
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
     width:'300'
   });
   dialogREF.afterClosed().subscribe(result => {
     this.geteditorial();
   });
}



}

