import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/Home.scss';

const API = 'http://localhost:3000/initalState';
const Home = () => {
  const initialState = useInitialState(API);
  // console.log(videos);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='Home'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {
              // eslint-disable-next-line react/jsx-props-no-spreading
              initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default Home;
