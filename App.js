import React, { useState, useEffect } from 'react';
import { Search, Home, BookOpen, GraduationCap, Users, Info, Menu, X, ArrowRight, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle navigation
  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Custom CSS for the glass effect
  const glassEffectStyle = {
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)', // For Safari compatibility
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent white
    border: '1px solid rgba(255, 255, 255, 0.3)',
  };

  // Content for different sections (can be fetched dynamically in a real app)
  const sections = {
    home: {
      title: 'Welcome to CUETpedia!',
      content: (
        <>
          {/* Hero Section */}
          <div className="relative text-center py-16 md:py-24 rounded-3xl mb-12 overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(100, 150, 250, 0.8), rgba(150, 200, 255, 0.8))',
                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                 ...glassEffectStyle
               }}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
              Your Gateway to Top Universities
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Comprehensive resources and expert guidance for the Common University Entrance Test.
            </p>
            <button
              onClick={() => navigateTo('syllabus')}
              className="inline-flex items-center px-8 md:px-10 py-2.5 bg-white text-blue-700 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group"
            >
              Explore Syllabus <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Key Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <BookOpen size={50} md:size={60} className="text-blue-600 mb-4 group-hover:text-blue-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">In-depth Syllabus</h3>
              <p className="text-base md:text-lg text-gray-700">Access detailed and up-to-date syllabus for all CUET subjects.</p>
              <button onClick={() => navigateTo('syllabus')} className="mt-4 inline-flex items-center px-5 py-1.5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
                Learn More <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <GraduationCap size={50} md:size={60} className="text-green-600 mb-4 group-hover:text-green-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">University Insights</h3>
              <p className="text-base md:text-lg text-gray-700">Discover participating universities, courses, and admission criteria.</p>
              <button onClick={() => navigateTo('universities')} className="mt-4 inline-flex items-center px-5 py-1.5 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-300 transform hover:scale-105">
                View Universities <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <Users size={50} md:size={60} className="text-purple-600 mb-4 group-hover:text-purple-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Community Support</h3>
              <p className="text-base md:text-lg text-gray-700">Connect with peers and mentors in our vibrant student community.</p>
              <button onClick={() => navigateTo('contact')} className="mt-4 inline-flex items-center px-5 py-1.5 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105">
                Join Community <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>

          {/* Why Choose CUETpedia Section */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-12" style={glassEffectStyle}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 md:mb-10">Why Choose CUETpedia?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="flex items-start">
                <CheckCircle size={32} md:size={40} className="text-teal-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Curated Content</h4>
                  <p className="text-base md:text-lg text-gray-700">Our experts meticulously curate study materials, ensuring accuracy and relevance to the CUET exam pattern.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb size={32} md:size={40} className="text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Strategic Preparation</h4>
                  <p className="text-base md:text-lg text-gray-700">Gain access to proven strategies, tips, and tricks to maximize your scores and ace the examination.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp size={32} md:size={40} className="text-red-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Success-Oriented Approach</h4>
                  <p className="text-base md:text-lg text-gray-700">We are committed to your success, providing continuous support and updates to help you achieve your university dreams.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Info size={32} md:size={40} className="text-indigo-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Always Updated</h4>
                  <p className="text-base md:text-lg text-gray-700">Stay informed with the latest notifications, exam dates, and syllabus changes directly from official sources.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    syllabus: {
      title: 'CUET Syllabus',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">The CUET (UG) 2024 will be conducted for 61 subjects. Students can choose up to 10 subjects from these.</p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">General Test Syllabus</h3>
          <ul className="list-disc list-inside mb-6 pl-4 text-gray-700 text-base md:text-lg">
            <li>General Knowledge & Current Affairs</li>
            <li>General Mental Ability & Numerical Ability</li>
            <li>Reasoning (Simple application of basic mathematical concepts arithmetic/algebra geometry/mensuration/statistics)</li>
            <li>Logical & Analytical Reasoning</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">Domain-Specific Subjects</h3>
          <p className="mb-6 text-gray-700 text-base md:text-lg">Each domain-specific subject will have a syllabus based on the NCERT Class XII curriculum. Examples include:</p>
          <ul className="list-disc list-inside pl-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-base md:text-lg">
            <li>Accountancy/Book Keeping</li>
            <li>Biology/Biological Studies/Biotechnology/Biochemistry</li>
            <li>Business Studies</li>
            <li>Chemistry</li>
            <li>Computer Science/Informatics Practices</li>
            <li>Economics/Business Economics</li>
            <li>Geography/Physical Geography/Geology</li>
            <li>History</li>
            <li>Home Science</li>
            <li>Legal Studies</li>
            <li>Mathematics/Applied Mathematics</li>
            <li>Physics</li>
            <li>Political Science</li>
            <li>Psychology</li>
            <li>Sociology</li>
            <li>Teaching Aptitude</li>
            <li>Agriculture</li>
            <li>Mass Media/Mass Communication</li>
            <li>Anthropology</li>
            <li>Fine Arts/Visual Arts (Sculpture/Painting)/Commercial Arts</li>
            <li>General AWARENESS</li>
            <li>Knowledge Tradition-Practices India</li>
            <li>Physical Education/NCC/Yoga</li>
            <li>Environmental Studies</li>
            <li>Performing Arts (Dance/Drama/Music)</li>
            <li>Sanskrit</li>
          </ul>
          <p className="mt-8 text-sm md:text-base text-gray-600">For detailed subject-wise syllabus, please refer to the official CUET website.</p>
        </>
      ),
    },
    universities: {
      title: 'Participating Universities',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">CUET is accepted by a wide range of Central, State, Deemed, and Private Universities across India.</p>
          <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">Central Universities (Examples):</h3>
          <ul className="list-disc list-inside mb-6 pl-4 text-gray-700 text-base md:text-lg">
            <li>University of Delhi (DU)</li>
            <li>Banaras Hindu University (BHU)</li>
            <li>Jawaharlal Nehru University (JNU)</li>
            <li>Aligarh Muslim University (AMU)</li>
            <li>Jamia Millia Islamia (JMI)</li>
            <li>University of Allahabad</li>
            <li>Visva-Bharati University</li>
            <li>Pondicherry University</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-4">State/Private/Deemed Universities:</h3>
          <p className="mb-6 text-gray-700 text-base md:text-lg">Many other universities also accept CUET scores. It's crucial to check the specific eligibility criteria and admission process for each university you are interested in.</p>
          <p className="text-sm md:text-base text-gray-600">A complete list of participating universities and their programs is available on the official CUET (NTA) portal.</p>
        </>
      ),
    },
    contact: {
      title: 'Contact Us',
      content: (
        <>
          <p className="text-base md:text-lg mb-6 text-gray-700">Have questions or need assistance? Feel free to reach out to us!</p>
          <div className="p-6 md:p-8 rounded-3xl shadow-xl" style={glassEffectStyle}>
            <p className="mb-4 text-gray-800 text-base md:text-lg"><strong>Email:</strong> support@cuetpedia.com</p>
            <p className="mb-4 text-gray-800 text-base md:text-lg"><strong>Phone:</strong> +91-1234567890</p>
            <p className="mb-6 text-gray-800 text-base md:text-lg"><strong>Address:</strong> CUETpedia Headquarters, Knowledge City, New Delhi, India</p>
            <p className="mt-4 text-gray-700 text-base md:text-lg">You can also fill out the form below and we will get back to you shortly.</p>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-800 mb-1">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white bg-opacity-70 text-gray-800" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-1">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white bg-opacity-70 text-gray-800" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-800 mb-1">Message</label>
                <textarea id="message" name="message" rows="5" className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white bg-opacity-70 text-gray-800" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-8 md:px-10 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">Send Message</button>
            </form>
          </div>
        </>
      ),
    },
    about: {
      title: 'About CUETpedia',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">CUETpedia was founded with the mission to simplify the CUET examination preparation process for students across India.</p>
          <p className="mb-4 text-gray-700">Recognizing the challenges faced by aspirants in navigating the vast syllabus and diverse university options, we created a platform that centralizes essential information and resources.</p>
          <p className="mb-4 text-gray-700">Our team comprises experienced educators, subject matter experts, and technology enthusiasts dedicated to providing accurate, up-to-date, and easy-to-understand content. We believe that with the right guidance and resources, every student can achieve their academic goals.</p>
          <p className="text-sm md:text-base text-gray-600">Join us in making CUET preparation accessible and effective for everyone!</p>
        </>
      ),
    },
  };

  const currentSection = sections[activeSection] || sections.home;

  // Simple search functionality (client-side for this example)
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    navigateTo('home');
    alert(`Search functionality is under development. You searched for: "${searchTerm}"`);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
      {/* Google Fonts link for Delius Swash Caps */}
      <link href="https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap" rel="stylesheet" />

      {/* Background Circles for Liquid Effect */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Tailwind CSS Custom Animations (for blob effect) */}
      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0; /* Ensures it starts invisible */
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .font-delius-swash-caps {
            font-family: 'Delius Swash Caps', cursive;
        }
        `}
      </style>

      {/* Header */}
      <header className="relative z-20 p-4 md:p-6" style={glassEffectStyle}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <GraduationCap size={36} className="mr-3 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">CUETpedia</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => navigateTo('home')}
              className={`px-7 py-1 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${activeSection === 'home' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'home' ? glassEffectStyle : {}}
            >
              <Home className="inline-block mr-2" size={20} /> Home
            </button>
            <button
              onClick={() => navigateTo('syllabus')}
              className={`px-7 py-1 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${activeSection === 'syllabus' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'syllabus' ? glassEffectStyle : {}}
            >
              <BookOpen className="inline-block mr-2" size={20} /> Syllabus
            </button>
            <button
              onClick={() => navigateTo('universities')}
              className={`px-7 py-1 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${activeSection === 'universities' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'universities' ? glassEffectStyle : {}}
            >
              <GraduationCap className="inline-block mr-2" size={20} /> Universities
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`px-7 py-1 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${activeSection === 'about' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'about' ? glassEffectStyle : {}}
            >
              <Info className="inline-block mr-2" size={20} /> About
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`px-7 py-1 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${activeSection === 'contact' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'contact' ? glassEffectStyle : {}}
            >
              <Users className="inline-block mr-2" size={20} /> Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-200">
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Conditional Render) */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full rounded-b-3xl shadow-inner p-4 z-10" style={glassEffectStyle}>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => navigateTo('home')}
                className={`block w-full text-left px-5 py-1.5 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'home' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <Home className="inline-block mr-3" size={20} /> Home
              </button>
              <button
                onClick={() => navigateTo('syllabus')}
                className={`block w-full text-left px-5 py-1.5 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'syllabus' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <BookOpen className="inline-block mr-3" size={20} /> Syllabus
              </button>
              <button
                onClick={() => navigateTo('universities')}
                className={`block w-full text-left px-5 py-1.5 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'universities' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <GraduationCap className="inline-block mr-3" size={20} /> Universities
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`block w-full text-left px-5 py-1.5 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'about' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <Info className="inline-block mr-3" size={20} /> About
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`block w-full text-left px-5 py-1.5 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'contact' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <Users className="inline-block mr-3" size={20} /> Contact
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-0 flex-grow container mx-auto p-4 md:p-8">
        <div className="rounded-3xl shadow-2xl p-6 md:p-10" style={glassEffectStyle}>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-10 flex items-center border border-gray-300 rounded-full overflow-hidden shadow-md focus-within:ring-4 focus-within:ring-blue-400 transition-all duration-300 bg-white bg-opacity-50">
            <input
              type="text"
              placeholder="Search for syllabus, universities, topics..."
              className="flex-grow p-4 md:p-5 text-gray-800 focus:outline-none rounded-l-full bg-transparent text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white p-4 md:p-5 hover:bg-blue-700 transition-colors duration-300 rounded-r-full flex items-center justify-center transform hover:scale-105">
              <Search size={28} />
              <span className="sr-only">Search</span>
            </button>
          </form>

          {/* Section Content */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 border-b-4 border-blue-500 pb-4">
            {currentSection.title}
          </h2>
          <div className="text-gray-700 leading-relaxed text-lg md:text-xl">
            {currentSection.content}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 md:p-6 mt-8" style={glassEffectStyle}>
        <div className="container mx-auto text-center text-sm md:text-base text-gray-800">
          <p>&copy; {new Date().getFullYear()} CUETpedia. All rights reserved.</p>
          <p className="mt-2">
            Designed with <span className="text-red-500">&hearts;</span> by{' '}
            <a
              href="https://www.sachinshukla.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-delius-swash-caps text-blue-700 hover:text-blue-900 transition-colors duration-300"
            >
              Sachin Shukla
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
