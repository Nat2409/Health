import './App.css';
import Layout from './components/Layout/Layout';
import Registration from './components/Login/Registration';
import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import Diary from './components/Diary/Diary';
import { Route, Routes } from 'react-router-dom';
import Enter from './components/Login/Enter';
import UserMenu from './components/UserMenu/UserMenu';
import UserModal from './components/UserModal/UserModal';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                tittle={'Просчитай свою суточную норму калорий прямо сейчас'}
                button_tittle={'Посчитать'}
              />
            }
          />
          <Route path="/enter" element={<Enter />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/" element={<UserMenu />}></Route>
          <Route path="/user" element={<UserModal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
