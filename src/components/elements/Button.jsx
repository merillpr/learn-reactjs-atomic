export default function Button(props) {
  const {classname, buttonText, type} = props;

  return (
    <button
      type={type}
      className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md ${classname}`}
    >
      {buttonText}
    </button>
  );
}
