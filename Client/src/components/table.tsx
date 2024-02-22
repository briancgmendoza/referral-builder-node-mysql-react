import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import Modal from "./modal";
import FormComponent from "./form";

import { formatPhoneNumber } from "../helper";
import { getUsers } from "../store/usersSlice";
import { RootState } from "../store";
import { TUserProfile } from "../../../Server/types";
import { deleteUser } from "../store/deleteUserSlice";

const TableComponent = () => {
  const dispatch = useDispatch();
  const { data: usersData, status: usersStatus } = useSelector((state: RootState) => state.users)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const TABLE_HEADER = [
    "Given Name",
    "Surname",
    "Email",
    "Phone",
    "Actions"
  ]

  return (
    <>
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
            {usersStatus === "loading" && (
              <TableRow>
                <TableCell colSpan={5} align="center">Loading...</TableCell>
              </TableRow>
            )}
            {usersStatus === "failed" && (
              <TableRow>
                <TableCell colSpan={5} align="center">Error fetching data.</TableCell>
              </TableRow>
            )}
            {usersStatus === "succeeded" && usersData.length > 0 ? (
              usersData.map((user: TUserProfile) => (
                <TableRow key={user.user_id}>
                  <TableCell>{user.given_name}</TableCell>
                  <TableCell>{user.surname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{formatPhoneNumber(+user.phone)}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => {
                      setOpenModal(!openModal)
                      setUserId(+user.user_id!)
                    }}>
                      <EditIcon sx={{ color: "#000" }}/>
                    </IconButton>
                    <IconButton onClick={() => dispatch(deleteUser(+user.user_id!))}>
                      <DeleteIcon sx={{ color: "#000" }}/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ): (
              <TableRow>
                <TableCell colSpan={5} align="center">No data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        ariaDescribedBy="modal-update-user-profile"
        open={openModal}
        close={() => setOpenModal(!openModal)}
        title="Updating user profile"
        modalContent={
          <FormComponent
            shouldPopulateData={{
              bool: true,
              id: userId!
            }}
          />
        }
      />
    </>
  )
}

export default TableComponent