import Button from "../elements/Button";
import Input from "../elements/Input";
import MainLayout from "../layouts/MainLayout";

const transactions = [
  {
    no: 1,
    date: "1/12/2023",
    status: "In",
    qty: 50,
  },
  {
    no: 2,
    date: "1/12/2023",
    status: "Out",
    qty: 10,
  },
  {
    no: 3,
    date: "2/12/2023",
    status: "Out",
    qty: 5,
  },
  {
    no: 4,
    date: "10/12/2023",
    status: "Out",
    qty: 3,
  },
  {
    no: 5,
    date: "15/12/2023",
    status: "Out",
    qty: 2,
  },
  {
    no: 6,
    date: "25/12/2023",
    status: "In",
    qty: 10,
  },
];

const product = {
  id: 1,
  image: "./img/daia-violet-620.webp",
  name: "Daia Violet 620gr",
  stock: 50,
  purchase_price: 6250,
  selling_price: 7000,
};

export default function DetailProductPage() {
  const email = localStorage.getItem("email");

  return (
    <MainLayout email={email}>
      <div className="flex justify-between w-screen h-screen mx-6">
        <div className="w-3/5 h-2/3 shadow-md bg-white rounded-md p-4">
          <div className="w-full h-3/5 flex justify-start ">
            <img src={product.image} />
            <div className="w-1/2 ml-5">
              <h1 className="mb-1 font-semibold text-green-500">
                {product.name}
              </h1>
              <p>
                Stock <span className="font-bold">{product.stock}</span>
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
                  {product.purchase_price.toLocaleString("id-ID", {
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
                  {product.selling_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
          </div>
          <form onSubmit="">
            <Input
              classname="my-5"
              labelName="Quantity"
              typeInput="quantity"
              name="quantity"
              placeText="enter product quantity..."
            />
            <div className="flex justify-around">
              <Button
                buttonText="Product In"
                type="submit"
                classname="w-1/3"
              ></Button>
              <Button
                buttonText="Product Out"
                type="submit"
                classname="w-1/3"
                color="bg-red-500"
                hover="bg-red-600"
              ></Button>
            </div>
          </form>
        </div>
        <div className="w-2/5 p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-1/5">No</th>
                <th className="w-2/5">date</th>
                <th className="w-1/5">Status</th>
                <th className="w-1/5">Qty</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tr) => (
                <tr key="tr.no">
                  <td className="w-1/5 text-center">{tr.no}</td>
                  <td className="w-2/5 text-center">{tr.date}</td>
                  <td className="w-1/5 text-center">{tr.status}</td>
                  <td className="w-1/5 text-center">{tr.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
