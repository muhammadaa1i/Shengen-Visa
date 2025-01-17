import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import Shengen from "./Pages/Shengen/Shengen"
import AQSH from "./Pages/AQSH/AQSH"
import Britaniya from "./Pages/Britaniya/Britaniya"
import Yaponiya from "./Pages/Yaponiya/Yaponiya"
import Avstralia from "./Pages/Avstralia/Avstralia"
import Hindiston from "./Pages/Hindiston/Hindiston"
import Koreya from "./Pages/Koreya/Koreya"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shengen />} />
          <Route path="aqsh" element={<AQSH />} />
          <Route path="britaniya" element={<Britaniya />} />
          <Route path="yaponiya" element={<Yaponiya />} />
          <Route path="avstraliya" element={<Avstralia />} />
          <Route path="hindiston" element={<Hindiston />} />
          <Route path="koreya" element={<Koreya />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App