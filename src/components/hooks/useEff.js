import { useState, useEffect } from "react";
import axios from "axios";
export const UseEff = () => {
  const [count, setCount] = useState(0);
  const [postdata, setPostdata] = useState([]);
  console.log("render start ");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
        setPostdata(result.data);
        console.log("postdata inside useeff", postdata);
      })
      .catch((err) => {});
    console.log("useffect call", count);
    // setCount((prev) => prev + 1);
  }, []);

  function postForm() {
    console.log("http post");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then((res) => console.log("post response", res));
  }

  console.log("render end ");
  console.log("postdata", postdata);
  return (
    <>
      <h1>Hello useff</h1>
      {postdata && postdata.map((data) => <h1>{data.id}</h1>)}
      <button onClick={postForm}>Submit</button>
    </>
  );
};
