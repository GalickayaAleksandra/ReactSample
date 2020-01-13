
export interface News {
    title: string;
    description: string;
}

export const getNews = async () => {
    const news: News[] = [{
        title: "Nice & clean. The best for you blog!",
        description: `Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh.`
    },
    {
        title: "Nice & clean. The best for you blog!",
        description: `Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh.`
    }]
    return news;
}