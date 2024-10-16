import {BrowserRouter, Routes, Route, useParams, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import AdminList from './pages/AdminList';
import AdminRegister from './pages/AdminRegister';
import ClothingBinRegister from './pages/ClothingBinRegister';
import SearchHistory from './pages/SearchHistory';
import UserList from './pages/UserList';
import UserRegister from './pages/UserRegister';
import MapPage from './pages/MapPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

function OAuth2() {
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=> {
    localStorage.setItem("id", id);
    navigate("/");
  }, []);
  return (
    <></>
  );
}

function App() {
  const [state, setState] = useState(null);
  const logoutEvent = e => {
    e.preventDefault();
    localStorage.removeItem("id");
    window.location.reload();
  }
  useEffect(()=>{
    setState(localStorage.getItem("id"));
  }, []);
  return (
    <>
      <div className="header">
          <div>
            <a href="/">SUNWOO</a>
          </div>
          <div>
            {
            state == null ?
              <a href={process.env.REACT_APP_BACK_HOST + "/oauth2/login/kakao"}>로그인</a>
              :
              <a href="#" onClick={logoutEvent}>로그아웃</a>
            }
          </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/map/:id" element={<MapPage />}/>
          <Route path="/oauth2/:id" element={<OAuth2 />}/>

          {/* <Route path="/admin/list" element={<AdminList />}/>
          <Route path="/admin/register" element={<AdminRegister />}/>
          <Route path="/clothing/bin/register" element={<ClothingBinRegister />}/>
          <Route path="/search/history" element={<SearchHistory />}/>
          <Route path="/user/list" element={<UserList />}/>
          <Route path="/user/register" element={<UserRegister />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
