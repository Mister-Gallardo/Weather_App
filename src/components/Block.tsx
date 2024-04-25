import { Box, Typography } from "@mui/material";

export default function Block() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(240, 240, 240, .8)",
        borderRadius: "35px",
        boxShadow: "0px 0px 8px 1px gray",
        padding: "5px 36px",
      }}
    >
      <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
        Среда
      </Typography>
      <img src="src/images/sun_small.svg"></img>
      <Typography sx={{ fontSize: "20px" }}>21°C</Typography>
    </Box>
  );
}
