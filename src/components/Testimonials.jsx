
import '../styles/Testimonials.css';

const testimonials = [
  { name: 'Sam Wilson, Canbury Partners', quote: 'Instantly is hands down my favourite tool.' },
  { name: 'Tony Liu, Omnichannel', quote: 'Easiest and most user-friendly interface.' },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Users Say</h2>
    <div className="testimonials-list">
      {testimonials.map((t, i) => (
        <blockquote key={i}>
          “{t.quote}” — <strong>{t.name}</strong>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;
