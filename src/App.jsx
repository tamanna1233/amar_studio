import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App = () => {
  return (
    <div className="bg-black-rich min-h-screen flex flex-col font-body text-gray-light selection:bg-gold selection:text-black">
      {/* Global SEO defaults - can be overridden by individual pages */}
       <SEO />
       
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer/>
    </div>
  );
};

export default App;
