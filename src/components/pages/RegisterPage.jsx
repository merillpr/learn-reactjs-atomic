import RegisterFragment from "../fragments/RegisterFragment";
import AuthLayout from "../layouts/AuthLayout";

export default function Login() {
  return (
    <AuthLayout>
      <RegisterFragment
        namePage="Register"
        question="Have an account?"
        destLink="login"
        destText="Login"
      />
    </AuthLayout>
  );
}
