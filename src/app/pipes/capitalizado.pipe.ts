import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'capitalizado'
})

export class namePipe implements PipeTransform {
  transform(value:string, args:any[]): string {
    return "Hola mundo";
  }
}
