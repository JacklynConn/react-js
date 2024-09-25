import Poster from "./poster";
import React from "react";
import p1 from "../assets/boy.png";
import p2 from "../assets/man.png";
import p3 from "../assets/woman.png";

const GroupPoster = () => {
  return <React.Fragment>
    <Poster imageSrc= {p1} name="Mak Mach" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugiat hic suscipit.">
      <button>Click Me</button>
    </Poster>
    <Poster imageSrc= {p2} name="Mak Mach" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugiat hic suscipit."/>
    <Poster imageSrc= {p3} name="Mak Mach" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugiat hic suscipit."/>
    </React.Fragment>
}

export default GroupPoster