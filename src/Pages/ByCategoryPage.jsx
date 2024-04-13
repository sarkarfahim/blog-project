import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postByCategory } from "../APIRequest/ApiRequest";
import Loader from "../Component/Loader";
import BlogList from "../Component/BlogList";
import Layout from "../Layout/Layout";

const ByCategoryPage = () => {
  const { categoryID } = useParams();

  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryID);

      setList(res);
    })();
  }, [categoryID]);

  return (
    <div>
      <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
    </div>
  );
};

export default ByCategoryPage;
