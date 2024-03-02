export interface Content {
  title: string;
  subTitle: string;
  categories: {
    id: string;
    title: string;
  }[];
}

export interface Product {
    data: {
        id: number;
        name: string;
        image: string;
        popular: boolean;
        price: string;
        rating: number;
        votes: number;
        available: boolean
    }
}



