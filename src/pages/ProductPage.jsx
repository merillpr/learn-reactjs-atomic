import { useEffect, useState } from "react";
import Button from "../components/elements/Button";
import MainLayout from "../components/layouts/MainLayout";
import { getProductList } from "../services/service.product-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { deleteProduct } from "../services/service.product-delete";

export default function ProductPage() {
  const [products, setProducts] = useState(null);

  const handleOnDelete = (id) => {
    deleteProduct(id, () => {
      window.location.reload();
    });
  };

  const handleOnUpdate = (id) => {
    window.location.href = `/product-add/${id}`;
  };

  useEffect(() => {
    getProductList((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <MainLayout>
      <div className="w-5/6 h-10">
        <a href={`/product-add`}>
          <Button
            buttonText="Add Product"
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
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {products &&
              products.map((product, i) => (
                <tr key={i}>
                  <td className="w-1/8 text-center">{i + 1}</td>
                  <td>Image</td>
                  <td>{product.name}</td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      className="text-red-500"
                      icon={faTrash}
                      onClick={() => handleOnDelete(product.id)}
                    />
                    <FontAwesomeIcon
                      className="text-blue-500"
                      icon={faEdit}
                      onClick={() => handleOnUpdate(product.id)}
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
