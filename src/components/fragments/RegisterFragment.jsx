import { Link } from "react-router-dom";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { register } from "../../services/service.register";

export default function LoginFragment(props) {
  const { namePage, question, destLink, destText } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.confirmPassword.value,
    };
    register(user, (data) => {
      if(data.success){
        window.location.href = `/verify-email/${data.results.id}`;
      }
    });
  };

  return (
    <div className="w-full max-w-xs border border-green-500 p-10 rounded-bl-3xl rounded-tr-3xl">
      <h1 className="text-green-500 text-xl font-bold">{namePage}</h1>
      <p className="mb-6">Welcome back, insert your identity below!</p>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <Input
            labelName="Name"
            typeInput="text"
            name="name"
            placeText="enter your name..."
          />
        </div>
        <div className="mb-3">
          <Input
            labelName="Email"
            typeInput="email"
            name="email"
            placeText="enter your email..."
          />
        </div>
        <div className="mb-6">
          <Input
            labelName="Password"
            typeInput="password"
            name="password"
            placeText="enter your password.."
          />
        </div>
        <div className="mb-6">
          <Input
            labelName="Confirm Password"
            typeInput="password"
            name="confirmPassword"
            placeText="enter your confirm password..."
          />
        </div>
        <Button buttonText={namePage} type="submit" classname="mt-4 mb-1" />
      </form>
      <p className="text-center">
        {question}{" "}
        <Link
          to={`/${destLink}`}
          className="text-green-500 font-semibold hover:text-green-600"
        >
          {destText}
        </Link>
      </p>
    </div>
  );
}
