import Button from "@mui/material/Button";

const CustomButton = (props) => {
  return (
    <Button color={props.color} variant={props.variant} size={props.size}>
      {props.name}
    </Button>
  );
};

export default CustomButton;
