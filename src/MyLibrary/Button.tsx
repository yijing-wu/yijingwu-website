import React from "react";

import MUIButton from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { myMintGreen } from "./MyColors";

export interface ButtonProps {
  content: string;
  buttonPrimaryColor?: string;
  link?: string;
  fontSize?: number;
  onClick?: () => void;
}

export default function Button({
  content,
  buttonPrimaryColor = myMintGreen,
  link,
  fontSize = 14,
  onClick,
}: ButtonProps) {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: buttonPrimaryColor,
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
        onClick={onClick ? onClick : () => {}}
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
