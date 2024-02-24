import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Box
} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Modal from "./modal";
import FormComponent from "./form";
import DefaultAvatar from "../assets/default_avatar.png"

import { formatPhoneNumber } from "../helper";
import { getUsers } from "../store/usersSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { TUserProfile } from "../../../Server/types";
import { deleteUser } from "../store/deleteUserSlice";

const TableComponent = () => {
  const dispatch = useAppDispatch();
  const { data: usersData, status: usersStatus } = useAppSelector((state) => state.users)
  const { status: addUserStatus } = useAppSelector((state) => state.addedUser)
  const { status: deleteUserStatus } = useAppSelector((state) => state.delete)
  const { status: updateUserStatus } = useAppSelector((state) => state.updateUserProfile)

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch, addUserStatus, deleteUserStatus, updateUserStatus])

  const TABLE_HEADER = [
    "Given Name",
    "Surname",
    "Email",
    "Phone",
    "Avatar",
    "Actions"
  ]

  const uploadedAvatarFilePath = "src/assets/"

  return (
    <>
      <TableContainer component={Paper} sx={{ py: "2rem" }}>
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
                    {user.avatar_image ? (
                      <Box
                        component="img"
                        src={`${uploadedAvatarFilePath}${user.avatar_image}`}
                        alt={`${user.given_name}-${user.surname}-avatar`}
                        sx={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%"
                        }}
                      />
                    ):
                      <Box
                        component="img"
                        src={DefaultAvatar}
                        alt={`${user.given_name}-${user.surname}-avatar`}
                        sx={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%"
                        }}
                      />
                    }
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        setOpenModal(!openModal)
                        setUserId(+user.user_id!)
                      }}
                    >
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
                <TableCell colSpan={6} align="center">No data</TableCell>
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