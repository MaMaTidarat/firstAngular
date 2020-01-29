import {HttpClient} from '@angular/common/http/';
import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-asyn-awit',
  templateUrl: './asyn-awit.component.html',
  styleUrls: ['./asyn-awit.component.scss']
})
export class AsynAwitComponent implements OnInit {
  url : string ='https://jsonplaceholder.typicode.com/users';
  url1 : string ='https://jsonplaceholder.typicode.com/todos/1';
  url2 : string ='https://jsonplaceholder.typicode.com/todos/2';
  url3 : string ='https://jsonplaceholder.typicode.com/todos/3';

  items : any =[];
  constructor(private http:HttpClient) { }

  async ngOnInit() {
   // console.log('start 1 ---- ');
    // this.asyncFunction(()=>{
    //   console.log('start 3 ---- ');

    // });
    // await this.asyncFunction();
    // console.log('start 3 ---- ');

   // this.getPosts();
  // this.onObservableLoad();
  }


  getPosts() {
    this.http.get(this.url).subscribe(data => {
      console.log(data);
    });
  }

  syncFunction(){
    confirm('comfirm !!');
    console.log('2 sync function');
  }

 // asyncFunction(callback){
  asyncFunction(){
    return new Promise( resolve => {
      setTimeout(() => {
        console.log('2 sync function');
        resolve();
       // callback();
      }, 1000);
    } );
    
  }

  onObservableLoad(){
    this.http.get(this.url).subscribe(data1 => {
      console.log("1 ===> "+ data1);
      this.http.get(this.url).subscribe(data2 => {
        console.log("2 ===> "+ data2);
        this.http.get(this.url).subscribe(data3 => {
          console.log("3 ===> "+ data3);
        });
      });    
    });
    this.http.get(this.url).subscribe(data4 => {
      console.log("4 ===> "+ data4);
    });
  }

  onPromiseLoad(){
    this.http.get(this.url).toPromise()
    .then(result => {
      result =result[0].id;
      console.log("1 ===> ",result);
    })
    .then(result => {
      console.log("2 ===> ");
    })
    .then(result => {
      console.log("3 ===> ");
    })
  }

  onPromiseMutipleLoad(){
    let p1 = this.http.get(this.url1).toPromise();
    let p2 = this.http.get(this.url2).toPromise();
    let p3 = this.http.get(this.url3).toPromise();
    Promise.all([p1, p2, p3]).then( result => {
      console.log("1 ==>",result[0]); 
      console.log("2 ==>",result[1]);   
      console.log("3 ==>",result[2]);   

     });
  }

  async onAsyncAwaitLoad(){
    let p1 =  this.http.get(this.url1).toPromise();
    console.log("1 ==>",p1); 

    let p2 = await this.http.get(this.url2).toPromise();
    console.log("2 ==>",p2); 

    let p3 = await this.http.get(this.url3).toPromise();
    console.log("3 ==>",p3); 

  }
    

}
