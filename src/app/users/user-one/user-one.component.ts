import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-one',
  templateUrl: './user-one.component.html',
  styleUrls: ['./user-one.component.scss']
})
export class UserOneComponent implements OnInit, OnDestroy {
  user!: {id: number, name: string};
  paramSubscription!: Subscription

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.paramSubscription = this.route.params
      .subscribe(
        (params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )

  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
  
}
