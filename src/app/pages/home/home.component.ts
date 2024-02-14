import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { post } from '../../../../datatype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
postList!:post[];
  constructor(private service:ServiceService){}
  ngOnInit():void{
    this.list();
  }
  list(){
    
    this.service.postList().subscribe((res)=>{
      this.postList = res;
      // console.log(res)
    })
  }
}
