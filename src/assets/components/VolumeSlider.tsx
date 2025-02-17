import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function VolumeSlider() {
  const [value, setValue] = React.useState<number>(30);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <VolumeDown sx={{ color: "white" }} />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          sx={{ color: "white" }}
        />
        <VolumeUp sx={{ color: "white" }} />
      </Stack>
    </Box>
  );
}
