import React from 'react';

export default function Service (props: any) {
  const {
    title, description, img, reverse,
  } = props;
  return (
    <article className={reverse ? 'services services--reverse' : 'services'}>
      <div className="services__section services__section--text">
        <strong className="text text--dark text--title services__section__title">{title}</strong>
        <p className="text text--gray services__section__text">
          {description}
        </p>
        <a href="/" className="services__section__link services__section__link--yellow text text--dark text--title">Learn more</a>
      </div>
      <div className="services__section services__section--image">
        <img src={img} alt="Ilustration" className="services__img" />
      </div>
    </article>
  );
}
