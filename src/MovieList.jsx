import { Component } from "react";
import MovieCard from "./MovieCard";
import { movies } from "./moviedata";

export class MovieList extends Component {
    render() {
        const { movies, handleStarsinc, handleStarsdec, handlefav, handlecart } = this.props //destructing
        return (
            <>
                {movies.map((item) => <MovieCard
                    movies={item}
                    handleStarsinc={handleStarsinc}
                    handleStarsdec={handleStarsdec}
                    handlefav={handlefav}
                    handlecart={handlecart}
                    key={item.id}
                />
                )}

            </>
        )
    }
}
