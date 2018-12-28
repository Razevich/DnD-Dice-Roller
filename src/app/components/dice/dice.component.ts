import { Component, OnInit } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';
import { Dice } from '../../models/dice';
import { OwnedDice } from 'src/app/models/dice-list';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  constructor(private diceService: DiceService) { }

  dice: Dice[];

  ngOnInit() {
    this.getDice();
  }

  getDice(): void {
    this.diceService.getDice()
      .subscribe(dice => this.dice = dice);
  }
}
