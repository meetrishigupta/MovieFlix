import { Component } from "react";
import MovieCard from "./MovieCard";
import { movies } from "./moviedata";

export const MovieList = (props) => {

        const { movies, handleStarsinc, handleStarsdec, handlefav, handlecart } = props //destructing
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
