import React, { useContext, useEffect } from "react";
import Nav from "../../components/Nav";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../../utils/yupSchemas";
import axios from "axios";
import { useNavigate } from "react-router";
import AuthContext, { AuthProvider } from "../../context/AuthContext";
import { AUTH_URL, BASE_URL } from "../../utils/Api";
import {
  StyledInput,
  StyledSpan,
  StyledButton,
  StyledForm,
} from "./styledLogin";

const Login = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    console.log("auth", auth);
    console.log(AUTH_URL);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  const loginUser = async (formData) => {
    const responseData = await axios.post(AUTH_URL, {
      identifier: formData.email,
      password: formData.password,
    });
    console.log("Response Data:", responseData);

    setAuth(responseData.data);
    navigate("/admin");
  };

  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);
    loginUser(formData).catch(console.error);
    console.log("auth: ", auth);
  };

  return (
    <>
      <Nav title="Login" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput {...register("email")} placeholder="Your email..." />
        {errors.email && <StyledSpan> {errors.email.message}</StyledSpan>}

        <StyledInput
          {...register("password")}
          type="password"
          placeholder="Your password..."
        />

        {errors.password && <StyledSpan>{errors.password.message}</StyledSpan>}

        <StyledButton>Login</StyledButton>
      </StyledForm>
    </>
  );
};

export default Login;
