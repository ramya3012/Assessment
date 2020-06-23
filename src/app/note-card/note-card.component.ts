import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output,EventEmitter} from '@angular/core';
import {NotesListComponent} from '../pages/notes-list/notes-list.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
     
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  
@Input() title: string;
@Input() body : string;
//@Input() time :string;
@Input() link:string;
@Output('delete') deleteEvent:EventEmitter<void> =new EventEmitter<void>();


 @ViewChild('truncator' ,{static:true})truncator:ElementRef<HTMLElement>;

 @ViewChild('bodyText' ,{static:true}) bodyText:ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.title)
    console.log(this.truncator)
   // console.log(this.time)
    let style=window.getComputedStyle(this.bodyText.nativeElement,null);
    let viewHeight=parseInt(style.getPropertyValue("height"),10);

    if(this.bodyText.nativeElement.scrollHeight >viewHeight){
      this.renderer.setStyle(this.truncator.nativeElement,'display','block');

    }
    else{
      this.renderer.setStyle(this.truncator.nativeElement,'display','none');
    }
  }
  onDeleteButtonClick()
  {
    debugger
this.deleteEvent.emit();
  }

}
