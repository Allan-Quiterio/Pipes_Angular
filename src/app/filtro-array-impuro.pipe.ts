import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  // Tornando o pipe impuro, ou seja, ele vai observar todas as modificações que ocorrerem no value
  pure: false,
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {}
