import styled from "styled-components";

export const ButtonLoaded = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.colors.main_highlight + "ee"};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.base};
`;

export const ButtonLoadedAction = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 25%;
  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

export const ButtonLoadedCount = styled.div`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem 0;
  cursor: default;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  width: 90%;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.base};

  &:hover {
    background-color: ${({ theme }) => theme.colors.main_highlight};
  }
`;
