"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CourseRecommendation = () => {
  const [jobTitles, setJobTitles] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [skill, setSkill] = useState('');
  const [recommendedLink, setRecommendedLink] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [displayedSkill, setDisplayedSkill] = useState('');
  const [userName, setUserName] = useState(''); 
  const router = useRouter();

  useEffect(() => {
    const fetchJobTitles = async () => {
      try {
        const response = await fetch('https://aic-klm-2024.df.r.appspot.com/title');
        const data = await response.json();
        setJobTitles(data.titles);
      } catch (err) {
        setError('Failed to fetch job titles');
      }
    };

    fetchJobTitles();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      if (selectedJobTitle) {
        try {
          const response = await fetch(`https://aic-klm-2024.df.r.appspot.com/role?title=${selectedJobTitle}`);
          const data = await response.json();
          setRoles(data.roles);
        } catch (err) {
          setError('Failed to fetch roles');
        }
      }
    };

    fetchRoles();
  }, [selectedJobTitle]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://aic-klm-2024.df.r.appspot.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: selectedRole }),
      });

      const data = await response.json();

      if (response.ok) {
        setSkill(data.skill);
        setRecommendedLink(data.recommended_courses);
        setError(null);
        setIsSubmitted(true);
      } else {
        setError(data.error || 'Wait A Sec');
      }
    } catch (err) {
      setError('Wait A Sec');
    }
  };

  useEffect(() => {
    if (isSubmitted && skill) {
      let currentIndex = -1;
      const typingInterval = setInterval(() => {
        if (currentIndex < skill.length - 1) {
          setDisplayedSkill((prev) => prev + skill[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isSubmitted, skill]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 px-4">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Course Recommendation</h1>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user-name" className="block text-lg font-semibold mb-2">Your Name:</label>
              <input
                id="user-name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="job-title" className="block text-lg font-semibold mb-2">Current Job Title:</label>
              <select
                id="job-title"
                value={selectedJobTitle}
                onChange={(e) => setSelectedJobTitle(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select a job title</option>
                {jobTitles.map((title) => (
                  <option key={title} value={title}>{title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="role" className="block text-lg font-semibold mb-2">Role:</label>
              <select
                id="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select a role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-md text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Recommendation
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg mb-4">
              Halo, <strong>{userName}</strong>! Your recommended skill is: <strong>{displayedSkill}</strong>
              <br />
              <a href={recommendedLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Course Recomendation
              </a>
            </p>
            <button
              onClick={() => { 
                setIsSubmitted(false); 
                setDisplayedSkill('');
                setUserName('');
                setSelectedJobTitle(''); 
                setSelectedRole(''); 
                setRecommendedLink(''); 
              }}
              className="w-full bg-gray-600 py-3 rounded-md text-white font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Make Another Recommendation
            </button>
          </div>
        )}

        {error && (
          <div className="mt-6 text-red-400 text-center">
            <p className="text-lg">Wait a Sec</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseRecommendation;