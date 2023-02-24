import { type ICategories, type IProduct } from "@/interfaces";

export interface IHomePageProps {
  data: {
    categories: ICategories[];
    products: IProduct[];
  };
}
