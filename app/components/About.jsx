var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Mitä</h1>
      <p>
        Tämä sivu on tehty kaikille niille joille tasa-arvoinen avioliittolaki ei ole
        politiikan väline, vaan pikemminkin mittari kansakunnan sivistykseen.

        Lisätietoja halutessaan löytyy
        vaikkapa <a href="https://www.seta.fi">Setan</a> sivuilta.

     </p>
      <p>
        Mahdollisesti hyödyllisiä linkkejä.
      </p>
      <ul>
        <li><a href="https://www.adressit.com/lisaa_homorummuttajia_saarakkalalle">Adressi homorummutukseen!</a></li>
        <li><a href="https://www.seta.fi">Seta</a></li>
        <li><a href="https://www.eduskunta.fi">Eduskunta</a></li>
        <li><a href="http://susannantyohuone.net/hmtomppa/">Maatuskoja!</a></li>

      </ul>
    </div>
  )
};

module.exports = About;
