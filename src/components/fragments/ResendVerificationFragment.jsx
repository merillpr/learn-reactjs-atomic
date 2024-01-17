import Input from "../elements/Input";
import Button from "../elements/Button";
import { resendVerificationCode } from "../../services/service.resend-verification-code";

export default function ResendVerificationFragment(props) {
  const { namePage} = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };
    resendVerificationCode(data, (data) => {
      if (data.success) {
        alert(data.message);
        window.location.href = `/verify-email/${data.results.id}`;
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <div className="w-full max-w-xs border border-green-500 p-10 rounded-bl-3xl rounded-tr-3xl">
      <h1 className="text-green-500 text-xl font-bold">{namePage}</h1>
      <p className="mb-6">Type your email and get your verification code.</p>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <Input
            labelName="Enter your email"
            typeInput="email"
            name="email"
            placeText="enter email here..."
          />
        </div>
        <Button buttonText="Verify" type="submit" classname="mt-4 mb-1" />
      </form>
    </div>
  );
}
