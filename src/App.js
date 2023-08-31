import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm.js';
import AboutMe from './components/AboutMe';

function App() {
  // Makes the default state be the About Me page
  const [page, setPage] = useState('About me');

  return (
    <div className="bucket-app">
      <Header page={page} setPage={setPage} />
      {(page == 'About me') ? (<AboutMe />): 
      (page == 'Portfolio') ? (<ul>
        <li><Project img={imgtemp} title={temptitle} deployedLink={templink} githubLink={'https://github.com/stevenarroyave8/interactive-front-end-application'} /></li>
        <li><Project img={imgtemp} title={temptitle} deployedLink={templink} githubLink={'https://github.com/andreaber23/Budgify'} /></li>
        <li><Project img={imgtemp} title={temptitle} deployedLink={templink} githubLink={templink} /></li>
      </ul>):
      (page == 'Contact') ? (<ContactForm />):
      (<a src='https://drive.google.com/file/d/1P_AgGf_ZKVFAAivjC_0nXa2k-8BmMT84/view?usp=sharing'>Resume Link</a>)}
      <Footer />
    </div>
  );
}

export default App;
