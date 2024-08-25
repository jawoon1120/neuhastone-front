import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@app/App.css'
import LoginPage from '@pages/login'
import SignupPage from '@pages/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/" element={
          <>
            <h1>Vite + React</h1>
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
