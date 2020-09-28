import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Villain } from './villain';
import { VILLAINS } from './mock-villains';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class VillainService {
  getVillains(): Observable<Villain[]> {
    this.messageService.add('VillainService: fetched villains');
    return of(VILLAINS);
  }

  constructor(private messageService: MessageService) {}
}
