import { useState } from "react"
import { Box, Button, Typography } from "@mui/material"

import Table from "../../components/table"
import Modal from "../../components/modal"
import FormComponent from "../../components/form"

const IndexPage = () => {
  const [openReferModal, setOpenReferModal] = useState(false)
  return (
    <>
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          my: "2rem",
          display: "flex",
          justifyContent: "flex-start"
        }}
      >
        <Typography
          sx={{
            fontWeight: "bolder",
            fontSize: {
              xs: "20px",
              md: "30px",
              lg: "40px"
            }
          }}
        >
          Referral Builder
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          my: "2rem",
          backgroundColor: "#fff",
          borderRadius: "5px"
        }}
      >
        <Table />
      </Box>
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          my: "2rem",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <Button
          sx={{
            color: "#fff",
            padding: ".5rem 2rem",
            backgroundColor: "#376E37",
            "&:hover": {
              backgroundColor: "#53A653"
            },
          }}
          onClick={() => setOpenReferModal(true)}
        >
          Refer
        </Button>
      </Box>

      <Modal
        ariaDescribedBy="modal-add-user"
        open={openReferModal}
        close={() => setOpenReferModal(!openReferModal)}
        title="New referral"
        modalContent={
          <FormComponent />
        }
      />
    </>
  )
}

export default IndexPage