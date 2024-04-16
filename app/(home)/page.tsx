// () doesm't effect to URL. It just the group

export const metadata = {
    title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
const getMovies = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(URL); //자동으로 페치된 데이터 캐싱
    const json = await response.json();
    return json;
};

export default async function HomePage() {
    const movies = await getMovies();

    return <div>{JSON.stringify(movies)}</div>;
}
