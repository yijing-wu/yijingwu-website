import React from "react";

import MUIButton from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { myMintGreen } from "./MyColors";

export interface ButtonProps {
  content: string;
  buttonPrimaryColor?: string;
  link?: string;
  fontSize?: number;
}

export default function Button({
  content,
  buttonPrimaryColor,
  link,
  fontSize = 14,
  ...rest
}: ButtonProps) {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: myMintGreen,
      },
      secondary: {
        main: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={buttonTheme}>
      <MUIButton
        variant="outlined"
        href={link}
        style={{
          fontFamily: "SFMono-Regular",
          fontSize: 14,
        }}
      >
        {content}
      </MUIButton>
    </ThemeProvider>
  );
}
