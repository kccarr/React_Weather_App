var React = require('react');
var {Link} = require('react-router');
// var About = React.createClass({
//   render:
//   function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>

      <div className="row">
        <div className="medium-4 columns">
          <div className="card">
            <div className="card-section">
              <Link to="https://github.com/andrewjmead/react-course-weather-app">React Course Weather App</Link>
              <p>Original Github repo for app.</p>
            </div>
          </div>
        </div>
        <div className="medium-4 columns">
          <div className="card">
            <div className="card-section">
              <Link to="https://facebook.github.io/react/">Learn about React.js</Link>
              <p>A JS Library for building User Interfaces created by Facebook.</p>
            </div>
          </div>
        </div>
        <div className="medium-4 columns">
          <div className="card">
            <div className="card-section">
              <Link to="https://openweathermap.org/">Open Weather Map API</Link>
              <p>The API we use to gather weather data.</p>
            </div>
          </div>
        </div>
      </div>

    </div>





  );
};

module.exports = About;
