import { useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

import { TFormProps, TUserWithoutId } from "../types";
import { RootState } from "../store";
import { getUserById } from "../store/userSlice";
import { updateUserProfile } from "../store/updateUserSlice";
import { addUser } from "../store/addUserSlice";

const formSchema = z.object({
  given_name: z.string().min(2, { message: "Given Name is required"}),
  surname: z.string().min(2, { message: "Surname is required"}),
  email: z.string().min(1, { message: "Email is required"}).email({ message: "Must be a valid email"}),
  phone: z.string().min(10, { message: "Must be a valid phone number"}),
  house_no: z.string().min(1, { message: "Home is required"}),
  street: z.string().min(1, { message: "Street is required"}),
  suburb: z.string().min(1, { message: "Suburb is required"}),
  state: z.string().min(1, { message: "State is required"}),
  postcode: z.string().min(1, { message: "Postcode is required"}),
  country: z.string().min(2, { message: "Country is required"})
})

export type FormData = z.infer<typeof formSchema>

const FormComponent: React.FC<TFormProps> = ({ shouldPopulateData }: TFormProps) => {
  const dispatch = useDispatch();
  const { data: userData } = useSelector((state: RootState) => state.user)
  const { register, handleSubmit, setValue, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (Object.keys(errors).length === 0) {
      if (shouldPopulateData?.bool) {
        const formDataWithPhoneAsString: FormData = {
          ...data,
          phone: data.phone.toString()
        };
        dispatch(updateUserProfile({ id: +shouldPopulateData.id!, formData: formDataWithPhoneAsString }))
      } else {
        dispatch(addUser(data))
      }
    } else {
      console.log("Form has errors. Cannot submit.");
    }
  }

  useEffect(() => {
    if (shouldPopulateData?.bool && shouldPopulateData.id !== null) {
      dispatch(getUserById(+shouldPopulateData?.id))
    }
  }, [dispatch, shouldPopulateData?.bool, shouldPopulateData?.id])

  useEffect(() => {
    if (shouldPopulateData?.bool && shouldPopulateData?.id !== null && userData) {
      Object.keys(userData).forEach((key) => {
        if (key in formSchema.shape && key in userData) {
          const userProfileKey = key as keyof TUserWithoutId;
          setValue(userProfileKey, userData[userProfileKey]);
        }
      });
    }
  }, [setValue, shouldPopulateData?.bool, shouldPopulateData?.id, userData]);

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
              {...register("given_name")}
              label="Given name"
              fullWidth
              error={Boolean(errors.given_name)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.given_name && <Typography sx={{ color: "red" }}>{errors.given_name.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("surname")}
              label="Surname"
              fullWidth
              error={Boolean(errors.surname)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.surname && <Typography sx={{ color: "red" }}>{errors.surname.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("email")}
              label="Email"
              fullWidth
              error={Boolean(errors.email)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.email && <Typography sx={{ color: "red" }}>{errors.email.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("phone")}
              label="Phone"
              fullWidth
              error={Boolean(errors.phone)}
              InputLabelProps={{ shrink: true }}
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
              {...register("house_no")}
              label="Home name or #"
              fullWidth
              error={Boolean(errors.house_no)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.house_no && <Typography sx={{ color: "red" }}>{errors.house_no.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("street")}
              label="Street"
              fullWidth
              error={Boolean(errors.street)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.street && <Typography sx={{ color: "red" }}>{errors.street.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("suburb")}
              label="Suburb"
              fullWidth
              error={Boolean(errors.suburb)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.suburb && <Typography sx={{ color: "red" }}>{errors.suburb.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("state")}
              label="State"
              fullWidth
              error={Boolean(errors.state)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.state && <Typography sx={{ color: "red" }}>{errors.state.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("postcode")}
              label="Postcode"
              fullWidth
              error={Boolean(errors.postcode)}
              InputLabelProps={{ shrink: true }}
            />
            {errors.postcode && <Typography sx={{ color: "red" }}>{errors.postcode.message}</Typography>}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("country")}
              label="Country"
              fullWidth
              error={Boolean(errors.country)}
              InputLabelProps={{ shrink: true }}
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
          {shouldPopulateData?.bool ? "Update" : "Create Referral"}
        </Button>
      </Box>
    </Box>
  )
}

export default FormComponent