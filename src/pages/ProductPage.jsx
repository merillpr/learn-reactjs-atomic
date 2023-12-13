import ProductFragment from "../components/fragments/ProductFragment";
import MainLayout from "../components/layouts/MainLayout";

const products = [
  {
    id: 1,
    image: "./img/daia-violet-620.webp",
    name: "Daia Violet 620gr",
    stock: 50,
    purchase_price: 6250,
    selling_price: 7000,
  },
  {
    id: 2,
    image: "./img/gula-pasir-gulaku-1.png",
    name: "Gula Pasir Gulaku 1kg",
    stock: 57,
    purchase_price: 24100,
    selling_price: 25000,
  },
  {
    id: 3,
    image: "./img/minyak-goreng-bimoli-200.jpg",
    name: "Minyak Goreng Bimoli 200ml",
    stock: 24,
    purchase_price: 13750,
    selling_price: 15000,
  },
  {
    id: 4,
    image: "./img/sunlight-jeruk-nipis-755.webp",
    name: "Sunlight Jeruk Nipis 755ml",
    stock: 43,
    purchase_price: 13000,
    selling_price: 14000,
  },
];

export default function ProductPage() {
  const email = localStorage.getItem("email");

  return (
    <MainLayout email={email}>
      <div className="grid grid-cols-3 gap-5 max-w-screen">
        {products.map((product) => (
          <ProductFragment key={product.id} id={product.id}>
            <ProductFragment.Header image={product.image} />
            <ProductFragment.Body
              name={product.name}
              stock={product.stock}
              purchasePrice={product.purchase_price}
              sellingPrice={product.selling_price}
            />
          </ProductFragment>
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
