"use client";

import HidePass from "@/img/hidepass.svg";
import ShowPass from "@/img/showpass.svg";
import Image from "next/image";
import { useState } from "react";


function ShowHidePassword() {
  const [isShow, setIsShow] = useState(false);

  const changeState = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="pass-container">
      <input
        className="form-control"
        type={isShow ? "text" : "password"}
        placeholder="123456"
        id="password"
        style={{ paddingRight: "41px" }}
      />
      <button onClick={changeState} className="btn see-pass" type="button">
        <Image src={isShow ? HidePass : ShowPass} alt="show/hide pwd" />
      </button>
    </div>
  );
}

export default ShowHidePassword;
