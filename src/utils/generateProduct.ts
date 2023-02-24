import { type IProduct } from "@/interfaces";
import { faker } from "@faker-js/faker";

export const generateProduct = (): IProduct => {
  const id = faker.datatype.uuid();
  const name = faker.commerce.productName();
  const price = parseFloat(faker.commerce.price());
  const img = faker.image.image();
  const description = faker.commerce.productDescription();
  return {
    id,
    name,
    price,
    img,
    description,
  };
};
