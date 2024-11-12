import axios from "axios";
import { useState } from "react";

export const Fetch = () => {
  const [data, setData] = useState<string>("");

  const handleFetch = async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-server289.vercel.app/api"
      );
      setData(response.data); // Set only the data portion of the response
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleFetch}>fetch</button>
      <div>{data ? data : "no data yet"}</div>
    </div>
  );
};
