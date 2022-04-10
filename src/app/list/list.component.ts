import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface USERS {
  name: string;
  position: string;
  language: string;
  experience: string;
}

const USERS: USERS[] = [
  {
    name: 'Nguyen VAn A',
    position: 'FS',
    language: 'Java',
    experience: '3'
  },
  {
    name: 'Nguyen VAn C',
    position: 'FS',
    language: 'Python',
    experience: '2'
  },
  {
    name: 'Nguyen VAn D',
    position: 'FS',
    language: 'Node',
    experience: '3'
  },
  {
    name: 'Nguyen VAn G',
    position: 'FS',
    language: 'Linux',
    experience: '3'
  },
];

function search(text: string,): USERS[] {
  return USERS.filter(user => {
    const term = text.toLowerCase();
    return user.name.toLowerCase().includes(term)
      || user.position.toLowerCase().includes(term)
      || user.language.toLowerCase().includes(term)
      || user.experience.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DecimalPipe]
})

export class ListComponent implements OnInit {
  Users$: Observable<USERS[]>;
  filter = new FormControl('');


  constructor(private router: Router) {
    this.Users$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text))
    );
  }

  ngOnInit(): void {
  }


  onSelect(user: USERS, index: number): void {
    // console.log(user);
    this.router.navigate(['/mycv/' + index], {
      state: user
    })
  }

}
