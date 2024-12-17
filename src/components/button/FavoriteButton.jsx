import "./FavoriteButton.css";
import { useState } from 'react';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const FavoriteButton = ({  isFavorite, onFavoriteToggle }) => {

  const handleFavoriteToggle = () => {
    //setFavorite(!favorite);
    onFavoriteToggle( isFavorite);
  };

 return (
    <button
      className={`favorite-btn ${isFavorite ? 'active' : '' }`}
      onClick={handleFavoriteToggle}
    >
      <FavoriteBorderOutlinedIcon className="w-5 h-5" />
    </button>
  );
};

export default FavoriteButton;