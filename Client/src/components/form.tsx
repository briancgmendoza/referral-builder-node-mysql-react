import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography
} from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

const formSchema = z.object({
  givenName: z.string().min(2, { message: "Given Name is required"}),
  surname: z.string().min(2, { message: "Surname is required"}),
  email: z.string().min(1, { message: "Email is required"}).email({ message: "Must be a valid email"}),
  phone: z.string().min(10, { message: "Must be a valid phone number"}).max(15, { message: "Phone must contain at most 15 characters(s)"}),
  home: z.string().min(1, { message: "Home is required"}),
  street: z.string().min(1, { message: "Street is required"}),
  suburb: z.string().min(1, { message: "Suburb is required"}),
  state: z.string().min(1, { message: "State is required"}),
  postcode: z.string().min(1, { message: "Postcode is required"}),
  country: z.string().min(2, { message: "Country is required"})
})

type FormData = z.infer<typeof formSchema>

const FormComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (Object.keys(errors).length === 0) {
      console.log("Submitted: ", data);
    } else {
      console.log("Form has errors. Cannot submit.");
    }
  }

  return (
    <Box
      component="form"
      sx={{
        width: {
          md: "80%"
        },
        mx: "auto"
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography sx={{ fontWeight: "bolder" }}>Personal Details</Typography>
      <Divider />
      
      <Box
        sx={{
          my: "2rem"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("givenName")}
              label="Given Name"
              fullWidth
              error={Boolean(errors.givenName)}
            />
            {errors.givenName && <Typography sx={{ color: "red" }}>{errors.givenName.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("surname")}
              label="Surname"
              fullWidth
              error={Boolean(errors.surname)}
            />
            {errors.surname && <Typography sx={{ color: "red" }}>{errors.surname.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("email")}
              label="Email"
              fullWidth
              error={Boolean(errors.email)}
            />
            {errors.email && <Typography sx={{ color: "red" }}>{errors.email.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("phone")}
              label="Phone"
              fullWidth
              error={Boolean(errors.phone)}
              type="number"
            />
            {errors.phone && <Typography sx={{ color: "red" }}>{errors.phone.message}</Typography>}
          </Grid>
        </Grid>
      </Box>
      
      <Typography sx={{ fontWeight: "bolder" }}>Address</Typography>
      <Divider />
      
      <Box
        sx={{
          mt: "2rem"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("home")}
              label="Home name or #"
              fullWidth
              error={Boolean(errors.home)}
            />
            {errors.home && <Typography sx={{ color: "red" }}>{errors.home.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("street")}
              label="Street"
              fullWidth
              error={Boolean(errors.street)}
            />
            {errors.street && <Typography sx={{ color: "red" }}>{errors.street.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("suburb")}
              label="Suburb"
              fullWidth
              error={Boolean(errors.suburb)}
            />
            {errors.suburb && <Typography sx={{ color: "red" }}>{errors.suburb.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("state")}
              label="State"
              fullWidth
              error={Boolean(errors.state)}
            />
            {errors.state && <Typography sx={{ color: "red" }}>{errors.state.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("postcode")}
              label="Postcode"
              fullWidth
              error={Boolean(errors.postcode)}
            />
            {errors.postcode && <Typography sx={{ color: "red" }}>{errors.postcode.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("country")}
              label="Country"
              fullWidth
              error={Boolean(errors.country)}
            />
            {errors.country && <Typography sx={{ color: "red" }}>{errors.country.message}</Typography>}
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "85%"
          },
          mx: "auto",
          my: "2rem",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row"
          },
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Button
          sx={{
            width: "100%",
            maxWidth: {
              xs: "230px"
            },
            color: "#000",
            padding: ".5rem 1.5rem",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#dedede"
            },
            border: "1.5px solid #dedede",
            textTransform: "uppercase",
            fontWeight: "bolder",
            mb: {
              xs: "1rem",
              md: "0px"
            }
          }}
          onClick={() => {}}
        >
          Upload avatar
        </Button>

        <Button
          sx={{
            width: "100%",
            maxWidth: {
              xs: "230px"
            },
            color: "#fff",
            padding: ".5rem 1.5rem",
            backgroundColor: "#53A653",
            "&:hover": {
              backgroundColor: "#376E37"
            },
            textTransform: "uppercase",
            fontWeight: "bolder",
            mb: {
              xs: "1rem",
              md: "0px"
            }
          }}
          type="submit"
        >
          Create Referral
        </Button>
      </Box>
    </Box>
  )
}

export default FormComponent