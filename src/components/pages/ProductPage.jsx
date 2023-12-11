import ProductFragment from "../fragments/ProductFragment";

const products = [
  {
    id: 1,
    image: "./img/daia-violet-620.webp",
    name: "Daia Violet 620gr",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit laboriosam recusandae natus. Quisquam error libero earum deserunt, rerum nostrum nesciunt, ipsam iusto ea, facilis maiores ab necessitatibus soluta molestiae!",
    price: "Rp 7000",
  },
  {
    id: 2,
    image: "./img/gula-pasir-gulaku-1.png",
    name: "Gula Pasir Gulaku 1kg",
    desc: "Quisquam error libero earum deserunt, rerum nostrum nesciunt, ipsam iusto ea, facilis maiores ab necessitatibus soluta molestiae!",
    price: "Rp 25000",
  },
  {
    id: 3,
    image: "./img/minyak-goreng-bimoli-200.jpg",
    name: "Minyak Goreng Bimoli 200ml",
    desc: "Autem suscipit laboriosam recusandae natus. Quisquam error libero earum deserunt, rerum nostrum nesciunt, ipsam iusto ea, facilis maiores ab necessitatibus soluta molestiae!",
    price: "Rp 20000",
  },
  {
    id: 4,
    image: "./img/sunlight-jeruk-nipis-755.webp",
    name: "Sunlight Jeruk Nipis 755ml",
    desc: "Quisquam error libero earum deserunt, rerum nostrum nesciunt, ipsam iusto ea, facilis maiores ab necessitatibus soluta molestiae!",
    price: "Rp 14000",
  },
];

export default function ProductPage() {
  return (
    <div className="flex flex-wrap justify-center py-4 bg-slate-50 min-h-screen ">
      <div className="grid grid-cols-3 gap-5 max-w-screen">
        {products.map((product) => (
          <ProductFragment key={product.id}>
            <ProductFragment.Header image={product.image} />
            <ProductFragment.Body name={product.name} desc={product.desc} />
            <ProductFragment.Footer price={product.price} />
          </ProductFragment>
        ))}
      </div>
      <div className="w-full flex justify-center text-gray-500 mt-10">
        --- end of data ---
      </div>
      <div className="w-full flex justify-center text-gray-500">
        {products.length} result
      </div>
    </div>
  );
}
