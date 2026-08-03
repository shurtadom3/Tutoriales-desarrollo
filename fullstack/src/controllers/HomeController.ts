import type { Request, Response } from 'express'; 
import { books } from '../data/Books.js';
import { BookManager } from '../data/BookManager.js';

export class HomeController { 
    static index(req: Request, res: Response): void { 
            const viewData: { [key: string]: any } = {}; 
            viewData["title"] = "Home"; 
            res.render('home/index', { viewData: viewData });  
    } 

    static about(req: Request, res: Response): void { 
        const viewData: { [key: string]: any } = {}; 
        viewData["title"] = "About"; 
        res.render('home/about', { viewData: viewData }); 
  } 

    static contact(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData["title"] = "Contact";
        res.render('home/contact', { viewData: viewData });
    }

    static books(req: Request, res: any) { 
    const viewData: { [key: string]: any } = {}; 
     viewData["title"] = "Books"; 
     viewData["books"] = books;
    res.render('home/books', { viewData: viewData }); 
  }

static books_info(req: Request, res: Response): void {
    const id = Number(req.params.id);
    try {
        const book = BookManager.findById(books, id);
        const viewData: { [key: string]: any } = {};
        viewData["title"] = book.title;
        viewData["book"] = book;
        res.render("home/book_info", { viewData: viewData });
    } catch {
        res.status(404).send("Book not found");
    }
}
} 

 