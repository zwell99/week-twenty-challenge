import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

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
      (page == 'Contact me') ? (<ul>
        <li>Email: zachwellens990@gmail.com</li>
        <li>Phone: 815-243-2001</li>
      </ul>):
      (<p> ipsum lorem </p>)}
      <Footer />
    </div>
  );
}

export default App;
