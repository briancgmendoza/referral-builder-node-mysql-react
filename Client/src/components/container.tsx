import Box from "@mui/material/Box"

import { TContainerProps } from "../types"

const Container: React.FC<TContainerProps> = ({ children }: TContainerProps) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default Container