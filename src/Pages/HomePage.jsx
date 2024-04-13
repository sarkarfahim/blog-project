import Layout from "../Layout/Layout.jsx";
import BlogList from "../Component/BlogList.jsx";
import { useEffect, useState } from "react";
import { postNewest } from "../APIRequest/ApiRequest.js";
import Loader from "../Component/Loader.jsx";

const HomePage = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postNewest();

      setList(res);
    })();
  }, []);

  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default HomePage;
