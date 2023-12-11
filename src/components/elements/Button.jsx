export default function Button(props) {
  return (
    <button
      type="submit"
      className="w-full bg-green-500 text-white font-semibold py-2 border rounded-md mt-4 mb-1"
    >
      {props.buttonText}
    </button>
  );
}
