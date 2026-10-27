import React from "react";

export default function AboutUs() {
  return (
    <section className="about-us-container" aria-labelledby="about-us-title">
      <div className="about-copy">
        <p className="eyebrow">A little more green, every day</p>
        <h2 id="about-us-title">About Paradise Nursery</h2>
        <p>
          Paradise Nursery helps plant lovers bring nature indoors with a thoughtful
          collection of beautiful, easy-to-love houseplants. We make it simple to
          discover the right plant for your space, style, and routine.
        </p>
        <p>
          From leafy statement plants to compact desk companions, our goal is to
          make caring for plants welcoming, inspiring, and accessible.
        </p>
      </div>
      <div className="about-highlight">
        <span className="about-leaf" aria-hidden="true">🌿</span>
        <strong>Grow a happier space.</strong>
        <span>Find your next favourite plant.</span>
      </div>
    </section>
  );
}
