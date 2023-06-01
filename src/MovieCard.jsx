import React from "react";
const MovieCard = (props) => {
  const { movies, handleStarsinc, handleStarsdec, handlefav, handlecart } = props;
  const { cart, fav, title, plot, stars, price, rating, img, bgColor } = props.movies; //destructuring data
  return (
    <div className="main"  >
      {/**Movie Card */}
      <div className="movie-card" style={{
        backgroundColor: bgColor,
      }}>
        {/**Left section of Movie Card */}
        <div className="left">
          <img alt="poster" src={img} />
        </div>
        {/**Right section Movie Card */}
        <div className="right">
          {/**Title, plot, price of the movie */}
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>

          {/**Footer starts here with ratings, stars and buttons */}
          <div className="footer">
            <div className="rating">
              {rating} <b>iMDB</b>
            </div>

            {/**Star image with increase and decrease buttons and star count */}
            <div className="star-dis">
              <img
                id="dec-button"
                className="str-btn"
                onClick={() => { handleStarsdec(movies) }}
                alt="Decrease"
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
              />
              <img
                className="stars"
                alt="stars"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              />
              <img
                className="str-btn"
                alt="increase"
                onClick={() => { handleStarsinc(movies) }}
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
              />
              <span className="starCount">{stars}</span>
            </div>

            {/**Favourite and add to cart buttons */}
            {fav ? (
              <button onClick={() => { handlefav(movies) }} className="unfavourite-btn" >
                Un Favourite
              </button>
            ) : (
              <button onClick={() => { handlefav(movies) }} className="favourite-btn">
                Favourite
              </button>
            )}

            <button

              className={cart ? "remcart-btn" : "cart-btn"}
              onClick={() => { handlecart(movies) }}
            >
              {cart ? "Remove From Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MovieCard;
