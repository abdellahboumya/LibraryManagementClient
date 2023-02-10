import { Book } from "./Book";

export enum Role {
    USER,
    ADMIN
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    borrowedBooks: Book[];

    constructor(id: number, firstName: string, lastName: string, email: string,
        password: string, role: Role, borrowedBooks: Book[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.borrowedBooks = borrowedBooks;
    }
}