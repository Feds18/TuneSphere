import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 1, // Reso completamente visibile
  fontWeight: 500,
  letterSpacing: 0.2,
  color: "#fff", // Colore bianco
});

export default function MusicPlayerSlider() {
  const duration = 200; // Durata totale della traccia (in secondi)
  const [position, setPosition] = React.useState(32); // Posizione corrente della traccia

  // Formatta il tempo in minuti e secondi
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative", p: 3 }}>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value) => setPosition(value as number)}
        sx={{
          color: "#fff", // Slider bianco
          height: 4,
          "& .MuiSlider-thumb": {
            width: 8,
            height: 8,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&::before": {
              boxShadow: "0 2px 12px 0 rgba(255,255,255,0.4)", // Ombra bianca
            },
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px rgba(255, 255, 255, 0.16)`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -2,
        }}
      >
        {/* Minutaggio corrente della canzone */}
        <TinyText>{formatDuration(position)}</TinyText>

        {/* Minutaggio rimanente della canzone */}
        <TinyText>-{formatDuration(duration - position)}</TinyText>
      </Box>
    </Box>
  );
}
