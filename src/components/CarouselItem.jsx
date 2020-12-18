import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';
import playIcon from '../assets/static/play-icon.png';
import plusicon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, duration, contentRating } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      duration,
      contentRating,
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          <img className='carousel-item__details--img' src={plusicon} alt='Plus Icon' onClick={handleSetFavorite} />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>

  );
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};
const mapDispatchToProps = {
  setFavorite,
};
// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);
