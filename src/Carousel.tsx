import React from "react";
import {Photo} from "@frontendmasters/pet";

interface IProps {
  media: Photo[] 
}

class Carousel extends React.Component {
  public state = {
    photos: [],
    active: 0
  };
  public static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  public handleIndexClick = ({event) => {
    this.setState({
      active: +event.target.dataset.index
    });
  };
  public render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
