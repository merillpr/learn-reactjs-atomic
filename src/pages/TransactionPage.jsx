import { useEffect, useState } from "react";
import TransactionFragment from "../components/fragments/TransactionFragment";
import MainLayout from "../components/layouts/MainLayout";
import { getTransactionRecaps } from "../services/service.transaction-recaps";

export default function TransactionPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTransactionRecaps((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-5 max-w-screen">
        {products.length > 0 &&
          products.map((product) => (
            <TransactionFragment key={product.id} id={product.id}>
              <TransactionFragment.Header image={product.id} />
              <TransactionFragment.Body
                name={product.name.substring(0, 30) + "..."}
                stock={product.stock}
                purchasePrice={product.purchase_price}
                sellingPrice={product.selling_price}
              />
            </TransactionFragment>
          ))}
      </div>
      <div className="w-full flex justify-center text-gray-500 mt-10">
        --- end of data ---
      </div>
      <div className="w-full flex justify-center text-gray-500">
        {products.length} result
      </div>
    </MainLayout>
  );
}
