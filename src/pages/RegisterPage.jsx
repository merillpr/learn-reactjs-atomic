import RegisterFragment from "../components/fragments/RegisterFragment";
import AuthLayout from "../components/layouts/AuthLayout";

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
