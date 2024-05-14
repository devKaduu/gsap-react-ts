import styled from "styled-components";

export const Home = styled.section`
  /* width: 100%;
  height: 100%; */
`;

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  padding: 5vw 0;
`;

export const Move = styled.div`
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.black};
  display: flex;
  padding: 3vw 0;
  overflow: hidden;
`;

export const Marquee = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 3vw;
  padding: 0 1.5vw;
`;

export const Text = styled.h1`
  font-size: 5vw;
  font-family: Krylon;
`;

export const Arrow = styled.img`
  height: 5vw;
`;
