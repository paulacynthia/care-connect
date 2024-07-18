import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    grayX: {
      "100": "#f3f3f3",
      "400": "#AEAEAE",
      "500": "#A7A5A2",
      "900": "#323232",
    },
    blueX: {
      "500": "#4163F6",
      "900": "#184796"
    },
    yellowX: {
      "400": "#FCC02B",
    },
    brownX: {
      "500": "#AE6C52",
    },
    orangeX: {
      "600": "#FD4701"
    }
  },
  styles: {
    global: {
      body: {
        bg: "grayX.100",
      },
    },
  },
  fonts: {
    heading: "var(--font-poppins)",
    body: "var(--font-poppins)",
  },
});
