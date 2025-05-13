import React, { useState } from 'react';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const toggleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const toggleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  return (
    <div className="w-[90px] text-center">
      <Link href={`/peliculas/${movie._id}`} passHref>
        <div className="cursor-pointer">
          {movie.poster && !imageError ? (
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="w-full h-[135px] object-cover rounded-md"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-xs text-gray-600 text-center">{movie.title}</span>
            </div>
          )}
          <p className="text-xs mt-1 truncate">{movie.title}</p>
        </div>
      </Link>
      <div className="flex justify-center items-center mt-1 space-x-2">
        <button 
          onClick={toggleLike} 
          className={`text-sm ${liked ? 'text-green-600' : 'text-gray-400'}`}
        >
          👍
        </button>
        <button 
          onClick={toggleDislike}
          className={`text-sm ${disliked ? 'text-red-600' : 'text-gray-400'}`}
        >
          👎
        </button>
      </div>
    </div>
  );
}