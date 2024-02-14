import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  addPostMessage:string|undefined;
  constructor(private service:ServiceService,private route:Router){}

  submit(data:any){
    
    this.service.addPost(data).subscribe((res)=>{
      if(res){
        this.addPostMessage="Post added Successfully";
      }
      setTimeout(()=>this.addPostMessage=undefined,3000);
      this.route.navigate(['/home']);
    })
  }
}
