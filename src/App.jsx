import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import Shengen from "./Pages/Shengen/Shengen"
import AQSH from "./Pages/AQSH/AQSH"
import Yaponiya from "./Pages/Yaponiya/Yaponiya"
import Xitoy from "./Pages/Xitoy/XItoy"
import Kanada from "./Pages/Kanada/Kanada"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shengen />} />
          <Route path="aqsh" element={<AQSH />} />
          <Route path="xitoy" element={<Xitoy />} />
          <Route path="yaponiya" element={<Yaponiya />} />
          <Route path="kanada" element={<Kanada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App