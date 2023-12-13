import Button from "../elements/Button";

export default function MainLayout(props) {
  const { children, email } = props;

  const handleClick = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <div className="w-full bg-white py-3 px-5 flex justify-end items-center shadow-md fixed">
        <div className="mr-4 font-medium">{email}</div>
        <Button
          buttonText="Logout"
          type="button"
          classname="w-20"
          handleClick={() => handleClick("")}
        ></Button>
      </div>
      <div className="flex flex-wrap justify-center py-20 bg-slate-50 min-h-screen">
        {children}
      </div>
    </>
  );
}
