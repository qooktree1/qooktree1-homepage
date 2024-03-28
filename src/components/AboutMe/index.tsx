import Image from "next/image";

import LandingImage from "#/Hello.png";

export default function AboutMe() {
  return (
    <div className="h-[1440px]">
      <h1>
        안녕하세요. 공부가 취미인 풀 스택 웹 개발자입니다. 매우 꼼꼼한 성격,
        그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.
      </h1>
      <Image src={LandingImage} alt="d" />
    </div>
  );
}
