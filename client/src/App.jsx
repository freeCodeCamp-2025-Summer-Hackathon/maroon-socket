import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';

const App = () => {

  return (
    <div >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;

