import React, { useState, useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Typography,
  Alert,
  styled,
  InputAdornment,
  IconButton,
  Paper
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";

const StyledRoot = styled('div')(({ theme }) => ({
  height: '100vh',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: 16,
  background: 'transparent',
  width: '100%',
  maxWidth: '400px',
}));

const AnimatedAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  width: 56,
  height: 56,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  '& .MuiTextField-root, & .MuiFormControl-root': {
    marginBottom: theme.spacing(2),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: 8,
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.2s',
  backgroundColor: '#757575',
  '&:hover': {
    backgroundColor: '#616161',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
}));

const Login = () => {
  const ctx = useContext(DataContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [manageLogin, setManageLogin] = useState({
    email: "",
    password: "",
    type: "",
    url: "",
    errorMsg: "",
    isError: false
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setManageLogin((prev) => ({
      ...prev,
      type: event.target.value,
      url: `${process.env.REACT_APP_API_BASE_URL}/${event.target.value}/login`,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        email: manageLogin.email,
        password: manageLogin.password,
      };
      if (!data.email.length || !data.password.length) {
        alert("Please enter all required fields");
        return;
      }
      const res = await axios.post(manageLogin.url, data);
      if (res.status === 200 && res.data) {
        ctx.loginHandler({
          isLoggedIn: true,
          userDetails: res.data.result,
          type: res.data.result.userType,
          token: res.data.token,
        });
        if (res.data.result.userType === "admin") {
          navigate("/dashboard");
        } else if (res.data.result.userType === "student") {
          navigate("/student");
        } else if (res.data.result.userType === "faculty") {
          navigate("/facultydashboard");
        }
      }
    } catch (err) {

      setManageLogin((prev) => ({
        ...prev,
        isError: true,
        errorMsg:err.data
      })) 
    }
  };

  return (
    <StyledRoot>
      <Grid 
        container 
        component="main" 
        sx={{ 
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CssBaseline />
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2
          }}
        >
          <StyledPaper>
            <AnimatedAvatar>
              <LockOutlinedIcon sx={{ fontSize: 32 }} />
            </AnimatedAvatar>
            <Typography component="h1" variant="h4" sx={{ mb: 3, fontWeight: 700, color: '#424242' }}>
              Welcome Back
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Sign in to continue to your dashboard
            </Typography>
            
            {manageLogin.isError && (
              <Alert 
                severity="error" 
                sx={{ 
                  width: '100%', 
                  mb: 2,
                  borderRadius: 2,
                }}
              >
                {manageLogin.errorMsg}
              </Alert>
            )}

            <StyledForm onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setManageLogin(prev => ({
                  ...prev,
                  email: e.target.value
                }))}
                autoFocus
                sx={{ borderRadius: 2 }}
              />

              <TextField
                fullWidth
                variant="outlined"
                required
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onChange={(e) => setManageLogin(prev => ({
                  ...prev,
                  password: e.target.value
                }))}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl fullWidth variant="outlined">
                <InputLabel id="user-type-label">User Type</InputLabel>
                <Select
                  labelId="user-type-label"
                  id="user-type"
                  value={manageLogin.type}
                  label="User Type"
                  onChange={handleChange}
                >
                  <MenuItem value={"student"}>Student</MenuItem>
                  <MenuItem value={"faculty"}>Faculty</MenuItem>
                  <MenuItem value={"careerService"}>Career Services</MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                </Select>
              </FormControl>

              <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </StyledButton>
            </StyledForm>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledRoot>
  );
};

export default Login;
