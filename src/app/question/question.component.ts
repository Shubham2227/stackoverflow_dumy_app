import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private _location: Location) { }
  question:String;
  curr_question:Object;
  description:String;
  curr_answer:Object[]=[];
  ngOnInit() {
    this.read_storage_for_clicked_question();
    this.render_questions();
    this.render_answers();
  }

  get_from_storage(){
    this.curr_question=JSON.parse(window.localStorage.getItem('clicked_question'));
  }

  assign_question(){
    this.question=this.curr_question["question"];
    this.description=this.curr_question["description"];
  }

  async render_questions(){
    await this.assign_question();
  }

  render_answers(){
    this.curr_answer=this.curr_question["answers"];
  }

  async read_storage_for_clicked_question(){
    await this.get_from_storage();
  }

  go_to_back(){
    this._location.back();
  }

}
