import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return data;
};

export default useFetch;
