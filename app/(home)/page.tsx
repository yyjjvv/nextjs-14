// () doesm't effect to URL. It just the group

import Link from "next/link";

export const metadata = {
    title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
const getMovies = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL); //자동으로 페치된 데이터 캐싱
    const json = await response.json();
    return json;
};

export default async function HomePage() {
    //async 사용 이유: 로딩이 먼저 이루어져야하기 때문
    const movies = await getMovies();

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
}
