export type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
};
export type NewsCategory = {
    name: string;
};
export type NewsDate = {
    date: string;
};