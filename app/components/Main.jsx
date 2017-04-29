var React = require('react');
var Nav = require('Nav');
var About = require('About');

var Main = React.createClass({
  render: function() {
    return (
      <div>
      <h2>Homorummutus.fi</h2>
      <Nav/>
      <About/>
      </div>

    );

  }
});

module.exports = Main;
