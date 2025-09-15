
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
}

function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: onSearch && (
          <InputAdornment position="end">
            <IconButton onClick={onSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ borderRadius: "999px", backgroundColor: "white" }}
    />
  );
}

export default SearchBar;
