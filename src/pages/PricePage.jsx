import { useEffect, useState } from "react";
import Button from "../components/elements/Button";
import MainLayout from "../components/layouts/MainLayout";
import { getPriceList } from "../services/service.price-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { deletePrice } from "../services/service.price-delete";

export default function PricePage() {
  const [prices, setPrices] = useState(null);

  const handleOnDelete = (id) => {
    deletePrice(id, (data) => {
      if (!data.success) {
        alert(data.message);
      } else {
        window.location.reload();
      }
    });
  };

  const handleOnUpdate = (id) => {
    window.location.href = `/price-add/${id}`;
  };

  useEffect(() => {
    getPriceList((data) => {
      setPrices(data);
    });
  }, []);

  return (
    <MainLayout>
      <div className="w-5/6 h-10">
        <a href={`/price-add`}>
          <Button
            buttonText="Add Price"
            type="button"
            classname="w-28"
          ></Button>
        </a>
      </div>
      <div className="w-5/6 mt-5 min-h-screen">
        <table className="w-full border">
          <thead className="w-full bg-green-500 text-white font-semibold">
            <tr>
              <th className="w-1/8">No</th>
              <th>Product Name</th>
              <th>Purchase Price</th>
              <th>Sellling Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {prices &&
              prices.map((price, i) => (
                <tr key={i}>
                  <td className="w-1/8 text-center">{i + 1}</td>
                  <td>{price.name}</td>
                  <td>
                    {price.purchase_price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td>
                    {price.selling_price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      className="text-red-500"
                      icon={faTrash}
                      onClick={() => handleOnDelete(price.id)}
                    />
                    <FontAwesomeIcon
                      className="text-blue-500"
                      icon={faEdit}
                      onClick={() => handleOnUpdate(price.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
