import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import PersonModel from '../../../2-models/person.model';
import { getPerson } from '../../../3-Services/personsData';
@Component({
  selector: 'app-person-read-more',
  templateUrl: './person-read-more.component.html',
  styleUrls: ['./person-read-more.component.css'],
})
export class PersonReadMoreComponent implements OnInit {
  public person: PersonModel | undefined;
  constructor(
    private myActivatedRoute: ActivatedRoute,
    private myRouter: Router
  ) {}

  ngOnInit(): void {
    const urlName = this.myActivatedRoute.snapshot.params.urlName;
    this.person = getPerson(urlName);

    if (!this.person) {
      this.myRouter.navigateByUrl('/home');
    }
  }
}
