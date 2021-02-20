export interface HomeCategoriesQuery {
    id: string;
    name: string;
}

export interface HomeQuery {
    homePage?: {
        category: {
            id: string;
            categories: Array<HomeCategoriesQuery>;
        }
    }
}
