import { type NextApiRequest, type NextApiResponse } from "next";

import { type ICategories } from "@/interfaces";

export default function categoriesAPI(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const categories: ICategories[] = [
    {
      id: 1,
      name: "Auto",
      img: "/categories/auto.png",
    },
    {
      id: 2,
      name: "Colecionáveis",
      img: "/categories/collectibles.png",
    },
    {
      id: 3,
      name: "Drone",
      img: "/categories/drone.png",
    },
    {
      id: 4,
      name: "Componentes Eletrônicos",
      img: "/categories/ele-comp.png",
    },
    {
      id: 5,
      name: "Gaming",
      img: "/categories/gaming.png",
    },
    {
      id: 6,
      name: "Headphones",
      img: "/categories/headphones.png",
    },
    {
      id: 7,
      name: "Infantil",
      img: "/categories/kids.png",
    },
    {
      id: 8,
      name: "Portáteis",
      img: "/categories/laptop.png",
    },
    {
      id: 9,
      name: "Cosméticos",
      img: "/categories/makeup.png",
    },
    {
      id: 10,
      name: "Fragrâncias",
      img: "/categories/parfum.png",
    },
    {
      id: 11,
      name: "Smartphones",
      img: "/categories/smartphone.png",
    },
    {
      id: 12,
      name: "Smartwatch",
      img: "/categories/smartwatch.png",
    },
    {
      id: 13,
      name: "Som",
      img: "/categories/speakers.png",
    },
    {
      id: 14,
      name: "Esportes",
      img: "/categories/sports.png",
    },
    {
      id: 15,
      name: "Segurança",
      img: "/categories/surveilance.png",
    },
    {
      id: 16,
      name: "VR",
      img: "/categories/VR.png",
    },
  ];

  switch (method) {
    case "GET":
      res.status(200).json(categories);
      break;
    default:
      res.status(404).json({ message: "resource not found" });
      break;
  }
}
