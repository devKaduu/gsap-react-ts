import { useEffect, useRef } from "react";

import * as S from "./styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

const Marquee = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef(null);
  const element = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.to(element.current, {
      transform: "translateX(-100%)",
      duration: 2.4,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <>
      <S.Page></S.Page>
      <S.Page ref={scope}>
        <S.Move>
          {Array.from({ length: 5 }).map((_, index) => (
            <S.Marquee key={index} ref={(el) => (element.current[index] = el!)}>
              <S.Text>Software Developer</S.Text>
              <S.Arrow src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="Arrow" />
            </S.Marquee>
          ))}
        </S.Move>
      </S.Page>
      <S.Page></S.Page>
    </>
  );
};

export default Marquee;
