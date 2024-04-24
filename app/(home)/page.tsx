//NOTE: () doesm't effect to URL. It just the group

import Movie from "../../components/movie";
import styles from '../../styles/home.module.css'

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
    //NOTE: async 사용 이유: data fetching이 이루어지기 때문. 로딩 처리도 가능해짐
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}
