import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-one',
  templateUrl: './user-one.component.html',
  styleUrls: ['./user-one.component.scss']
})
export class UserOneComponent implements OnInit {
  user!: {id: number, name: string};

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.route.params
      .subscribe(
        (params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )

  }
  
}
