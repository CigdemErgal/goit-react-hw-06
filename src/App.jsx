import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <main className="page">
      <section className="panel">
        <h1 className="title">Phonebook</h1>
        <p className="subtitle">Add, search, and manage your contacts.</p>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </section>
    </main>
  );
}

export default App;
