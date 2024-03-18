import { searchPackages } from "../../api/queries/searchPackages";
// loader: async ({ request }) => {
//   const { searchParams } = new URL(request.url);
//   const term = searchParams.get("term");
//   if (!term) {
//     throw new Error("Missing search term");
//   }

// },
export async function searchLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided");
  }

  const results = await searchPackages(term);
  // const topPackages = await getTopPackages();

  return {
    // topPackages,
    searchResults: results,
  };
}
