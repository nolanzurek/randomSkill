import data from "../data/skills6.json";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export function SettingsViewOld() {
  //TODO: make it so that only skills that actually exist in all three shapes get printed
  //or just make the data that way
  //TODO: add DDs to the JSON file
  //altnames + shapes with ternary expression
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <FormControl>
          <FormLabel>Settings</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <TextField
                  id="filled-basic"
                  label="Skill DD Cap"
                  variant="filled"
                />
              }
            />
            <FormControlLabel
              control={<Checkbox> </Checkbox>}
              label="Blind Landings"
            />
            <FormControlLabel
              control={<Checkbox> </Checkbox>}
              label="Blind Mounts"
            />
            <FormControlLabel
              control={<Checkbox> </Checkbox>}
              label="Blind Spotters"
            />
            <FormControlLabel
              control={<Checkbox> </Checkbox>}
              label="Spotters"
            />
            <FormControlLabel
              control={<Checkbox> </Checkbox>}
              label="Front Spotters"
            />
            <FormControlLabel
              control={<Checkbox> </Checkbox>}
              label="Repeat Skills"
            />
          </FormGroup>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Check</TableCell>
              <TableCell align="right">String</TableCell>
              <TableCell align="right">Skill</TableCell>
              <TableCell align="right">DD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={`row${i}-1`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{<Checkbox></Checkbox>}</TableCell>
                <TableCell align="right">{row.FIGString}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.dd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SettingsViewOld;
