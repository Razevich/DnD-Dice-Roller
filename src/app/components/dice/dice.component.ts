import { Component, OnInit } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';
import { Dice } from '../../models/dice';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  constructor(private diceService: DiceService) { }

  dice: Dice[];
  selectedDice: Dice[] = [];
  finalRoll: number[] = [];

  ngOnInit() {
    this.getDice();
  }

  getDice(): void {
    this.dice = this.diceService.getDice();
  }

  addDice(dice: Dice): void {
    this.selectedDice.push(dice);
  }

  removeDice(dice: Dice): void {
    let diceIndex = this.selectedDice.indexOf(dice);
    this.selectedDice.splice(diceIndex, 1);
  }

  roll(): void{
    this.finalRoll = [];
    for(let i = 0; i < this.selectedDice.length; i++){
      this.finalRoll.push(this.rollDice(this.selectedDice[i]))
    }
  }

  rollDice(dice: Dice): number {
    return Math.floor(Math.random()* dice.sides + 1);
  }

  clear(): void {
    this.selectedDice = [];
    this.finalRoll = [];
  }
}
