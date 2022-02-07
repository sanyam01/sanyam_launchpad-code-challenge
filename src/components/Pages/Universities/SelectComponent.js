import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import { universityActions } from "../../../store/university-slice";
import { useDispatch } from "react-redux";
import { fetchUniversityData } from "../../../store/university-actions";
import UniversityLayout from "./UniversityLayout";

const SelectComponent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");
  const countriesList = useSelector((state) => state.universities.countries);
  const countrySearchName = useSelector(
    (state) => state.universities.countrySearchName
  );
  const countriesListUnique = [...new Set(countriesList)];
 

  const handleChange = () => {
    console.log("I am inside handle change");
  };
  return (
    <div>
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          dispatch(
            universityActions.assignCountryName({ countryName: newInputValue })
          );
          dispatch(fetchUniversityData(newInputValue));
        }}
        disablePortal
        id="combo-box-demo"
        options={countriesListUnique}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />

      {inputValue && <UniversityLayout />}
    </div>
  );
};

export default SelectComponent;
