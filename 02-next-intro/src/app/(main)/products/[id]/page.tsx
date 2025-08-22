import React, { FC } from "react";

interface IProps {
  params: {
    id: string;
  };
}

const ProductPage: FC<IProps> = ({ params }) => {

  return <div>ProductPage:{params.id}</div>;
};

// 'docs/getting-started/installations'
// 'docs/components/button'
// 'docs/components/input'

export default ProductPage;
