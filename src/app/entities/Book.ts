import { User } from "./User";

export class Book {
    id: number;
    title: string;
    author: string;
    description: string;
    isAvailable: boolean;
    coverImage: string;
    genres: string[];
    currentOwner?: User;

    constructor(id: number, title: string, author: string, description: string,
        isAvailable: boolean, coverImage: string, genres: string[], currentOwner: User) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.isAvailable = isAvailable;
        this.coverImage = coverImage;
        this.genres = genres;
        this.currentOwner = currentOwner;
    }
}