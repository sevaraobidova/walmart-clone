import React from "react";
import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: { q: string };
};

async function SearchPage({ searchParams: { q } }: Props) {
  const result = await fetchSearch(q);
  console.log(result);

  return <div>Hello search</div>;
}

export default SearchPage;
