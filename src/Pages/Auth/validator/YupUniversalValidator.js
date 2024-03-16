import * as yup from "yup";

const ValidationSchema = yup.object().shape({
  email: yup
    .string("Enter your email address")
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(/(?=.*[0-9])/, "Password must contain at least one digit")
    .matches(
      /(?=.*[@#$%^&*])/,
      "Password must contain at least one special character"
    ),
});

export default ValidationSchema;
