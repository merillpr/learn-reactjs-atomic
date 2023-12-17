export default function TransactionFragment(props) {
  const { children, id } = props;
  return (
    <a href={`/transaction-detail/${id}`}>
      <div className="w-80 h-72 shadow-md rounded-md bg-white py-2 px-4">
        {children}
      </div>
    </a>
  );
}

function Header(props) {
  const { image } = props;
  return (
    <div className="w-full h-2/3 flex justify-center">
      <img src={image} />
    </div>
  );
}

function Body(props) {
  const { name, stock, purchasePrice, sellingPrice } = props;
  return (
    <div className="text-sm text-gray-500 h-40">
      <h1 className="mb-1 font-semibold text-green-500">{name}</h1>
      <p>
        Stock <span className="font-bold">{stock}</span>
      </p>
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="green"
          className="bi bi-arrow-up mr-1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.5a.5.5 0 0 1 .5.5v8.793l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 10.293V2a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        <p>
          {purchasePrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="red"
          className="bi bi-arrow-down mr-1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 14.5a.5.5 0 0 1-.5-.5V5.707L4.854 8.354a.5.5 0 1 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 1 1-.708.708L8.5 5.707V14a.5.5 0 0 1-.5.5z"
          />
        </svg>
        <p>
          {sellingPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
    </div>
  );
}

TransactionFragment.Header = Header;
TransactionFragment.Body = Body;
