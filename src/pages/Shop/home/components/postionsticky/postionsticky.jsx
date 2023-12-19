import React from "react";
import Right from "../img/right.webp";
import Left from "../img/left.jpeg";
import process from "process";
import { Container } from "postcss";

export default function PositionSticky() {
  return (
    <>
      {/* innerHeight */}

      {/* <Container
        className="Parallax-module__elements--HkPSY"
        scrollAxis="vertical"
      > */}
        {/* <No Display Name /> */}
      {/* </Container> */}
      <div className="fixed left-0 pt-36">
        <img
          className="w-32 rounded-md object-contain h-11/12"
          src={Left}
          alt=""
        />
      </div>
      <div className="fixed right-0 pt-36">
        <img className="w-32 rounded-md	object-contain h-11/12" src={Right} />
      </div>
    </>
  );
}
