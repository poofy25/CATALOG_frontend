import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom'


import AdminPage from './pages/admin/AdminPage'
import AdminEditPage from './pages/admin/AdminEditPage'

import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='app'>
        <BrowserRouter>
        <div className="pages">
          <Routes>

            <Route path="/" element={<HomePage/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/admin/login" element={''} />
            <Route path="/admin/edit" element={<AdminEditPage/>} />
            <Route path="/admin/orders" element={''} />
            <Route path="/admin/statistics" element={''} />
    
          </Routes>
        </div>
        </BrowserRouter>
      </div>
  )
}

export default App
