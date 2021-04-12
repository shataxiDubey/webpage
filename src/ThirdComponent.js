import React from "react";
import "./ThirdComponent.css";

import { GoWatch } from "react-icons/go";
const ThirdComponent = () => {
  return (
    <div>
      <div className="content1">
        <h3>Lorem, ipsum.</h3>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <h4>Lorem, ipsum dolor.</h4>
        <p>Lorem, ipsum.</p>
        <h2>Abstract</h2>
        <div className="Abstract">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          nisi? Unde, dolorem, totam accusamus hic, quidem error modi cupiditate
          asperiores omnis nisi deserunt veritatis incidunt vitae? Molestiae
          laudantium reprehenderit perferendis explicabo molestias saepe
          voluptas iste sed, quia amet autem maxime enim. In, ad. Autem
          veritatis, a temporibus voluptas nemo modi.
        </div>
        <div className="sideByside">
          <div>
            Image1<br></br>
            <GoWatch className="thumbnail" />
          </div>
          <div>
            Image2<br></br>
            <GoWatch className="thumbnail" />
          </div>
        </div>
        <div className="boxAside">
          <div>Box1</div>
          <div>Box2</div>
        </div>
      </div>
      
    </div>
  );
};

export default ThirdComponent;
