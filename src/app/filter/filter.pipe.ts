import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], searchBooks: string): Book[] {
    if (!books || !searchBooks) {
      return null;
    }
    return books.filter(res =>
      res.title.toLocaleLowerCase().includes(searchBooks.toLocaleLowerCase())
      || res.author.toLocaleLowerCase().includes(searchBooks.toLocaleLowerCase())
      || res.title.toLocaleLowerCase().indexOf(searchBooks.toLowerCase()) > -1
      || res.subject.toLocaleLowerCase().includes(searchBooks.toLocaleLowerCase())
      || res.rackNumber.toString().includes(searchBooks.toString())
    );
  }

}
