 import { Book } from '../models/Book.js';

 export class BookManager { 
   public static findById(books: Book[], id: number): Book { 
    const book = books.find(book => book.id === id); 
    if (!book) { 
      throw new Error(`Book with id ${id} not found`); 
    } 
    return book; 
    } 
 }