import React from 'react';

const InfoSection = (props) => (
  <div className="section">
    <div className="section__wrapper">
      <div className="info-section__content">
        <h1>{props.content.title}</h1>
        {props.content.text.map((paragraph) => <p>{paragraph}</p>)}
        <p>Contact me at <a href={"mailto:" + props.content.email}>{props.content.email}</a></p>
        <h3>Links</h3>
        <ul className="info__links">
          {props.content.links.map((link) => (
            <li>
              <a target="blank" href={link.url}>{link.place}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default InfoSection;
