function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuotes] = React.useState([]);
  const [color, setColor] = React.useState("#fff");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDB99",
      "#77B1A9",
      "#73A857",
    ];

    let randIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuotes(quotes[randIndex]);
    setColor(colors[randColorIndex]);
  };
  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }} id="quote-box">
      <div className="container pt-5">
        <div class="jumbotron">
          <div class="card">
            <div class="card-header">Inspirational Quotes</div>
            <div class="card-body">
              {randomQuote ? (
                <>
                  <h5 id="author" class="card-title">
                    -{randomQuote.author || "No author"}
                  </h5>
                  <p id="text" class="card-text">
                    &quot;{randomQuote.text}&quot;
                  </p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div class="row">
                <button
                  id="new-quote"
                  onClick={getNewQuote}
                  className="btn btn-primary ml-3"
                >
                  New Quote
                </button>
                <a
                  id="tweet-quote"
                  href="twitter.com/intent/tweet"
                  target="_blank"
                  className="btn btn-warning"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="" className="btn btn-danger">
                  <i class="fab fa-tumblr"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
