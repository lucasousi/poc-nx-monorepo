import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelloWorldService } from '../../../../services/src';

@Component({
  selector: 'poc-nx-monorepo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  backendMessage: string;
  subscriptions: Subscription;

  constructor(private helloWorldService: HelloWorldService) {
    this.backendMessage = '';
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.getBackendMessage();
  }

  getBackendMessage() {
    const subscription = this.helloWorldService
      .getHelloWorld()
      .subscribe(({ message }) => {
        this.backendMessage = message;
      });

    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
