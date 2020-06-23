import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:Http,private router:Router) { }
  question_response:Object;
  questions_array:string[];
  ngOnInit() {
    this.question_get_from_api();
  }
  question_api_response_getter():Promise<any>{
    return new Promise((res,rej)=>{
      this.http.get("http://localhost:3000/questions").toPromise().then(response=>{
        this.question_response=JSON.parse(response.text());
        res(this.question_response);
        },
        msg=>{rej(msg);}
        );
      });
    }

  async question_get_from_api(){
    await this.question_api_response_getter();
    this.questions_array=this.question_response["questions"];
  }

  question_obj_clicked(question){
    window.localStorage.setItem("clicked_question", JSON.stringify(question));
    this.router.navigateByUrl('/question');
  }
}
