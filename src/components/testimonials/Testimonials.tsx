import React from 'react';
import emily from '../../assets/images/image-emily.jpg';
import thomas from '../../assets/images/image-thomas.jpg';
import jennie from '../../assets/images/image-jennie.jpg';

import Client from './Client';

export default function Testimonials () {
  return (
    <aside className="testimonials">
      <h2 className="testimonials__title text text--title text--center">Client testimonials</h2>
      <section className="testimonials__grid">
        <Client
          img={emily}
          name="Emily R."
          description="We put out trust in Sunnyside and they delivered, making sure out needs were met and deadlines were always hit."
          position="Marketing Director"
        />
        <Client
          img={thomas}
          name="Thomas S."
          description="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          position="Chief Operating Officer"
        />
        <Client
          img={jennie}
          name="Jennie F."
          description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          position="Business Owner"
        />

      </section>
    </aside>
  );
}
