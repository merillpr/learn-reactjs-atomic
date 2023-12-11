import LoginFragment from "../fragments/LoginFragment";
import AuthLayout from "../layouts/AuthLayout";

export default function Login() {
  return (
    <AuthLayout>
      <LoginFragment
        namePage="Login"
        question="Have not an account?"
        destLink="register"
        destText="Register"
      />
    </AuthLayout>
  );
}
