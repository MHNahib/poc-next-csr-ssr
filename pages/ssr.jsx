import React from "react";
import { getAPI } from "../servces/api";
import Table from "../src/components/Table/Table";

const ssr = ({ data }) => {
  return (
    <>
      <Table data={data} title={"SSR (server side rendering )"} />
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await getAPI("users");

  return { props: { data: response?.data } };
}

export default ssr;
