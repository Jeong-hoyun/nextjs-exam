"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoPath from "@/assets/colorful.svg";
import { usePathname, useRouter } from "next/navigation";
//NextRouter was not mounted 에러가 있었음
// https://velog.io/@sumi-0011/Error-Note-NextRouter-was-not-mounted.-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
import styles from "./Auth.module.scss";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoding(true);
  };

  const signInWithGoogle = () => {};

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1>
          <Image src={LogoPath} priority />
          {/** priority는 레이지 로딩이 실행되지 않게하기 위한 추가사항  */}
        </h1>
        <form onSubmit={loginUser} />
      </div>
    </section>
  );
};
export default LoginClient;
