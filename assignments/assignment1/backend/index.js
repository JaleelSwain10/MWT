const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

const overview = {
  name: "Jaleel Swain",
  title: "Aspiring Software Developer",
  summary:
    "Passionate about software development."
};

const education = [
  {
    school: "Humber Polytechnic",
    degree: "Advanced Diploma in Computer Programming and Analysis",
    years: "2024 - 2027"
  },
  {
    school: "Tunapuna Secondary School",
    degree: "High School Diploma",
    years: "2017 - 2022"
  }
];

const experience = [
  {
    company: "No professional experience yet",
    role: "Aspiring Developer",
    duration: "Present",
    description: "Eager to gain real-world experience and apply programming skills through personal projects and internships."
  }
];


app.get('/getOverview', (req, res) => {
  res.json(overview);
});

app.get('/getEdu', (req, res) => {
  res.json(education);
});

app.get('/getExp', (req, res) => {
  res.json(experience);
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
