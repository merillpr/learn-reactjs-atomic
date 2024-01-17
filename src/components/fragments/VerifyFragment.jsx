import Input from "../elements/Input";
import Button from "../elements/Button";
import { verifyEmail } from "../../services/service.verify-email";
import { useParams } from "react-router-dom";

export default function VerifyFragment(props) {
  const { namePage} = props;
  const params = useParams();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: params.id,
      code: e.target.code.value,
    };
    verifyEmail (data, (data) => {
      if(data.success){
        alert(data.message);
        window.location.href = "/login";
      }else{
        alert(data.message);
      }
    });
  };

  return (
    <div className="w-full max-w-xs border border-green-500 p-10 rounded-bl-3xl rounded-tr-3xl">
      <h1 className="text-green-500 text-xl font-bold">{namePage}</h1>
      <p className="mb-6">Your account was registered, one step again to finish it!</p>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <Input
            labelName="Enter the verification code below that was send via email"
            typeInput="text"
            name="code"
            placeText="enter verification code..."
          />
        </div>
        <Button buttonText="Verify" type="submit" classname="mt-4 mb-1" />
      </form>
    </div>
  );
}
