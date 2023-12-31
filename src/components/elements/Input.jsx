export default function Input(props) {
  const {labelName, typeInput="text", name, placeText, classname, defaultvalue} = props;

  return (
    <div className={`${classname}`}>
      {" "}
      <label htmlFor={name} className="block font-semibold">
        {labelName}
      </label>
      <input
        type={typeInput}
        name={name}
        id={name}
        placeholder={placeText}
        defaultValue={defaultvalue}
        className="w-full border border-gray-300 rounded-md px-2 py-1 text-gray-500  placeholder-opacity-75 placeholder-gray-300 focus:border-green-500 focus:outline-none transition-all duration-300"
      />
    </div>
  );
}
