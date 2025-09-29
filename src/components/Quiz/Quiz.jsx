import React, { useState } from 'react';
import { Award, Search, Filter } from 'lucide-react';

// English Quizzes
import EarthquakeQuiz from './EarthQuake';
// import EarthquakeQuiz2 from './earthquake2';
import FireQuiz1 from './fire1';
import FireQuiz2 from './fire2';
import FloodQuiz1 from './flood1';
import FloodQuiz2 from './flood2';

// Hindi Quizzes
import EarthQuakeQuizHindi from './EarthQuakeHindi';
import EarthQuakeQuizHindi2 from './EarthQuakeHindi2';
import FireQuizHindi1 from './FireHindi1';
import FireQuizHindi2 from './FireHindi2';
import FloodQuizHindi1 from './FloodHindi1';
import FloodQuizHindi2 from './FloodHindi2';

// Punjabi Quizzes
import EarthQuakeQuizPunjabi1 from './EarthQuakePunjabi1';
import EarthQuakeQuizPunjabi2 from './EarthQuakePunjabi2';
import FireQuizPunjabi1 from './FirePunjabi1';
import FireQuizPunjabi2 from './FirePunjabi2';
import FloodQuizPunjabi1 from './FloodPunjabi1';
import FloodQuizPunjabi2 from './FloodPunjabi2';

// Marathi Quizzes
import EarthQuakeQuizMarathi1 from './EarthQuakeMarathi1';
import FireQuizMarathi1 from './FireMarathi1';
import FloodQuizMarathi1 from './FloodMarathi1';

// Gujarati Quizzes
import EarthQuakeQuizGujarati1 from './EarthQuakeGujarati1';
import FireQuizGujarati1 from './FireGujarati1';
import FloodQuizGujarati1 from './FloodGujarati1';

// Bengali Quizzes
import EarthQuakeQuizBengali1 from './EarthQuakeBengali1';
import FireQuizBengali1 from './FireBengali1';
import FloodQuizBengali1 from './FloodBengali1';

// Tamil Quizzes
import EarthQuakeQuizTamil1 from './EarthQuakeTamil1';
import FireQuizTamil1 from './FireTamil1';
import FloodQuizTamil1 from './FloodTamil1';

// Telugu Quizzes
import EarthQuakeQuizTelugu1 from './EarthQuakeTelugu1';
import FireQuizTelugu1 from './FireTelugu1';
import FloodQuizTelugu1 from './FloodTelugu1';

export default function Quiz() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [activeQuiz, setActiveQuiz] = useState(null);

  const categories = ['all', 'Earthquake', 'Fire Safety', 'Flood'];
  const languages = ['English', 'Hindi', 'Punjabi', 'Marathi', 'Gujarati', 'Bengali', 'Tamil', 'Telugu'];

  // List all quiz components here
  const quizzes = [
    // English
    { id: 'eq1-en', title: 'Earthquake Quiz 1', component: EarthquakeQuiz1, category: 'Earthquake', language: 'English' },
    { id: 'eq2-en', title: 'Earthquake Quiz 2', component: EarthquakeQuiz2, category: 'Earthquake', language: 'English' },
    { id: 'fire1-en', title: 'Fire Quiz 1', component: FireQuiz1, category: 'Fire Safety', language: 'English' },
    { id: 'fire2-en', title: 'Fire Quiz 2', component: FireQuiz2, category: 'Fire Safety', language: 'English' },
    { id: 'flood1-en', title: 'Flood Quiz 1', component: FloodQuiz1, category: 'Flood', language: 'English' },
    { id: 'flood2-en', title: 'Flood Quiz 2', component: FloodQuiz2, category: 'Flood', language: 'English' },

    // Hindi
    { id: 'eq1-hi', title: 'भूकंप क्विज़ 1', component: EarthQuakeQuizHindi1, category: 'Earthquake', language: 'Hindi' },
    { id: 'eq2-hi', title: 'भूकंप क्विज़ 2', component: EarthQuakeQuizHindi2, category: 'Earthquake', language: 'Hindi' },
    { id: 'fire1-hi', title: 'आग सुरक्षा क्विज़ 1', component: FireQuizHindi1, category: 'Fire Safety', language: 'Hindi' },
    { id: 'fire2-hi', title: 'आग सुरक्षा क्विज़ 2', component: FireQuizHindi2, category: 'Fire Safety', language: 'Hindi' },
    { id: 'flood1-hi', title: 'बाढ़ क्विज़ 1', component: FloodQuizHindi1, category: 'Flood', language: 'Hindi' },
    { id: 'flood2-hi', title: 'बाढ़ क्विज़ 2', component: FloodQuizHindi2, category: 'Flood', language: 'Hindi' },

    // Punjabi
    { id: 'eq1-pb', title: 'ਭੂਚਾਲ ਕਵਿਜ਼ 1', component: EarthQuakeQuizPunjabi1, category: 'Earthquake', language: 'Punjabi' },
    { id: 'eq2-pb', title: 'ਭੂਚਾਲ ਕਵਿਜ਼ 2', component: EarthQuakeQuizPunjabi2, category: 'Earthquake', language: 'Punjabi' },
    { id: 'fire1-pb', title: 'ਅੱਗ ਸੁਰੱਖਿਆ ਕਵਿਜ਼ 1', component: FireQuizPunjabi1, category: 'Fire Safety', language: 'Punjabi' },
    { id: 'fire2-pb', title: 'ਅੱਗ ਸੁਰੱਖਿਆ ਕਵਿਜ਼ 2', component: FireQuizPunjabi2, category: 'Fire Safety', language: 'Punjabi' },
    { id: 'flood1-pb', title: 'ਬਾਰਸ਼/ਬਹਾਵ ਕਵਿਜ਼ 1', component: FloodQuizPunjabi1, category: 'Flood', language: 'Punjabi' },
    { id: 'flood2-pb', title: 'ਬਾਰਸ਼/ਬਹਾਵ ਕਵਿਜ਼ 2', component: FloodQuizPunjabi2, category: 'Flood', language: 'Punjabi' },

    // Marathi
    { id: 'eq1-mr', title: 'भूकंप क्विझ 1', component: EarthQuakeQuizMarathi1, category: 'Earthquake', language: 'Marathi' },
    { id: 'fire1-mr', title: 'आग सुरक्षा क्विझ 1', component: FireQuizMarathi1, category: 'Fire Safety', language: 'Marathi' },
    { id: 'flood1-mr', title: 'पाणीपुरा क्विझ 1', component: FloodQuizMarathi1, category: 'Flood', language: 'Marathi' },

    // Gujarati
    { id: 'eq1-gu', title: 'ભૂકંપ ક્વિઝ 1', component: EarthQuakeQuizGujarati1, category: 'Earthquake', language: 'Gujarati' },
    { id: 'fire1-gu', title: 'આગ સુરક્ષા ક્વિઝ 1', component: FireQuizGujarati1, category: 'Fire Safety', language: 'Gujarati' },
    { id: 'flood1-gu', title: 'વરસાદ / વોટરફ્લડ ક્વિઝ 1', component: FloodQuizGujarati1, category: 'Flood', language: 'Gujarati' },

    // Bengali
    { id: 'eq1-bn', title: 'ভূমিকম্প কুইজ 1', component: EarthQuakeQuizBengali1, category: 'Earthquake', language: 'Bengali' },
    { id: 'fire1-bn', title: 'আগুন নিরাপত্তা কুইজ 1', component: FireQuizBengali1, category: 'Fire Safety', language: 'Bengali' },
    { id: 'flood1-bn', title: 'বন্যা কুইজ 1', component: FloodQuizBengali1, category: 'Flood', language: 'Bengali' },

    // Tamil
    { id: 'eq1-ta', title: 'பூமிய அதிர்வு க்விஸ் 1', component: EarthQuakeQuizTamil1, category: 'Earthquake', language: 'Tamil' },
    { id: 'fire1-ta', title: 'அੱਗ் பாதுகாப்பு க்விஸ் 1', component: FireQuizTamil1, category: 'Fire Safety', language: 'Tamil' },
    { id: 'flood1-ta', title: 'மழை/பெருங்கடல் க்விஸ் 1', component: FloodQuizTamil1, category: 'Flood', language: 'Tamil' },

    // Telugu
    { id: 'eq1-te', title: 'భూకంప క్విజ్ 1', component: EarthQuakeQuizTelugu1, category: 'Earthquake', language: 'Telugu' },
    { id: 'fire1-te', title: 'మంటల నుండి రక్షణ క్విజ్ 1', component: FireQuizTelugu1, category: 'Fire Safety', language: 'Telugu' },
    { id: 'flood1-te', title: 'పెద్ద వరద క్విజ్ 1', component: FloodQuizTelugu1, category: 'Flood', language: 'Telugu' },
  ];

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory;
    const matchesLanguage = quiz.language === selectedLanguage;
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLanguage && matchesSearch;
  });

  if (activeQuiz) {
    const QuizComponent = activeQuiz.component;
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 flex flex-col">
        <div className="p-4 flex justify-between items-center bg-gray-800">
          <h2 className="text-xl font-bold text-white">{activeQuiz.title}</h2>
          <button
            onClick={() => setActiveQuiz(null)}
            className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md"
          >
            Back
          </button>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <QuizComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">QUIZ</h1>
          <p className="text-gray-600 mt-1">Interactive emergency preparedness QUIZ</p>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">Earn points and badges</span>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Language */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{quiz.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{quiz.category}</p>
              <p className="text-xs text-gray-500 mb-4">{quiz.language}</p>
              <button
                onClick={() => setActiveQuiz(quiz)}
                className="mt-auto py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                Start Quiz
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No quizzes found.</p>
        )}
      </div>
    </div>
  );
}
