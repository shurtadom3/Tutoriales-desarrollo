import { books } from '@/data/books'; 
import type { BookInterface } from '@/interfaces/BookInterface'; 

export class BookService { 
  static getBooks(): BookInterface[] { 
    return books; 
  } 

  static getBookById(id: number): BookInterface | undefined { 
    return books.find((book) => book.id === id); 
  } 
} 