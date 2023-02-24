import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 1rem;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled(motion.div)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.background_highlight};
  background-position: center center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  image-rendering: smooth;
`;

export const Name = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  display: block;
  margin: 1rem auto 0;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main_highlight};
  }
`;
