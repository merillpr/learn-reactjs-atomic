import Button from "../components/elements/Button";
import Input from "../components/elements/Input";
import MainLayout from "../components/layouts/MainLayout";
import { useParams } from "react-router-dom";
import { getTransactionRecap } from "../services/service.transaction-recap";
import { useEffect, useState } from "react";
import { getTransactionRecapList } from "../services/service.transaction-recap-list";
import Radio from "../components/elements/Radio";
import { createTransaction } from "../services/service.transaction-create";

export default function DetailTransactionPage() {
  const email = localStorage.getItem("email");
  const [product, setProduct] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const params = useParams();

  useEffect(() => {
    getTransactionRecap(params.id, (data) => {
      setProduct(data);
    });
    getTransactionRecapList(params.id, (data) => {
      setTransactions(data);
    });
  }, [params.id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { quantity, status } = e.target;
    if (quantity.value.trim() === "") {
      alert("quantity must be filled");
    } else if (status.value.trim() === "") {
      alert("status must be filled");
    } else {
      const isPurchase = status.value === "in";
      const transaction = {
        product_id: product.product_id,
        qty: quantity.value,
        is_purchase: isPurchase,
        price_id: product.price_id,
      };
      createTransaction(transaction, () => {
        window.location.reload();
      });
    }
  };

  return (
    <MainLayout email={email}>
      {product !== null && (
        <div className="flex justify-between w-screen h-screen mx-6">
          <div className="w-3/5 shadow-md bg-white rounded-md p-4">
            <div className="w-full h-3/5 flex justify-start ">
              <img src={product.product_id} />
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
                      fillRule="eveiddd"
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
                      fillRule="eveiddd"
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
            <form onSubmit={handleOnSubmit}>
              <Input
                classname="my-5"
                labelName="Quantity"
                typeInput="quantity"
                name="quantity"
                placeText="enter product quantity..."
              />
              <p className=" font-semibold">Status</p>
              <div className="flex flex-row mb-5">
                <Radio
                  type="radio"
                  name="status"
                  label="in"
                  classname="mr-6"
                ></Radio>
                <Radio type="radio" name="status" label="out"></Radio>
              </div>
              <div>
                <Button
                  buttonText="Submit"
                  type="submit"
                  classname="w-1/3"
                ></Button>
              </div>
            </form>
          </div>
          {transactions.length > 0 && (
            <div className="w-2/5 p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-1/5">No</th>
                    <th className="w-2/5">Date</th>
                    <th className="w-1/5">Status</th>
                    <th className="w-1/5">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tr, i) => (
                    <tr key={tr.id}>
                      <td className="w-1/5 text-center">{i + 1}</td>
                      <td className="w-2/5 text-center">
                        {tr.created_at.substring(0, 10)}
                      </td>
                      <td className="w-1/5 text-center">{tr.status}</td>
                      <td className="w-1/5 text-center">{tr.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </MainLayout>
  );
}
