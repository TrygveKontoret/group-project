import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import { AuthProvider} from './context/AuthContext';


function App() {
  return (
    <AuthProvider>  
    <Router>
      <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='admin' element={<Admin />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Routes>
      </div>
    </Router>
    </AuthProvider>

  );
};

export default App;
