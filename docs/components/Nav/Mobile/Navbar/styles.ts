import styled from 'styled-components';

export const NavMenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => `
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
    background: ${theme.colors.white};
  `}
`;

export const NavCategoryButton = styled.button`
  font-size: 0.6rem;
  border: none;
  outline: none;
  appearance: none;
  background: transparent;

  ${({ theme }) => `
    color: ${theme.colors.primary};
  `}
`;

export const NavCategory = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
