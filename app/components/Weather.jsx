var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
      };
  },

  processNewCity: function(city) {
    // this.setState(updates);
    var that = this;


    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    })
  },


  render: function () {
    var {isLoading, temp, city} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} city={city}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onNewCity={this.processNewCity}/>
        {renderMessage()}

      </div>

    );
  }
});

module.exports = Weather;
