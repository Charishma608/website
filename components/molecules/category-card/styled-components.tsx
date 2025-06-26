import { styled } from 'baseui';

export const StyledCategoryBlock = styled('div', ({
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
}));

export const CategoryGoToImageBlock = styled('div', ({
  borderRadius: '50%',
  height: '32px',
  width: '32px',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 2,
  right: '12px',
  top: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate3d(0px, -60px, 0px)',
}));

export const StyledCategoryImage = styled('img', ({
  width: '100%',
  borderRadius: '20px',
}));

export const StyledCategoryName = styled('h3', ({
  fontWeight: 800,
  marginTop: '10px',
  marginBottom: '4px',
}));

export const StyledCategoryDuration = styled('p', ({
  margin: 0,
  fontSize: '14px',
  fontWeight: 500,
}));
