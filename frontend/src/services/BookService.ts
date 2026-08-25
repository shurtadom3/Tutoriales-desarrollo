import { useBookStore } from '@/stores/bookstore.js'; 
import type { BookInterface } from '@/interfaces/BookInterface'; 
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js'; 

export class BookService { 
  static getBooks(): BookInterface[] { 
    return useBookStore().books;   } 

  static getBookById(id: number): BookInterface | undefined { 
    return useBookStore().books.find((book) => book.id === id); 
  } 

  static createBook(book: CreateBookDTO): void {
    const books = useBookStore().books;
    const nextId =
      books.length > 0
        ? Math.max(...books.map((book) => book.id)) + 1
        : 1;

      books.push({
        id: nextId,
        ...book,
  });
}

  static deleteLastBook(): void {
    const books = useBookStore().books;
        if (books.length > 0) {
            books.pop();
  }
}
  static getUniqueBookCategories(): string[] { 
    const books = BookService.getBooks(); 
    const categories = books.map((book) => book.category); 
    const uniqueCategories = new Set(categories); 
    return Array.from(uniqueCategories); 
  } 
} 