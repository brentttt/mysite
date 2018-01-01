import React from 'react';

const InfoSection = (props) => {
  let curColor = 0;
  const splitStringToSpan = (string) => {
    let letters = string.split("");

    letters = letters.map((letter) => {
      return <span className="colorHover">{letter}</span>
    });

    return letters;
  }
  document.getElementsByTagName('body')[0].addEventListener('mousemove', function(e) {
    if(e.target.classList.contains('colorHover')) {
      curColor <= 400 ? curColor++ : curColor = 0;
      e.target.style.color = 'hsl(' + curColor + ', 100%, 50%)';
    }
  });
  return (
  <div className="section">
    <div className="section__wrapper">
      <div className="info-section__content">
        <h1>{splitStringToSpan(props.content.title)}</h1>
        {props.content.text.map((paragraph) => <p>
            {splitStringToSpan(paragraph)}
          </p>)}
        <p>{splitStringToSpan("Contact me at ")}<a href={"mailto:" + props.content.email}>{splitStringToSpan(props.content.email)}</a></p>
        <h3>{splitStringToSpan("Links")}</h3>
        <ul className="info__links">
          {props.content.links.map((link) => (
            <li>
              <a target="blank" href={link.url}>{splitStringToSpan(link.place)}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)};

export default InfoSection;
