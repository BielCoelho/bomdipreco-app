import { type NextApiRequest, type NextApiResponse } from "next";

import { generateProduct } from "@/utils/generateProduct";

export default function categoriesAPI(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push(generateProduct());
  }

  switch (method) {
    case "GET":
      res.status(200).json(products);
      break;
    default:
      res.status(404).json({ message: "resource not found" });
      break;
  }
}
