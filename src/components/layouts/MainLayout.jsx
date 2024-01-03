import { logout } from "../../services/service.logout";
import Button from "../elements/Button";

export default function MainLayout(props) {
  const { children } = props;
  const email = localStorage.getItem("email");

  const handleClick = () => {
    logout((success, message) => {
      if (success) {
        localStorage.removeItem("token");
        console.log(message);
        window.location.href = "/login";
      }
    });
  };

  return (
    <>
      <div className="w-full bg-white py-3 px-5 flex justify-end items-center shadow-md fixed">
        <div className="mr-4">
          <a href="/transaction" className="hover:text-green-500">
            Transaction
          </a>
        </div>
        <div className="mr-4">
          <a href="/product" className="hover:text-green-500">
            Product
          </a>
        </div>
        <div className="mr-10">
          <a href="/price" className="hover:text-green-500">
            Price
          </a>
        </div>
        <div className="mr-4 font-medium">{email}</div>
        <Button
          buttonText="Logout"
          type="button"
          classname="max-w-fit px-2"
          handleClick={() => handleClick("")}
        ></Button>
      </div>
      <div className="flex flex-wrap justify-center py-20 bg-slate-50 min-h-screen">
        {children}
      </div>
    </>
  );
}
