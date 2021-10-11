import React from 'react';
import Feature from './Feature';
import egg from '../../assets/images/desktop/image-transform.jpg';
import standout from '../../assets/images/desktop/image-stand-out.jpg';

export default function Features () {
  return (
    <main className="main">
      <section className="section">
        <Feature
          title="Transform your brand"
          description="We are a full-service creative agency sepecializing in helping brand grow fast.
            Engage your client through compelling visuals that do most of the marketing for you."
          img={egg}
        />
        <Feature
          title="Stand out to the right audienced"
          description="Using a collaborative formular of designers, researchers, photographers, videographers, and copywriters,
          we will build and extend your brand in digital places."
          img={standout}
          reverse
        />
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
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
