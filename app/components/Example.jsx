var React = require('react');
var {Link} = require('react-router');
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
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Los Angeles, CA">Los Angeles, CA</Link>
        </li>
        <li>
          <Link to="/?location=Jackson Hole">Jackson Hole</Link>
        </li>
      </ol>
    </div>

  );
}

module.exports = Example;
