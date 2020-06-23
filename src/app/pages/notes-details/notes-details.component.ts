import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Note} from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  note:Note;
  noteId:number;
  new:boolean;
 
  constructor(private notesService:NotesService ,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe((params:Params)=>{
      this.note=new Note();
       if(params.id){
         this.note=this.notesService.get(params.id);
         this.noteId=params.id;
         this.new=false;
      
       }
       else{
         this.new=true;
       }
     })
    
  
  }
  onSubmit(form: NgForm){

    if(this.new){
      this.notesService.add(form.value);
 
    }
    else{
      this.notesService.update(this.noteId,form.value.title,form.value.body);
      //this.notesService.update(this.noteId,form.value.title,form.value.body,form.value.time);
    }
    this.router.navigateByUrl('/');
    
  }
  cancel(){
    this.router.navigateByUrl('/');
  
  }


}
