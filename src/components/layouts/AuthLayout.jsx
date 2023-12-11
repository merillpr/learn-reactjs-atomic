export default function AuthLayout(props) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {props.children}
    </div>
  );
}
