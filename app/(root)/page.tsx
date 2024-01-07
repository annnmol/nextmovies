"use server";

//user defined
import FetchAllMovies from "@/components/product/movies";
import Search from "@/components/shared/search";
import { getAllMovies } from "@/lib/actions/movies.action";
import { SearchParamProps } from "@/types";


async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const query = (searchParams?.query as string) || "";

  const data = await getAllMovies({
    page:page,
    query: query,
  });

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Movies</h2>
      <Search />
      {/* <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section> */}
      <FetchAllMovies initialData={data}  />
    </main>
  );
}

export default Home;