function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
