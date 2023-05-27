import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 150,
      rating: 8.5,
      stars: 0,
      img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    };
  }

  handleStarsinc = () => {
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

  handleStarsdec = () => {
    if (this.state.stars > 0) {
      this.setState({
        stars: this.state.stars - 0.5,
      });
    }
  };
  render() {
    const { title, plot, stars, price, rating, img } = this.state;

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
                  className="str-btn"
                  onClick={this.handleStarsdec}
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
                  onClick={this.handleStarsinc}
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                />
                <span className="starCount">{stars}</span>
              </div>

              {/**Favourite and add to cart buttons */}
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
