// import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import Products from "../models/products";
import dbConnect from "../lib/dbConnect";

const Home = (props) => {
  const { products } = props;

  return (
    <div>
      <div>Lists of product:</div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product._id}>
              <Link href={`/${product._id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  console.log("Re-Generating...");
  await dbConnect();

  const result = await Products.find({});
  const data = [];
  result.map((product, index) => {
    data.push(product.toObject());
    data[index]._id = data[index]._id.toString();
    data[index].createdAt = data[index].createdAt.toString();
    data[index].updatedAt = data[index].updatedAt.toString();
  });

  // const filePath = path.join(process.cwd(), "data", "products.json");
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData);
  return {
    props: {
      products: data,
    },
  };
}

export default Home;
