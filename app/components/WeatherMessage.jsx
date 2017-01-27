var React = require('react');

// var WeatherMessage  = React.createClass({
//
//   render: function () {
//     var {city,temp} = this.props;
//
//     return (
//       <h3>It's {temp} in {city}</h3>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {city, temp} = props;
//
//   return (
//     <h3>It's {temp} in {city}</h3>
//   );
// };

var WeatherMessage = ({city, temp}) => {
  return (
    <h3 className="text-center">It's {temp} in {city}</h3>
  );
};

module.exports = WeatherMessage;
