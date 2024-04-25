import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GetCity from "../api/GetCity";
import "./Main.css";

let id: number | undefined;

const Main = () => {
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const loading = list && list.length === 0;

  function handleChange(value: string) {
    setCity(value);
  }

  useEffect(() => {
    clearTimeout(id);
    id = setTimeout(async () => {
      city && setList(await GetCity(city));
    }, 200);
  }, [city]);

  return (
    <Box className="main">
      <Box className="container">
        <Autocomplete
          id="asynchronous-demo"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(
            option: { name: string },
            value: { name: string }
          ) => option.name === value.name}
          getOptionLabel={(option: { name: string }) => option.name}
          options={list}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => handleChange(e.target.value)}
              value={city}
              variant="outlined"
              placeholder="Введите название города..."
              size="small"
              sx={{
                backgroundColor: "whitesmoke",
                borderRadius: "4px",
                width: "40vw",
                minWidth: "300px",
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />

        <Box className="weather_info">
          <img src="src/images/sun_big.svg" style={{}}></img>
          <Box sx={{ width: "55%" }}>
            <Typography sx={{ fontSize: "24px" }}>Сегодня</Typography>
            <Typography sx={{ fontSize: "36px", fontWeight: "bold" }}>
              Москва
            </Typography>
            <Typography sx={{ fontSize: "24px", color: "darkcyan" }}>
              Температура: 24°C
            </Typography>
            <Typography sx={{ fontSize: "24px", color: "darkcyan" }}>
              Чистое небо
            </Typography>
          </Box>
          <Box className="weather_info__elems">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(100, 240, 240, .8)",
                borderRadius: "35px",
                boxShadow: "0px 0px 8px 1px gray",
                padding: "7px 45px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Среда
              </Typography>
              <img src="src/images/sun-cloud.svg"></img>
              <Typography sx={{ fontSize: "20px" }}>20°C</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(100, 240, 240, .8)",
                borderRadius: "35px",
                boxShadow: "0px 0px 8px 1px gray",
                padding: "7px 40px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Четверг
              </Typography>
              <img src="src/images/sun_rain.svg"></img>
              <Typography sx={{ fontSize: "20px" }}>17°C</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(100, 240, 240, .8)",
                borderRadius: "35px",
                boxShadow: "0px 0px 8px 1px gray",
                padding: "7px 37px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Суббота
              </Typography>
              <img src="src/images/sun-cloud.svg"></img>
              <Typography sx={{ fontSize: "20px" }}>19°C</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(100, 240, 240, .8)",
                borderRadius: "35px",
                boxShadow: "0px 0px 8px 1px gray",
                padding: "7px 15px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Воскресенье
              </Typography>
              <img src="src/images/sun_small.svg"></img>
              <Typography sx={{ fontSize: "20px" }}>22°C</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
