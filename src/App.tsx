import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { JobDetailPage } from './pages/job/JobDetailPage';
import { JobsPage } from './pages/jobs/JobsPage';
import { LoginPage } from './pages/login/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/jobs" Component={JobsPage} />
        <Route path="/jobs/:id" Component={JobDetailPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
