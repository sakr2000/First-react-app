// script.js

function Header() {
  return (
    <header>
      <nav>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="react logo"
        />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main className="mainContainer">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        <small>&copy;2024 developed by M.Sakr. All rights reserved.</small>
      </p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function WhyLearnReact() {
  return (
    <ul>
      <li>React makes it painless to create interactive UIs</li>
      <li>
        React can be used as base in creating single-page apps or mobile apps
      </li>
      <li>
        It is used by Facebook and a community of individual developers and
        corporations
      </li>
      <li>It is free and open source</li>
      <li>It is easy to learn</li>
      <li>It is well documented</li>
    </ul>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
