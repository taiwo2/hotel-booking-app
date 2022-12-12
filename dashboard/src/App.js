import { useContext } from "react";
import {BrowserRouter, Navigate, Route,Routes} from "react-router-dom"
import Home from './pages/Home/home';
import List from './pages/List/list';
import Single from "./pages/Single/single";
import New from './pages/New/new'
import "./darkstyle/dark.scss"
import { userInputs} from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login/Login"
import NewRoom from "./pages/newRoom/newRoom"
import { userColumns, hotelsColumns, roomsColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/newHotel";
function App() {
  const {darkMode} = useContext(DarkModeContext)

  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext)

    if (!user) {
      return <Navigate to="/login" />
    }
    return children
  }
  return (
    <div className={darkMode ? "app dark": "app"}>
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route index element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
          } />
          
          <Route path="user" > 
            <Route index element={
            <ProtectedRoute>
              <List column={userColumns}/>
          </ProtectedRoute>
            } />
            <Route path=":userId" element={
            <ProtectedRoute>
              <Single />
          </ProtectedRoute>
            } />
            <Route path="new" element={
              <ProtectedRoute>
                <New inputs={userInputs} title="Add New User" />
              </ProtectedRoute>
              } 
            />
          </Route>
          <Route path="hotels" > 
            <Route index element={
              <ProtectedRoute>
                <List column={hotelsColumns}/>
              </ProtectedRoute>
              } />
            <Route path=":proudctsId" element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
              } />
            <Route path="new" element={
            <ProtectedRoute>
              <NewHotel />
            </ProtectedRoute>
              } />
          </Route>
          <Route path="rooms" > 
            <Route index element={
              <ProtectedRoute>
                <List column={roomsColumns}/>
              </ProtectedRoute>
              } />
            <Route path=":proudctsId" element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
              } />
            <Route path="new" element={
            <ProtectedRoute>
              <NewRoom />
            </ProtectedRoute>
              } />
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
