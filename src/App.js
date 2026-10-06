import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaHeart,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaUsers,
} from "react-icons/fa";
import Background from "./components/Background";
import Slideshow from "./components/Slideshow";
import image1 from "./assets/IMG-20230811-WA0004.jpg";
import image2 from "./assets/IMG-20230811-WA0006.jpg";
import image3 from "./assets/IMG-20230811-WA0008.jpg";
import image4 from "./assets/IMG-20230811-WA0011.jpg";
import image5 from "./assets/IMG-20230811-WA0014.jpg";
import mainImage from "./assets/main.jpg";

const slides = [
  {
    image: image1,
    alt: "Students learning together in class",
    title: "Welcome to Trinity Christian Mission School",
    description:
      "A caring place where every child is encouraged to learn and thrive.",
  },
  {
    image: image2,
    alt: "A student taking part in classroom activities",
    title: "Learning with purpose",
    description:
      "Building confidence, curiosity, and a love of learning every day.",
  },
  {
    image: image3,
    alt: "School children smiling together",
    title: "A community that cares",
    description: "Growing in character, friendship, and a sense of belonging.",
  },
  {
    image: mainImage,
    alt: "Classroom at Trinity Christian Mission School",
    title: "Room to discover",
    description:
      "Supporting children as they explore their strengths and potential.",
  },
  {
    image: image5,
    alt: "Children enjoying time together at school",
    title: "Every child matters",
    description:
      "A welcoming school community for children and their families.",
  },
  {
    image: image4,
    alt: "Students working together on a school activity",
    title: "A bright future starts here",
    description: "Learning, growing, and making a difference together.",
  },
];

const navItems = [
  ["Our school", "#about-school"],
  ["Learning", "#programs"],
  ["School life", "#school-life"],
  ["Find us", "#school-location"],
  ["Contact", "#contact"],
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeNav = () => setIsOpen(false);

  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <a className="site-brand" href="#top" onClick={closeNav}>
        <span className="site-brand-mark" aria-hidden="true">
          <FaGraduationCap />
        </span>
        <span className="site-brand-copy">
          <strong>Trinity Christian</strong>
          <small>Mission School · Nsoatre</small>
        </span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="site-navigation-links"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <FaTimes aria-hidden="true" />
        ) : (
          <FaBars aria-hidden="true" />
        )}
      </button>
      <div
        className={`nav-links${isOpen ? " nav-links-open" : ""}`}
        id="site-navigation-links"
      >
        {navItems.map(([label, href]) => (
          <a className="nav-link" href={href} key={href} onClick={closeNav}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeNav}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Background />
          <div className="hero-content">
            <p className="eyebrow">
              Trinity Christian Mission School · Nsoatre
            </p>
            <h1 id="hero-title">
              A place to learn, grow, and make a difference.
            </h1>
            <p className="hero-description">
              A caring, Christ-centred community helping every child build a
              bright future.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about-school">
                Discover our school
              </a>
              <a className="button button-outline" href="#contact">
                Contact the school
              </a>
            </div>
            <a className="hero-scroll" href="#school-intro">
              Explore below <FaArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="school-details"
          id="school-intro"
          aria-label="School information"
        >
          <article className="detail-item">
            <span className="detail-icon" aria-hidden="true">
              <FaMapMarkerAlt />
            </span>
            <div>
              <h2>Rooted in Nsoatre</h2>
              <p>Behind Power Filling Station · Bono, Ghana</p>
              <a href="#school-location">View our location</a>
            </div>
          </article>
          <article className="detail-item">
            <span className="detail-icon" aria-hidden="true">
              <FaCalendarAlt />
            </span>
            <div>
              <h2>Growing together</h2>
              <p>
                {new Date().getFullYear()} / {new Date().getFullYear() + 1}{" "}
                Academic Year
              </p>
            </div>
          </article>
        </section>

        <section
          className="highlights section-wrap"
          aria-labelledby="highlights-title"
        >
          <header className="section-heading">
            <p className="eyebrow eyebrow-dark">
              A school community that cares
            </p>
            <h2 id="highlights-title">Growing brighter, together</h2>
            <p>
              A welcoming place where learning, faith, and each child’s
              potential matter.
            </p>
          </header>
          <div className="highlight-grid">
            <a className="highlight-card" href="#programs">
              <span className="highlight-icon" aria-hidden="true">
                <FaBookOpen />
              </span>
              <h3>Learning with purpose</h3>
              <p>Building knowledge, curiosity, and confidence every day.</p>
            </a>
            <a className="highlight-card" href="#mission">
              <span className="highlight-icon" aria-hidden="true">
                <FaHeart />
              </span>
              <h3>Character and care</h3>
              <p>
                Nurturing kindness, strong values, and a sense of belonging.
              </p>
            </a>
            <a className="highlight-card" href="#parent-involvement">
              <span className="highlight-icon" aria-hidden="true">
                <FaUsers />
              </span>
              <h3>Growing together</h3>
              <p>
                Working with families and community to help children thrive.
              </p>
            </a>
          </div>
        </section>

        <section className="gallery-section" id="school-life">
          <header className="section-heading">
            <p className="eyebrow eyebrow-dark">Life at Trinity</p>
            <h2>Our school community</h2>
          </header>
          <Slideshow slides={slides} />
        </section>

        <section className="school-content section-wrap" id="about-school">
          <header className="section-heading">
            <p className="eyebrow eyebrow-dark">Learning with purpose</p>
            <h2>Impacting spirit, soul &amp; body</h2>
            <p>
              Discover the values and community at the heart of Trinity
              Christian Mission School.
            </p>
          </header>
          <div className="content-grid">
            <article className="content-card contact-card">
              <h3>About Trinity Christian School</h3>
              <p>
                At Trinity Christian School, we believe in fostering a nurturing
                and inclusive learning environment where every child’s potential
                is recognized and celebrated. With a dedicated team of
                experienced educators and a curriculum designed to encourage
                curiosity and creativity, we strive to make learning an
                enjoyable and enriching experience for all our students.
              </p>
            </article>
            <article className="content-card" id="vision">
              <h3>Our vision</h3>
              <p>To make Christ known through high educational standards.</p>
            </article>
            <article className="content-card" id="mission">
              <h3>Our mission</h3>
              <p>
                Providing a Christ-centred curriculum that nurtures excellence
                through a holistic approach to every student’s spirit, soul, and
                body.
              </p>
            </article>
            <article className="content-card values-card">
              <h3>Why choose Trinity?</h3>
              <p>
                Education is about more than the classroom. We help children:
              </p>
              <ul>
                <li>Learn with experienced, passionate educators.</li>
                <li>
                  Discover individual talents through a balanced curriculum.
                </li>
                <li>Grow in a safe, supportive school environment.</li>
                <li>Build confidence through activities and teamwork.</li>
                <li>Connect with families and the wider community.</li>
              </ul>
            </article>
            <article className="content-card programs-card" id="programs">
              <h3>Our programs</h3>
              <ul>
                <li>
                  <strong>Academic excellence:</strong> Learning that challenges
                  and inspires students across core subjects.
                </li>
                <li>
                  <strong>Creative arts:</strong> Opportunities to explore art,
                  music, drama, and self-expression.
                </li>
                <li>
                  <strong>Physical education:</strong> Building healthy habits,
                  teamwork, and sportsmanship.
                </li>
                <li>
                  <strong>Character development:</strong> Nurturing moral
                  values, empathy, and responsibility.
                </li>
              </ul>
            </article>
            <article className="content-card" id="parent-involvement">
              <h3>Families and community</h3>
              <p>
                We value the partnership between home and school. Parents are
                invited to take part in school events, workshops, and activities
                that enrich learning for students and families.
              </p>
              <p>
                Through community outreach, we also help students understand
                compassion, empathy, and social responsibility.
              </p>
            </article>
          </div>
        </section>

        <section className="location-section section-wrap" id="school-location">
          <div className="location-copy">
            <p className="eyebrow eyebrow-dark">Come and see</p>
            <h2>Find us in Nsoatre</h2>
            <p>Visit Trinity Christian Mission School in Bono, Ghana.</p>
            <a
              className="button button-primary"
              href="https://www.google.com/maps/search/?api=1&query=Trinity+Christian+Mission+School%2C+Nsoatre%2C+Bono%2C+Ghana"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Trinity+Christian+Mission+School,+Nsoatre,+Bono,+Ghana&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Trinity Christian Mission School in Nsoatre"
          />
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Your child’s next chapter starts here</p>
          <h2>Let’s help every child flourish.</h2>
          <p>
            Have questions or want to know more? Get in touch or visit our
            school in Nsoatre.
          </p>
          <address>
            Trinity Christian School
            <br />
            P.O. Box 229, Nsoatre, Bono, Ghana
            <br />
            <a href="tel:+233247995835">+233 24 799 5835</a>
            {" · "}
            <a href="tel:+233249298640">+233 24 929 8640</a>
            <br />
            <a href="mailto:trinitychristianschoolnsoatre@gmail.com">
              trinitychristianschoolnsoatre@gmail.com
            </a>
          </address>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:trinitychristianschoolnsoatre@gmail.com"
            >
              Email the school
            </a>
            <a className="button button-outline" href="tel:+233247995835">
              Call the school
            </a>
          </div>
          <small>
            © {new Date().getFullYear()} Trinity Christian School
          </small>
        </section>
      </main>
    </>
  );
}

export default App;
