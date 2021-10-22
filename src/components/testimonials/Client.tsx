import React from 'react';

export default function Client ({
  img, name, description, position,
}: any) {
  return (
    <article className="client">
      <img src={img} alt="Emily" className="client__img" />
      <p className="client__description">{description}</p>
      <h3 className="client__name text text--title">{name}</h3>
      <small className="client__position">{position}</small>
    </article>
  );
}
