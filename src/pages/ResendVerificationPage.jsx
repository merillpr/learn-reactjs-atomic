import ResendVerificationFragment from "../components/fragments/ResendVerificationFragment";
import AuthLayout from "../components/layouts/AuthLayout";

export default function ResendVerificationPage() {
  return (
    <AuthLayout>
      <ResendVerificationFragment namePage="Resend Verification Code" />
    </AuthLayout>
  );
}
