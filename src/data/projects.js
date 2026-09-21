import tradingChartImg from '../assets/images/trading_chart.jpg';
import healthcareImg from '../assets/images/healthcare_system.jpg';
import jobPortalImg from '../assets/images/job_portal.jpg';

export const projects = [
  {
    id: 1,
    title: 'Real-Time Trading Chart',
    image: tradingChartImg,
    description: 'Built a TradingView-style cryptocurrency chart using React.js and Lightweight Charts with real-time WebSocket data, multi-timeframes, and technical indicators (EMA, RSI, MACD, Bollinger Bands).',
    technologies: ['React.js', 'Lightweight Charts', 'WebSocket', 'REST API'],
    githubUrl: 'https://github.com/goku2422',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Smart Healthcare System',
    image: healthcareImg,
    description: 'Developed a full-stack healthcare application with role-based authentication and authorization. Built REST APIs for users, doctors, appointments, and healthcare data.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/goku2422',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Job Portal — Full Stack App',
    image: jobPortalImg,
    description: 'A MERN-based job portal for job seekers and recruiters featuring role-based access, job posting, search/filtering, and recruiter workflows.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/goku2422',
    liveUrl: '#',
  },
];
