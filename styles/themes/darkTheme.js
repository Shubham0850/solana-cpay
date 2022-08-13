import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2C2D30",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#2C2D30",
      paper: "#34373A",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: ["Euclid Medium", "Euclid Medium"].join(","),
  },
  // palette: {
  //   mode: 'dark',
  //   primary: {
  //     main: '#01C074',
  //   },
  // },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #182033",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#0e1628",
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "#182033",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#182033",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#182033",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#182033",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          fontFamily: ["Euclid Medium", "monospace"].join(","),
          fontWeight: "600",
          textTransform: "none",
          color: "white",
          borderColor: "#01C074",
          backgroundColor: "#249192",
          borderRadius: 50,
          padding: '12px 30px'
        },
        contained: {
          backgroundColor: "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(87, 160, 197, 1) 50%);",
          boxShadow: "none",
        },
        outlined: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 10,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-main > div:nth-child(2)": {
            height: "fit-content !important",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 8,
          "& .MuiSwitch-track": {
            borderRadius: 22 / 2,
            "&:before, &:after": {
              content: '""',
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: 16,
              height: 16,
            },
            "&:before": {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="#00C075" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
              left: 12,
            },
            "&:after": {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="#00C075" d="M19,13H5V11H19V13Z" /></svg>')`,
              right: 12,
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 16,
            height: 16,
            margin: 2,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});
