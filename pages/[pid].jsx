import Link from "next/link";
import { Fragment } from "react";

import path from "path";
// import fs from "fs/promises";

import Products from "../models/products";
import dbConnect from "../lib/dbConnect";

function productDesc(props) {
  const { loadedProduct } = props;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
      <Link href={"/"}>Home Page</Link>
    </Fragment>
  );
}

export default productDesc;

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  // const filePath = path.join(process.cwd(), "data", "products.json");
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData);

  // const product = data.products.find((product) => {
  //   return product.id === productId;
  // });

  await dbConnect();

  const result = await Products.find({});
  const data = [];
  result.map((product, index) => {
    data.push(product.toObject());
    data[index]._id = data[index]._id.toString();
    data[index].createdAt = data[index].createdAt.toString();
    data[index].updatedAt = data[index].updatedAt.toString();
  });

  const product = data.find((prod) => {
    return prod._id === productId;
  });

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "630bbe51893138ccbfafd9f2" } },
      { params: { pid: "630bc29b144134f8065e79cd" } },
      { params: { pid: "630f5fd41e5991c78a0c2a5d" } },
    ],
    fallback: false,
  };
}
