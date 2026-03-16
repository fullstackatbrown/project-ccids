//"use client";
//import { useState } from "react";

export default function TitleImage() {
  return (
    <div style={{ position: "relative", width: "100%", height: "875px" }}>
      <img
        src="/images/BrownUniversityCampusPhoto.jpg"
        alt="Brown CCIDS Image"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      <div style={{ position: "absolute", bottom: "70px" }}>
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            marginLeft: "100px",
            lineHeight: "1.2",
          }}
        >
          Center for Clinical <br></br> Cancer Informatics <br></br>and Data
          Science
        </h1>
        <div style={{ height: "35px" }}></div>
        <h3
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "normal",
            marginLeft: "100px",
          }}
        >
          Our mission is to enhance the ecosystem of Clinical Cancer Informatics{" "}
          <br></br>& Data Science at Brown University and affiliated hospitals
        </h3>
      </div>
    </div>
  );
}
