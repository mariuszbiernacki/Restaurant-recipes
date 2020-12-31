import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import SingleReceipe from "../pages/SingleReceipe/SingleReceipe";
import bgPhoto from "../assets/images/bg-photo.jpg";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div
          className="main-wrapper"
          style={{ backgroundImage: `url(${bgPhoto})` }}
        >
          <div className="container">
            <Route exact path="/" component={App} />
            {/* Poniżej występuje ścieżka dynamiczna (:title), która może być dowolnym znakiem, stringiem, cyfrą i podmieni się nam dynamicznie w endpoincie https (czyli w przeglądarce) w zależnosci od tego co w tej dynamicznej ścieżce wpiszemy. /recipes/ - jest częścią statyczną a część dynamiczna występuje po :  */}
            <Route path="/recipes/:title" component={SingleReceipe} />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
