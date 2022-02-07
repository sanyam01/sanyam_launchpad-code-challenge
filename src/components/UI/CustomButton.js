import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const CustomButton = (props) => {
  const [buttonClick, setButtonClick] = useState(false);

  const setButtonHandler = () => {
    setButtonClick((prevState) => {
      return prevState ? false : true;
    });

    console.log(buttonClick);
  };

  const linkName = "/" + props.buttonId;

  return (
    <NavLink to={linkName}>
      <Button
        onClick={setButtonHandler}
        color={props.color}
        variant={props.variant}
        size={props.size}
        id={props.buttonId}
      >
        {props.name}
      </Button>
    </NavLink>
  );
};

export default CustomButton;
