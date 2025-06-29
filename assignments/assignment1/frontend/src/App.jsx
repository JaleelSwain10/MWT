import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Overview from './components/Overview.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

const SERVER_URL = "http://localhost:8000";

function App() {
  const [overview, setOverview] = useState(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/getOverview`)
      .then((res) => res.json())
      .then(setOverview)
      .catch(console.error);

    fetch(`${SERVER_URL}/getEdu`)
      .then((res) => res.json())
      .then(setEducation)
      .catch(console.error);

    fetch(`${SERVER_URL}/getExp`)
      .then((res) => res.json())
      .then(setExperience)
      .catch(console.error);
  }, []);

  return (
    <Container style={{ padding: '15px 10px', maxWidth: '800px' }}>
      {overview && <Overview data={overview} />}
      <Education data={education} />
      <Experience data={experience} />
    </Container>
  );
}

export default App;
