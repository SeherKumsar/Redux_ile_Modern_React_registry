import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  // const data = useLoaderData() as HomeLoaderResult;
  const {featuredPackages} = useLoaderData() as HomeLoaderResult;
  
  console.log(featuredPackages);
  
  return <div>Home Page</div>;
}
