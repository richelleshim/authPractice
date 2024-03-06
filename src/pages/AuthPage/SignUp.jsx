import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Typography,
} from "@mui/joy";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });

  return (
    <>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          fontSize="14"
          type="email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input
          placeholder="Full Name"
          fontSize="14"
          type="text"
          value={inputs.fullName}
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder="Username"
          fontSize="14"
          type="text"
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Password"
          fontSize="14"
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          endDecorator={
            <IconButton
              color="neutral"
              variant="soft"
              size="small"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}{" "}
            </IconButton>
          }
        />
      </FormControl>
      <Button
        color="primary"
        size="sm"
        fontSize={14}
        onClick={() => signup(inputs)}
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;
