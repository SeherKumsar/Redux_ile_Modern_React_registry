import type { SearchLoaderResult } from "./searchLoader";
// import type { PackageSummary } from "../../api/types/packageSummary";
import { useLoaderData } from "react-router-dom";

export default function SearchPage() {
  // const data = useLoaderData() as { searchResults: PackageSummary[] };
  const data = useLoaderData() as SearchLoaderResult;
  // console.log(data);

  console.log(data.searchResults);
  // console.log(data.packages);
  return <div>Search Page</div>;
}
