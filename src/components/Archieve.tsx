import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { myMilkYellow, myMintGreen, myNavy } from "../MyLibrary/MyColors";
import { Text } from "../MyLibrary";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Archieve() {
  return (
    <div
      style={{
        paddingTop: 150,
        paddingBottom: 150,
      }}
    >
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 80,
          color: myMilkYellow,
        }}
      >
        {"Archieve"}
      </Text>
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          fontSize: 16,
          color: myMintGreen,
          marginBottom: 80,
        }}
      >
        {"List of things I've worked on"}
      </Text>

      <TableContainer component={Paper} style={{ backgroundColor: myNavy }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Made at</TableCell>
              <TableCell align="left">Built with</TableCell>
              <TableCell align="left">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
