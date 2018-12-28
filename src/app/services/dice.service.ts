import { Injectable } from '@angular/core';
import { Dice } from '../models/dice';
import { OwnedDice } from '../models/dice-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  getDice(): Dice[] {
    return OwnedDice;
  }
}
