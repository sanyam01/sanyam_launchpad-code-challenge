import Button from "@mui/material/Button";

const CustomButton = (props) => {
  return (
    <Button color="success" variant="contained" size="large">
      {props.name}
    </Button>
  );
};

export default CustomButton;
