import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Navigation } from './components/Navigation';
import { ProjectsPage } from './pages/ProjectsPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-screen-xl mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
