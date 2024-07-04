import React from "react";
import KakaoLoginButton from "../components/KakaoLoginPage";

const page = async () => {
  return (
    <>
      <div className=" w-full h-[500px] flex justify-center items-center">
        메인 화면
        <br />
        <br />
        1. 로그인 된 경우 - user 의 그룹 정보 받아서 특정 그룹
        페이지(group/[id])로 리다이렉트
        <br />
        2. 로그인 안된 경우 - auth/login 으로 리다이렉트 하기
      </div>
      <div>
        <KakaoLoginButton />
      </div>
    </>
  );
};

export default page;
