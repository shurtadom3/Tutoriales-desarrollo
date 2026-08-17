import { useBookStore } from '@/stores/bookstore.js'; 
import type { BookInterface } from '@/interfaces/BookInterface'; 

export class BookService { 
  static getBooks(): BookInterface[] { 
    return useBookStore().books;   } 

  static getBookById(id: number): BookInterface | undefined { 
    return useBookStore().books.find((book) => book.id === id); 
  } 
} 