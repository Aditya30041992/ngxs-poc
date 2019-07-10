import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {AddTutorial,RemoveTutorial} from '../actions/tutorial.actions';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {



  constructor(private store:Store) { }

  addTutorial(name,url) {
    this.store.dispatch(new AddTutorial({ name:name , url: url}))
  }

  ngOnInit() {
  }

}
