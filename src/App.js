import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Banner from './common/Banner';
import MainList from './common/MainList';
import Card from './common/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <MainList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
