import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';
import { VILLAINS } from '../mock-villains';
import { VillainService } from '../villain.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css'],
})
export class VillainsComponent implements OnInit {
  villains: Villain[];
  selectedVillain: Villain;

  constructor(
    private villainService: VillainService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getVillains();
  }

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
    this.messageService.add(`VillainesComponent: Selected villain id=${villain.id}`);
  }
  getVillains(): void {
    this.villainService
      .getVillains()
      .subscribe((villains) => (this.villains = villains));
  }
}
