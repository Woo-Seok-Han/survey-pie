import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/surveys/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
        <Route path="/surveys/done" element={<CompletionPage />} />
      </Routes>
    </div>
  );
}

export default App;
