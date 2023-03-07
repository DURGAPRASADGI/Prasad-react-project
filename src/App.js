import React from "react";
import Body from "./Body";

import Links from "./Links";

const App = () => {
  return (
    <div>
      <Links />
      <Body
        a="/images/t16.jpg"
        b="/images/t5.webp"
        c="/images/t3.jpg"
        n1="ramya"
        n2="durga"
        n3="ganesh"
        p1="Could computing"
        e1="james@12.in"
        w1="London"
        q1="web developer"
        f1="jany@13.in"
        x1="New York"
        r1="Cyber Secuirty"
        g1="tony@123.com"
        z1="American"
      />
      <Body
        a="/images/t6.webp"
        b="/images/t7.webp"
        c="/images/t8.png"
        n1="Rohit"
        n2="Curran"
        n3="Stokes"
        p1="Devops"
        e1="rohit@28.in"
        w1="Indian"
        q1="Robotics"
        f1="curran@123.in"
        x1="England"
        r1="Data science"
        g1="stoke@143.in"
        z1="England"
      />
      <Body
        a="/images/t9.webp"
        b="/images/t12.jpg"
        c="/images/t11.jpg"
        n1="Saran"
        n2="Kiran"
        n3="Suresh"

        p1="Nano Technology"
        e1="saran@123.in"
        w1="Indian"
        q1="Automation"
        f1='kiran@676.in'
        x1="Sri Lanka"
        r1="Business Intelligence"
        g1="suresh@345.in"
        z1="New Zeland"
      />
    </div>
  );
};

export default App;
