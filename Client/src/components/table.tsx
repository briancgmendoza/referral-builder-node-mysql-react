import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton
} from "@mui/material"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatPhoneNumber } from "../helper";

const TableComponent = () => {
  const DUMMY = [
  {
    given_name: "John",
    surname: "Johnson",
    email: "jh@email121.com",
    phone: "0453283283",
  },
  {
    given_name: "Matthew",
    surname: "Lombard",
    email: "mat197501@gmail.com",
    phone: "0453283283",
  },
  {
    given_name: "Joe",
    surname: "Dickson",
    email: "joe@dickson.com",
    phone: "0453283283",
  },
  {
    given_name: "Scarlet",
    surname: "Johnson",
    email: "scarlet@johnson.com",
    phone: "0453283283",
  },
  {
    given_name: "Peter",
    surname: "Rhonda",
    email: "peter101@yahoo.com",
    phone: "0453283283",
  },
]

  const TABLE_HEADER = [
    "Given Name",
    "Surname",
    "Email",
    "Phone",
    "Actions"
  ]

  return (
    <TableContainer component={Paper} sx={{ p: "2rem"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {TABLE_HEADER.map((headers: string) => (
              <TableCell
                key={headers}
                align="left"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bolder"
                }}
              >
                {headers}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {DUMMY.map((row) => (
            <TableRow key={row.given_name}>
              <TableCell component="th" scope="row">
                {row.given_name}
              </TableCell>
              <TableCell align="left">{row.surname}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{formatPhoneNumber(+row.phone)}</TableCell>
              <TableCell align="left">
                <IconButton>
                  <EditIcon sx={{ color: "#000" }}/>
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "#000" }}/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent