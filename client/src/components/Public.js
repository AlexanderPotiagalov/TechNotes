import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">TechNotes!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          TechNotes is a free service that allows you to keep track of your
          day-to-day responsibilites. You can create, read, update, and delete
          your notes, and even share them with others. Whether you're a student,
          teacher, or just someone who likes to stay organized, TechNotes is
          here to help you manage your tasks and ideas efficiently.
        </p>
        <address className="public__addr">
          SFU
          <br />
          8888 University Dr
          <br />
          Burnaby BC V5A 1S6
          <br />
          <a href="tel:+15555555555">(778) 782-3111</a>
        </address>
        <br />
        <p>Owner: Alexander Potiagalov</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
