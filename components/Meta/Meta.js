import Head from "next/head";
import { head } from "../../template/data";

const Meta = () => {
  return (
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description}></meta>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={"/" + head.favicon}
      />
      <meta name="author" content={head.author} />
      <meta name="copyright" content="Template by Aymen Bida" />
    </Head>
  );
};

export default Meta;

// TODO: add open graph meta tags