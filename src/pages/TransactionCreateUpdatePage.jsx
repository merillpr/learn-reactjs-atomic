import Button from "../components/elements/Button";
import MainLayout from "../components/layouts/MainLayout";
import Input from "../components/elements/Input";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductList } from "../services/service.product-list";
import { createTransaction } from "../services/service.transaction-create";
import { updateTransaction } from "../services/service.transaction-update";
import { getTransactionById } from "../services/service.transaction-get-by-id";
import { getPriceList } from "../services/service.price-list";

export default function TransactionCreateUpdatePage() {
  const params = useParams();
  const [transaction, setTransction] = useState(null);
  const [prices, setPrices] = useState(null);
  const [products, setProducts] = useState(null);
  const [selectedPriceId, setSelectedPriceId] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [filteredPrices, setFilteredPrices] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      product_id: selectedProductId,
      price_id: selectedPriceId,
      qty: e.target.qty.value,
      is_purchase: true,
    };

    if (!params.id) {
      createTransaction(transaction, (data) => {
        if (data) {
          window.location.href = "/transaction";
        }
      });
    } else {
      updateTransaction(params.id, transaction, (data) => {
        if (data) {
          window.location.href = "/transaction";
        }
      });
    }
  };

  const handleSelectProductChange = (e) => {
    const id = e.target.value;
    setSelectedProductId(id);
    const filteredPrices = prices.filter((price) => price.product_id == id);
    setFilteredPrices(filteredPrices.length > 0 ? filteredPrices : null);
  };

  const handleSelectPriceChange = (e) => {
    setSelectedPriceId(e.target.value);
  };

  useEffect(() => {
    if (params.id) {
      getTransactionById(params.id, (data) => {
        if (data.success) {
          setTransction(data.results);
          setSelectedProductId(data.results.product_id);
          setSelectedPriceId(data.results.price_id);
        }
      });
    }

    getProductList((data) => {
      setProducts(data);
      if (!params.id) {
        setSelectedProductId(data[0].id);
      }
    });

    getPriceList((data) => {
      setPrices(data);
      setFilteredPrices(data);
      if (!params.id) {
        setSelectedPriceId(data[0].id);
      }
    });
  }, [params.id]);

  return (
    <MainLayout>
      <form
        onSubmit={handleOnSubmit}
        className="w-5/6 shadow-md bg-white rounded-md p-4"
      >
        {transaction && (
          <>
            {products && (
              <div>
                <select
                  value={selectedProductId}
                  onChange={handleSelectProductChange}
                >
                  {products.map((product, i) => (
                    <option key={i} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {filteredPrices && (
              <div>
                <select
                  value={selectedPriceId}
                  onChange={handleSelectPriceChange}
                >
                  {filteredPrices.map((price, i) => (
                    <option key={i} value={price.id}>
                      purchase: {price.purchase_price}, selling:{" "}
                      {price.selling_price}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <Input
              labelName="Quantity Pembelian"
              typeInput="text"
              name="qty"
              defaultvalue={transaction.qty}
            />
          </>
        )}

        {!transaction && (
          <>
            {products && (
              <div>
                <select
                  value={selectedProductId}
                  onChange={handleSelectProductChange}
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  {products.map((product, i) => (
                    <option key={i} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {filteredPrices ? (
              <div>
                <select
                  value={selectedPriceId}
                  onChange={handleSelectPriceChange}
                >
                  {filteredPrices.map((price, i) => (
                    <option key={i} value={price.id}>
                      purchase: {price.purchase_price}, selling:{" "}
                      {price.selling_price}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <select value="" onChange={handleSelectPriceChange}>
                  <option value="" disabled>
                    No prices available
                  </option>
                </select>
              </div>
            )}
            <Input
              labelName="Quantity Pembelian"
              typeInput="text"
              name="qty"
              placeText="enter product quantity..."
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
