import React, { FC } from "react";
interface IProps {
  params: {
    slug: string[];
  };
}
const DocsPage: FC<IProps> = ({ params }) => {
    console.log('params.slug',params.slug)
  return (
    <div>
      {/* DocsPage:{params.slug} */}
      <p>
        {/* <code>docs/{params.slug.join("/")}</code> */}
      </p>
    </div>
  );
};

export default DocsPage;
