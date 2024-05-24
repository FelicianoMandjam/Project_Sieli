
// Pour la gestion de mes routes
// La dependance que me permet mettre en place mes routes
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// J'importe les pages 
import Home from './pages/home/home';
import Contact from './pages/contact/contact';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Layout 
import Layout from './componants/layout'

function App() {
  
  return (
    <BrowserRouter>
        <Layout>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App


// Une page d'accueil attractive.
// Une page produit pour présenter ton e-book.
// Un système de panier et de paiement sécurisé.
// Un espace utilisateur pour gérer les comptes et les achats.