import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideoSource } from '../actions';
// import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  // const { id, cover, title, year, duration, contentRating, isList } = props;
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button
          type='button'
          className='button'
          onClick={() => props.history.goBack()}
        >
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Link to='/'>
      <button className='button'>Regresa al Home</button>
    </Link>
  );

};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
