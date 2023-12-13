import LoginFragment from "../components/fragments/LoginFragment";
import AuthLayout from "../components/layouts/AuthLayout";

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
