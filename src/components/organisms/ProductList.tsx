import { FixedSizeList as List } from "react-window";

type Product = {
  id: number;
  title: string;
  price: number;
};

type Props = {
  products: Product[];
};

const Row = ({ index, style, data }: any) => {
  const product = data[index];

  return (
    <div
      style={style}
      className="flex justify-between px-4 border-b items-center"
    >
      <span>{product.title}</span>
      <span className="font-semibold">${product.price}</span>
    </div>
  );
};

const ProductList = ({ products }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow mt-8">
      <h3 className="p-4 font-semibold">Products</h3>

      <List
        height={300}
        itemCount={products.length}
        itemSize={50}
        width={"100%"}
        itemData={products}
      >
        {Row}
      </List>
    </div>
  );
};

export default ProductList;