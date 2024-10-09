// import React from 'react';
// import {Link} from 'react-router-dom';

// import { OutlineButton } from '../components/button/Button';
// import HeroSlide from '../components/hero slide/HeroSlide';
// import MovieList from '../components/movie-list/MovieList';

// import { category, movieType, tvType } from '../api/tmdbApi';

// const Home = () => {
//   return (
//     <>
//       <HeroSlide/>
//       <div className="container">
//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Trending Movies</h2>
//             <Link to= "/movie">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.movie} type={movieType.popular}/>
//         </div>

//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Top Rated Movies</h2>
//             <Link to= "/movie">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.movie} type={movieType.top_rated}/>
//         </div>

//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Trending TV</h2>
//             <Link to= "/tv">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.tv} type={tvType.popular}/>
//         </div>

//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Top Rated TV</h2>
//             <Link to= "/tv">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.tv} type={tvType.top_rated}/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
  return (
    <>
      <HeroSlide/>
      <div className="container">
        {/* Trending Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>

        {/* Top Rated Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        {/* Now Playing Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Now Playing Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.now_playing}/>
        </div>

        {/* Latest Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Latest Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.latest}/>
        </div>

        {/* Trending TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>

        {/* Top Rated TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>

        {/* Airing Today TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Airing Today</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.airing_today}/>
        </div>

        {/* Latest TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Latest TV Shows</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.latest}/>
        </div>
      </div>
    </>
  );
}

export default Home;
