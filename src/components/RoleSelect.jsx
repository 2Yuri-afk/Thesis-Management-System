import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RoleSelect() {
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleChange}
          sx={{
            minWidth: 150,
            // textAlign: "left",
            p: 2,
            borderRadius: 2,
            backgroundColor: "#eeeaea",
            borderColor: "white",
            height: 50,
            // fontFamily: Poppins,
          }}
        >
          <MenuItem value={1}>Student</MenuItem>
          <MenuItem value={2}>Prof</MenuItem>
          <MenuItem value={3}>Idk</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
