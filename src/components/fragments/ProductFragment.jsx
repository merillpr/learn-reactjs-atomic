import Button from "../elements/Button";

export default function ProductFragment(props) {
  const { children } = props;
  return (
    <div className="w-80 h-96 shadow-md rounded-md bg-white py-4 px-4">
      {children}
    </div>
  );
}

function Header(props) {
  const { image } = props;
  return (
    <a className="w-full h-1/3 flex justify-center">
      <img src={image} />
    </a>
  );
}

function Body(props) {
  const { name, desc } = props;
  return (
    <div className="text-sm text-gray-500 h-44">
      <h1 className="mb-1 font-semibold text-green-500">{name}</h1>
      <p>{desc}</p>
    </div>
  );
}

function Footer(props) {
  const { price } = props;
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="font-medium">{price}</div>
      <Button buttonText="Buy Now" type="button" classname="w-2/5" />
    </div>
  );
}

ProductFragment.Header = Header;
ProductFragment.Body = Body;
ProductFragment.Footer = Footer;
