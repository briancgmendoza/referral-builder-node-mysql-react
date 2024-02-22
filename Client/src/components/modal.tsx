import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography
} from "@mui/material"
import { Close } from "@mui/icons-material"

import { TModalProps } from "../types"

const Modal: React.FC<TModalProps> = ({
  ariaDescribedBy,
  open,
  close,
  title,
  modalContent
}: TModalProps) => {
  return (
    <Dialog
      aria-describedby={ariaDescribedBy}
      open={open}
      onClose={close}
      keepMounted
      fullScreen
      >
      <DialogTitle sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ alignSelf: "flex-end" }}>
          <IconButton onClick={close}>
            <Close
              sx={{
                width: {
                  xs: "16px",
                  sm: "23px"
                },
                height: {
                  xs: "16px",
                  sm: "23px"
                },
                color: "#000"
              }}
              />
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontWeight: "bold !important",
            fontSize: {
              xs: "20px",
              md: "35px"
            },
            textTransform: "uppercase",
            textAlign: "center"
          }}
          >        
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        {modalContent}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
