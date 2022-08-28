import * as React from "react";
import TextField from "@mui/material/TextField";
import { Grid, Checkbox, Button } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";


const formDataSchema = yup.object({
  firstName: yup
    .string()
    .required("First name required")
    .min(8, "First name is greater than 8 characters"),
  lastName: yup
    .string()
    .required("last name required")
    .min(8, "last name is greater than 8 characters"),
  AddressLine1: yup
    .string()
    .required("Address required")
    .min(32, "Address is greater than 32 characters"),
  city: yup.string().required("City required"),
  zip: yup
    .number()
    .min(100000,"Must be exactly 6 characters")
    .max(999999,"Must be exactly 6 characters")
    .required("Zip/Postal Code required")
    .typeError("Enter valid ZipCode"),
  country: yup.string().required("Country required"),
});

export default function FormPropsTextFields() {
  const formData = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      AddressLine1: "",
      AddressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      check: false,
    },
    validationSchema: formDataSchema,
    onSubmit: (values) => {
      formData.handleReset();

      console.log(values);
    },
  });
  // const [check, setCheck]=useState(false)
  // const handleChange=(e)=>{
  //     console.log(e.target.checked);
  //     setCheck(e.target.checked)

  // }
  // const saveData=(e)=>{
  //     e.preventDefaults()
  //     console.log("submit");
  // }
  return (
    <form>
      {/* <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, maxWidth: "600px" },
      }}
      noValidate
      autoComplete="off"
    > */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        <Grid item xs={5} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1, maxWidth: "250px" }}
            required
            name="firstName"
            id="standard-required"
            label="First Name"
            variant="standard"
            size="small"
            value={formData.values.firstName}
            onChange={formData.handleChange}
            error={
              formData.touched.firstName && Boolean(formData.errors.firstName)
            }
            helperText={formData.touched.firstName && formData.errors.firstName}
          />
        </Grid>
        <Grid item xs={5} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1, maxWidth: "250px" }}
            required
            id="standard-required"
            name="lastName"
            label="Last Name"
            variant="standard"
            size="small"
            value={formData.values.lastName}
            onChange={formData.handleChange}
            error={
              formData.touched.lastName && Boolean(formData.errors.lastName)
            }
            helperText={formData.touched.lastName && formData.errors.lastName}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1 }}
            required
            id="standard-required"
            name="AddressLine1"
            label="Address line 1"
            variant="standard"
            size="small"
            value={formData.values.AddressLine1}
            onChange={formData.handleChange}
            error={
              formData.touched.AddressLine1 &&
              Boolean(formData.errors.AddressLine1)
            }
            helperText={
              formData.touched.AddressLine1 && formData.errors.AddressLine1
            }
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1 }}
            name="AddressLine2"
            id="standard-required"
            label="Address line 2"
            variant="standard"
            size="small"
            value={formData.values.AddressLine2}
            onChange={formData.handleChange}
          />
        </Grid>
        <Grid item xs={5} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1, maxWidth: "250px" }}
            required
            name="city"
            id="standard-required"
            label="City"
            variant="standard"
            size="small"
            value={formData.values.city}
            onChange={formData.handleChange}
            error={formData.touched.city && Boolean(formData.errors.city)}
            helperText={formData.touched.city && formData.errors.city}
          />
        </Grid>
        <Grid item xs={5} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1, maxWidth: "250px" }}
            name="state"
            id="standard-required"
            label="State/Provisions/Region"
            variant="standard"
            size="small"
            value={formData.values.state}
            onChange={formData.handleChange}
          />
        </Grid>
        <Grid item xs={5} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1, maxWidth: "250px" }}
            required
            name="zip"
            id="standard-required"
            label="Zip/Postal Code"
            variant="standard"
            size="small"
            value={formData.values.zip}
            onChange={formData.handleChange}
            error={formData.touched.zip && Boolean(formData.errors.zip)}
            helperText={formData.touched.zip && formData.errors.zip}
            inputProps={{ maxLength: 6 }}
          />
        </Grid>
        <Grid item xs={5} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1, maxWidth: "250px" }}
            required
            name="country"
            id="standard-required"
            label="Country"
            variant="standard"
            size="small"
            value={formData.values.country}
            onChange={formData.handleChange}
            error={formData.touched.country && Boolean(formData.errors.country)}
            helperText={formData.touched.country && formData.errors.country}
          />
        </Grid>
        <FormControlLabel
          name="check"
          control={
            <Checkbox
              checked={formData.values.check}
              onChange={formData.handleChange}
            />
          }
          label="Use this address for payment details"
        />
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            size="large"
            onClick={formData.handleSubmit}
          >
            Save
          </Button>
        </Grid>
      </Grid>

      {/* <TextField sx={{width:"20rem"}}
          required
          id="standard-required"
          label="Required"
          variant="standard"
          size='small'

        />
        <TextField sx={{width:"20rem"}}
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />*/}
      {/* </Box> */}
    </form>
  );
}
