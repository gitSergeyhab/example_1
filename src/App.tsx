import { BrowserRouter, Link, Route, Routes } from 'react-router';
import './App.css';
import { TariffBlock } from './modules/tariffs/TariffBlock';
import 'antd/dist/reset.css';

import '@/styles/globalStyles.scss';
import { Clients } from './modules/clients/Clients';
import { Forms } from './modules/forms/Forms';
import { ExpandableTable } from './modules/expandableTable/ExpandableTable';
import { Graphics } from './modules/graphics/Graphics.tsX';

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
            <li>
              <Link to="/ExpandableTable">ExpandableTable</Link>
            </li>
            <li>
              <Link to="/graph">graph</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TariffBlock />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/ExpandableTable" element={<ExpandableTable />} />
          <Route path="/graph" element={<Graphics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
