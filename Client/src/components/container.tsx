import Box from "@mui/material/Box"

import { TContainerProps } from "../types"

const Container: React.FC<TContainerProps> = ({ children }: TContainerProps) => {
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto"
      }}
    >
      {children}
    </Box>
  )
}

export default Container