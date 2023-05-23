import { InputAdornment, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { styled } from "@mui/system";

const SearchBarLayout = styled(TextField)({
  width: "256px",
  height: "40px",
  borderRadius: "4px",
  color: "#000000",
  backgroundColor: "#F9F9F9",
});

export function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    if (e.target.value.toString().length <= 20) setQuery(e.target.value);
  };

  return (
    <SearchBarLayout
      id="search"
      type="search"
      size="small"
      sx={{
        "& fieldset": { border: "none" },
      }}
      value={query}
      onChange={handleChange}
      InputProps={{
        maxLength: 3,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <BiSearch />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
