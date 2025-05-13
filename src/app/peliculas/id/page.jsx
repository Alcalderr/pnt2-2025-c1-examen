import React, { useEffect, useState } from 'react';

export default function MovieDetailPage({ params }) {
    const { id } = params;
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
        try {
            const response = await fetch(`https://mflixbackend.azurewebsites.net/api/movies/${id}`);
            if (!response.ok) {
            throw new Error('No se pudo cargar la película');
            }
            const movieData = await response.json();
            setMovie(movieData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    fetchMovie();
    }, [id]);

    if (loading) {
        return <p>Cargando detalles de la película...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!movie) {
        return <p>Película no encontrada.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
        {movie.poster ? (
            <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-lg mb-4" />
        ) : (
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-600">{movie.title}</span>
            </div>
        )}
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-700 leading-relaxed">{movie.fullplot}</p>
        </div>
    );
}