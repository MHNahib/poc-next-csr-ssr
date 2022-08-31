import { useEffect, useState } from "react";
import Table from "../src/components/Table/Table";
import { getAPI } from "../servces/api";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await getAPI("users");
    // console.log(response);
    if (response && response.data) {
      setData(response.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <>
      {loading ? (
        <div className="text-center text-red-900 text-3xl py-6">Loading...</div>
      ) : (
        <Table data={data} title={"CSR (client side rendering )"} />
      )}
    </>
  );
}
