import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

/**
 * передача события через подписку в RxJs/Observable
 */
@Injectable()
export class EventService {
  private EventVoid = new Subject<any>();

  getEvent(): Observable<any> {
    return this.EventVoid.asObservable();
  }

  setEvent(value: any) {
    this.EventVoid.next(value);
  }
}

