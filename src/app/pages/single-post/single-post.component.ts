import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service.service';
import { post } from '../../../../datatype';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})

export class SinglePostComponent implements OnInit{
  postList!:post[];
  productData!: post;
  constructor(private activeRoute:ActivatedRoute, private product:ServiceService){
  
  }
  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    id &&  this.product.getpost(id).subscribe((result)=>{
   this.productData=result;
   console.log(this.productData);
    })
    this.list();
  }
  list(){
    this.product.postList().subscribe((res)=>{
    this.postList = res;
      // console.log(res)
    })
  }

}
