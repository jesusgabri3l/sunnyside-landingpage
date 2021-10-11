import React from 'react';
import Header from '../components/header/Header';
import egg from '../assets/images/desktop/image-transform.jpg';
import standout from '../assets/images/desktop/image-stand-out.jpg';

export default function Home () {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">
        <section className="section">
          <article className="services">
            <div className="services__section services__section--text">
              <h2 className="text text--dark text--title services__section__title">Transform your brand</h2>
              <p className="text text--gray services__section__text">
                We are a full-service creative agency sepecializing in helping brand grow fast.
                Engage your client through compelling visuals that do most of the marketing for you.
              </p>
              <a href="/" className="services__section__link services__section__link--yellow text text--dark text--title">Learn more</a>
            </div>
            <div className="services__section services__section--image">
              <img src={egg} alt="Ilustration" className="services__img" />
            </div>
          </article>
          <article className="services services--reverse">
            <div className="services__section services__section--text">
              <h2 className="text text--dark text--title services__section__title">Stand out to the right audience</h2>
              <p className="text text--gray services__section__text">
                Using a collaborative formular of designers, researchers, photographers, videographers, and copywriters,
                we will build and extend your brand in digital places.
              </p>
              <a href="/" className="services__section__link services__section__link--pink text text--dark text--title">Learn more</a>
            </div>
            <div className="services__section services__section--image">
              <img src={standout} alt="Ilustration" className="services__img" />
            </div>
          </article>
          <article className="services services--background">
            <div className="services__section services__section--background">
              <h2 className="text text--graphic-design text--title services__section--background__title">Graphic Design</h2>
              <p className="text text--graphic-design services__section--background__text">
                Great design makes you memorable. We deliver artwork that underscores
                your brand message and captures potential clients&apos; attetion.
              </p>
            </div>
            <div className="services__section services__section--background">
              <h2 className="text text--photography text--title services__section--background__title">Photography</h2>
              <p className="text text--photography services__section--background__text">
                Increase ypur credibility by getting the most stunning, high-quality photos that improve your business image.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
