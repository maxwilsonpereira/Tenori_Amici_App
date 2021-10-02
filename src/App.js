import React, { Suspense } from 'react';

// npm i react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './global.css';
// react-animate-on-scroll
import './utilities/animate.min.css';

import Menu from './components/Menu';

// LAZY LOADING NEXT PAGES:
// It will render the component ONLY WHEN / IF needed!
// React { Suspense } is required to wrap all the Routes.
const Home = React.lazy(() => {
  return import('./pages/home');
});
const Videos = React.lazy(() => {
  return import('./pages/videos');
});
const Photos = React.lazy(() => {
  return import('./pages/photos');
});
// const Footer = React.lazy(() => {
//   return import('./components/footer');
// });
// const VitaActiva = React.lazy(() => {
//   return import("./pages/vitaactiva");
// });

function App() {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Suspense fallback={<></>}>
        <Switch>
          {/* <Route path="/vitaactiva" component={VitaActiva} /> */}
          <Route
            path="/videos"
            render={() => (
              <div>
                <Videos menu={<Menu />} />
              </div>
            )}
          />
          <Route
            path="/photos"
            render={() => (
              <div>
                <Photos menu={<Menu />} />
              </div>
            )}
          />
          <Route
            path="/"
            render={() => (
              <div>
                <Home menu={<Menu />} />
              </div>
            )}
          />
        </Switch>
        {/* <Footer /> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
