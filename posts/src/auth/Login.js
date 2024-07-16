import React from 'react'
import { Box, TextField } from '@mui/material'
const Login = () => {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box
        sx={{
          width: "500px",
          height: "500px",
          backgroundColor: "greenyellow",
          borderTopLeftRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        <Box sx={{backgroundColor:"white", alignItems:"center"}}>
          <Box>
            <TextField
              // {...register("email", {
              //   required: true,
              //   pattern: /^\S+@\S+$/i,
              // })}
              label="Email Address"
              // error={!!errors.lastName}
              // helperText={errors.lastName ? "Last name is required" : ""}
            />
          </Box>
          <Box>
            <TextField label="password" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login
