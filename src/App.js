import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm.js';

function App() {
  // Makes the default state be the protfolio
  const [page, setPage] = useState('Portfolio');

  return (
    <div className="bucket-app">
      <Header page={page} setPage={setPage} />
      {(page == 'About me') ? (<p> ipsum lorem </p>): 
      (page == 'Portfolio') ? (<ul>
        <li><Project img={imgtemp} title={temptitle} deployedLink={templink} githubLink={templink} /></li>
        <li><Project img={imgtemp} title={temptitle} deployedLink={templink} githubLink={templink} /></li>
        <li><Project img={imgtemp} title={temptitle} deployedLink={templink} githubLink={templink} /></li>
      </ul>):
      (page == 'Contact me') ? (<ContactForm />):
      (<p> ipsum lorem </p>)}
      <Footer />
    </div>
  );
}

export default App;
