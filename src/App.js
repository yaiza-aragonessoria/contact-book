import './App.css';
import ContactBook from './components/ContactBook/contact-book.js';
import AddContact from './components/AddContact/add-contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Luigi's friends
        </h1>
      </header>
      <main>
        <ContactBook/>
      </main>
    </div>
  );
}

export default App;
