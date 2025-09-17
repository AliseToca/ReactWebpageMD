
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
      slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      },
    }}
    />
  );
}

export default SearchBar;
