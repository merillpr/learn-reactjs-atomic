export default function Radio(props) {
  const { type, name, label, classname } = props;

  return (
    <label className={`flex items-center ${classname}`}>
      <input
        className={`mr-2 appearance-none w-4 h-4 rounded-full border border-green-500 checked:bg-green-500`}
        type={type}
        name={name}
        value={label}
      />
      {label}
    </label>
  );
}
