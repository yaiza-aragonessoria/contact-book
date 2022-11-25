import './App.css';
import ContactBook from './components/ContactBook/contact-book.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Luigi's contact book
        </h1>
      </header>
      <main>
        <ContactBook/>
      </main>
    </div>
  );
}

export default App;
