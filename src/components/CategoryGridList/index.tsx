import React, { useState } from "react";

import { type ICategoryGridListProps } from "./CategoryGridList.interfaces";
import * as S from "./CategoryGridList.styles";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

const CategoryGridList = ({ categories }: ICategoryGridListProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  //Usar flex grid?

  return (
    <>
      <S.Wrapper>
        {visibleCategories.map((category) => (
          <S.Container key={category.id}>
            <S.Circle
              style={{ backgroundImage: `url(${category.img})` }}
              variants={variants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
            ></S.Circle>
            <S.Name>{category.name}</S.Name>
          </S.Container>
        ))}
      </S.Wrapper>
      {!showAll && categories.length > 8 && (
        <S.Button onClick={() => setShowAll(true)}>Mostrar mais</S.Button>
      )}
    </>
  );
};

export default CategoryGridList;
