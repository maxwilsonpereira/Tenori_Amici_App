import React, { Suspense } from "react";

// npm i react-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./global.css";
// react-animate-on-scroll
import "./utilities/animate.min.css";

import NavigationHome from "./components/navigation";
import NavigationSeconds from "./components/navigation/navSeconds";

// LAZY LOADING NEXT PAGES:
// It will render the component ONLY WHEN / IF needed!
// React { Suspense } is required to wrap all the Routes.
const Home = React.lazy(() => {
  return import("./pages/home");
});
const Videos = React.lazy(() => {
  return import("./pages/videos");
});
const Photos = React.lazy(() => {
  return import("./pages/photos");
});
const Footer = React.lazy(() => {
  return import("./components/footer");
});
const VitaActiva = React.lazy(() => {
  return import("./pages/vitaactiva");
});

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Suspense fallback={<></>}>
        <Switch>
          <Route
            path="/vitaactiva"
            render={() => (
              <div>
                <NavigationSeconds />
                <VitaActiva />
              </div>
            )}
          />
          <Route
            path="/videos"
            render={() => (
              <div>
                <NavigationSeconds />
                <Videos />
              </div>
            )}
          />
          <Route
            path="/photos"
            render={() => (
              <div>
                <NavigationSeconds />
                <Photos />
              </div>
            )}
          />
          <Route
            path="/"
            render={() => (
              <div>
                <NavigationHome />
                <Home />
              </div>
            )}
          />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
