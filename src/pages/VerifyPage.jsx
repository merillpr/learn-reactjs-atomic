import VerifyFragment from "../components/fragments/VerifyFragment";
import AuthLayout from "../components/layouts/AuthLayout";

export default function VerifyPage() {
  return (
    <AuthLayout>
      <VerifyFragment
        namePage="Email Verification"
      />
    </AuthLayout>
  );
}
