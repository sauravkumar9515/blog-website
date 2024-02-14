import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent{

  @Input() postList:any={};



postMessage:string|undefined;
// constructor(private service:ServiceService){}

ngOnInit():void{
  // console.log(this.postList)
}

// list(){
//   this.service.postList().subscribe((res)=>{
//     this.postList = res;
//     // console.log(res)
//   })
// }
}
