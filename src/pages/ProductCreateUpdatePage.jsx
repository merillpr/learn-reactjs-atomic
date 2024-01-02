import Button from "../components/elements/Button";
import MainLayout from "../components/layouts/MainLayout";
import Input from "../components/elements/Input";
import { createProduct } from "../services/service.product-create";
import { updateProduct } from "../services/service.product-update";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/service.product-get-by-id";

export default function ProductCreateUpdatePage() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
    };

    if (!params.id) {
      createProduct(product, (data) => {
        if (data) {
          window.location.href = "/product";
        }
      });
    } else {
      updateProduct(params.id, product, (data) => {
        if (data) {
          window.location.href = "/product";
        }
      });
    }
  };

  useEffect(() => {
    if (params.id) {
      getProductById(params.id, (data) => {
        if (data.success) {
          setProduct(data.results);
        }
      });
    }
  }, [params.id]);

  return (
    <MainLayout>
      <form
        onSubmit={handleOnSubmit}
        className="w-5/6 shadow-md bg-white rounded-md p-4"
      >
        {product && (
          <Input
            labelName="Name"
            typeInput="text"
            name="name"
            defaultvalue={product.name}
          />
        )}

        {!product && (
          <Input
            labelName="Name"
            typeInput="text"
            name="name"
            placeText="enter new product name..."
          />
        )}

        <div className="w-full flex justify-center mt-5">
          <div className="w-1/4">
            <Button buttonText="Submit" type="submit"></Button>
          </div>
        </div>
      </form>
    </MainLayout>
  );
}
