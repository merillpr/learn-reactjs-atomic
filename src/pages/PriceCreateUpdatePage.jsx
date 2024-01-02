import Button from "../components/elements/Button";
import MainLayout from "../components/layouts/MainLayout";
import Input from "../components/elements/Input";
import { createPrice } from "../services/service.price-create";
import { updatePrice } from "../services/service.price-update";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPriceById } from "../services/service.price-get-by-id";
import { getProductList } from "../services/service.product-list";

export default function PriceCreateUpdatePage() {
  const params = useParams();
  const [price, setPrice] = useState(null);
  const [products, setProducts] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const price = {
      product_id: selectedProductId,
      purchase_price: e.target.purchase_price.value,
      selling_price: e.target.selling_price.value,
    };

    if (!params.id) {
      createPrice(price, (data) => {
        if (data) {
          window.location.href = "/price";
        }
      });
    } else {
      updatePrice(params.id, price, (data) => {
        if (data) {
          window.location.href = "/price";
        }
      });
    }
  };

  const handleSelectChange = (e) => {
    setSelectedProductId(e.target.value);
  };

  useEffect(() => {
    if (params.id) {
      getPriceById(params.id, (data) => {
        if (data.success) {
          setPrice(data.results);
          setSelectedProductId(data.results.product_id);
        }
      });
    }

    getProductList((data) => {
      setProducts(data);
    });
  }, [params.id]);

  return (
    <MainLayout>
      <form
        onSubmit={handleOnSubmit}
        className="w-5/6 shadow-md bg-white rounded-md p-4"
      >
        {price && (
          <>
            {products && (
              <select value={selectedProductId} onChange={handleSelectChange}>
                {products.map((product, i) => (
                  <option key={i} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            )}
            <Input
              labelName="Purchase_Price"
              typeInput="text"
              name="purchase_price"
              defaultvalue={price.purchase_price}
            />
            <Input
              labelName="Selling Price"
              typeInput="text"
              name="selling_price"
              defaultvalue={price.selling_price}
            />
          </>
        )}

        {!price && (
          <>
            {products && (
              <select value={selectedProductId} onChange={handleSelectChange}>
                <option value="" disabled>
                  Select a product
                </option>
                {products.map((product, i) => (
                  <option key={i} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            )}
            <Input
              labelName="Purchase_Price"
              typeInput="text"
              name="purchase_price"
              placeText="enter new purchase price..."
            />
            <Input
              labelName="Selling Price"
              typeInput="text"
              name="selling_price"
              placeText="enter new purchase price..."
            />
          </>
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
