import { BrowserRouter, Link, Route, Routes } from 'react-router';
import './App.css';
import { TariffBlock } from './modules/tariffs/TariffBlock';
import 'antd/dist/reset.css';

import '@/styles/globalStyles.scss';
import { Clients } from './modules/clients/Clients';
import { Forms } from './modules/forms/Forms';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Тарифы</Link>
            </li>
            <li>
              <Link to="/clients">Клиенты</Link>
            </li>
            <li>
              <Link to="/forms">Формы</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TariffBlock />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
