import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { CategoryType } from '../../../lib/category-type';
import {
  CategoryGoToImageBlock,
  StyledCategoryBlock,
  StyledCategoryDuration,
  StyledCategoryImage,
  StyledCategoryName,
} from './styled-components';

function CategoryCard({ category, index }: { category: CategoryType, index: number }) {
  const onMouseEnter = (e: any) => {
    gsap.to(e.currentTarget, { color: '#97c680' });
    gsap.to(`.category-flex${index}-arrow`, { y: 0 });
  };

  const onMouseLeave = (e: any) => {
    gsap.to(e.currentTarget, { color: 'black' });
    gsap.to(`.category-flex${index}-arrow`, { y: -60 });
  };

  return (
    <StyledCategoryBlock onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <CategoryGoToImageBlock className={`category-flex${index}-arrow`}>
        <Image src="/up-right-arrow.png" alt="Up right arrow" height="16px" width="16px" />
      </CategoryGoToImageBlock>
      <StyledCategoryImage src={`/${category.imageUrl}`} alt={category.name} />
      <StyledCategoryName>{category.name}</StyledCategoryName>
      <StyledCategoryDuration>{category.duration}</StyledCategoryDuration>
    </StyledCategoryBlock>
  );
}

export default CategoryCard;
