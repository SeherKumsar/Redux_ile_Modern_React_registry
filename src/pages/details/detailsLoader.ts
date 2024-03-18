import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";

interface LoaderArgs {
  params: Params;
}

// export async function detailsLoader({ params }: {params: Params}) {
export async function detailsLoader({ params }: LoaderArgs) {
  // await getPackage(name);
  
  const { name } = params;

  if (!name) {
    throw new Error("Name must be provided");
  }

  const details = await getPackage(name);

  return {
    details,
  };
}
