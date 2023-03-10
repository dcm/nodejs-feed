import { FeedOptions, Item, Author, Extension } from "./typings";
export declare class Feed {
    options: FeedOptions;
    items: Item[];
    categories: string[];
    contributors: Author[];
    extensions: Extension[];
    constructor(options: FeedOptions);
    addItem: (item: Item) => number;
    addCategory: (category: string) => number;
    addContributor: (contributor: Author) => number;
    addExtension: (extension: Extension) => number;
    atom1: () => string;
    rss2: () => string;
    json1: () => string;
}
