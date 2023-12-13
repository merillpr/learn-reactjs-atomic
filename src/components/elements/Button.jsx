export default function Button(props) {
  const {classname, buttonText, type, color="bg-green-500", hover="bg-green-600", handleClick=() => {}} = props;

  return (
    <button
      type={type}
      className={`w-full ${color} hover:${hover} text-white font-semibold py-2 rounded-md ${classname}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}
