

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;

var Route = Router.Route;
<<<<<<< HEAD
var NotFoundRoute = Router.NotFoundRoute;

var Redirect = Router.Redirect;
=======
>>>>>>> b1a93bbf0107ea41a505e6f804c735f0b7b9948a


var routes = (
    <Route name="app" path='/' handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/homePage')} />
      <Route name="authors" handler={require('./components/authors/authorPage')} />
<<<<<<< HEAD
      <Route name="addAuthor" path='author' handler={require('./components/authors/manageAuthorPage' )} />
      <Route name="about" handler={require('./components/about/aboutPage')} />
      <NotFoundRoute handler={require('./components/notFoundPage')} />
      <Redirect from="awful" to="authors" />
    </Route>


); 
=======
      <Route name="about" handler={require('./components/about/aboutPage')} />
    </Route>


);
>>>>>>> b1a93bbf0107ea41a505e6f804c735f0b7b9948a

module.exports = routes;