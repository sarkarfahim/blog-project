import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { postDetails } from "../APIRequest/ApiRequest.js";
import BlogDetails from "../Component/BlogDetails.jsx";
import Loader from "../Component/Loader.jsx";

const DetailsPage = () => {
  //////////
  let { postID } = useParams();
  const [list, setList] = useState(null);

  /////////////////////////////////////////////

  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      console.log(res);
      setList(res);
    })();
  }, [postID]);

  return (
    <div>
      <Layout>
        {list === null ? <Loader /> : <BlogDetails list={list} />}
      </Layout>
    </div>
  );
};

export default DetailsPage;
