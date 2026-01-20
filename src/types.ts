export interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
    category: string;
    tags: string[];
    coverImage?: string;
}
