import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class Validator {

  constructor() { }
  prixValid(control: FormControl){
    return new Promise(resolve => {
      const prixPattern = /[A-Z,a-z]/;

      if (!prixPattern.test(control.value)){
        resolve({ InvalidName : true });
      }
      resolve(null);
      });
    }

    qteValid(control: FormControl){
        return new Promise(resolve => {
          const qtePattern = /[A-Z,a-z]/;
    
          if (!qtePattern.test(control.value)){
            resolve({ InvalidName : true });
          }
          resolve(null);
          });
        }


    nameValid(control: FormControl){
        return new Promise(resolve =>{
          const pattern = /[0-9]/;
          if (pattern.test(control.value)) {
            resolve({ InvalidName : true });
          }
          resolve(null);
      });
    }
}