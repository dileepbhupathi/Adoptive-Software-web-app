import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import { TfiPlus } from "react-icons/tfi";

export const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <div onClick={toggle}>
          <p>
            {isActive ? <GiTireIronCross /> : <TfiPlus />} Lorem ipsum dolor sit
            amet neque
          </p>
        </div>
      </div>
      {isActive && (
        <div>
            <p class='accordion-text'>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Pellentesque nec purus ut massa 
                hendrerit fringilla luctus mattis 
                diam. Integer mollis sollicitudin 
                tincidunt.</p>
        </div>
      )}
    </>
  );
};
