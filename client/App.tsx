import { BrowserRouter, Routes, Route } from "react-router-dom";

const SimpleTest = () => (
  <div className="min-h-screen bg-blue-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-blue-900">W3Leads Test - Loading...</h1>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<SimpleTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
