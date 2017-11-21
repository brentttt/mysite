import React from 'react';

const DevSection = (props) => {
  let mobile = false;
  if(window.innerWidth < 700) {
    mobile = true;
  }
  return (
  <div
    className="section"
    style={{
      color: props.content.color,
      boxShadow: '0 10px 45px 45px ' + props.content.bg,
      background: props.content.bg,
      zIndex: props.z
    }}>
    <div className="section__wrapper">
      <div className="section__images">
        <img src={!mobile ? '/images/' + props.content.image.name + props.content.image.ext : '/images/' + props.content.image.name + '-mobile' + props.content.image.ext} />
      </div>
      <div className="section__content" style={{textShadow: "0 0 30px " + props.content.bg}}>
        <h1><a
          target="blank"
          href={props.content.link}
          style={{
            color: props.content.color,
          }}
          >{props.content.title} »</a></h1>
        {props.content.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </div>
  </div>
)};

export default DevSection;

//  borderBottom: "2px solid " + props.content.color}}
// style={{textShadow: "0 0 8px " + props.content.bg}}
