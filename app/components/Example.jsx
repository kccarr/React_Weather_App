var React = require('react');

// var Example = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

var Example = (props) => {
  return (
    <div>
      <h3>Examples Component!</h3>
      <p>Welcome to the examples page!</p>
    </div>

  );
}

module.exports = Example;
