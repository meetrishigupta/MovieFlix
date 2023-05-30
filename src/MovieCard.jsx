import React from "react";

const handleStarsinc = () => {
  // //First Form of setState()
  // this.setState({
  //   stars: this.state.stars + 0.5,
  // });
  if (this.state.stars < 5) {
    this.setState((prev) => {
      return {
        stars: prev.stars + 0.5,
      };
    });
  }
};

const handleStarsdec = () => {
  if (this.state.stars > 0) {
    this.setState({
      stars: this.state.stars - 0.5,
    });
  }
};
const handlefav = () => {
  this.setState({
    fav: !this.state.fav,
  });
};
const handleCart = () => {
  this.setState({
    cart: !this.state.cart,
  });
};
const MovieCard = (props) => {
  const {movies: data} = props; //changing name of props from passing from parent
  const { cart, fav, title, plot, stars, price, rating, img } = data; //destructuring data
  return (
    <div className="main">
      {/**Movie Card */}
      <div className="movie-card">
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
                onClick={handleStarsdec}
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
                onClick={handleStarsinc}
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
              />
              <span className="starCount">{stars}</span>
            </div>

            {/**Favourite and add to cart buttons */}
            {fav ? (
              <button className="unfavourite-btn" onClick={handlefav}>
                Un Favourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={handlefav}>
                Favourite
              </button>
            )}

            <button
              onClick={handleCart}
              className={cart ? "remcart-btn" : "cart-btn"}
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
