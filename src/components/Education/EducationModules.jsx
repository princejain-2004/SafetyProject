import React, { useState } from 'react';
import { BookOpen, Clock, Star, Play, CheckCircle, Award, Filter, Search } from 'lucide-react';

export default function EducationModules() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedClass, setSelectedClass] = useState('Elementary');
  const [selectedLanguage, setSelectedLanguage] = useState('all'); // ✅ New state for language filter
  const [searchTerm, setSearchTerm] = useState('');

  const modules = [
    {
      id: 'hindi-elem-1',
      title: 'Earthquake Explained Simply | Dr. Binocs Show (Hindi)',
      description: 'Kid-friendly animated explanation about earthquakes and safety.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Earthquake.png", // Changed to string for direct use in <img>
      videoUrl: 'https://www.youtube.com/watch?v=MllUVQM3KVk',
      classLevel: 'Primary',
      language: 'Hindi' // ✅ Added language
    },
    {
      id: 'hindi-elem-2',
      title: 'What Is An Earthquake? | The Dr. Binocs Show (Hindi)',
      description: 'Simple introduction to earthquakes for young students.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=jPR8HHmpeXE',
      classLevel: 'Primary',
      language: 'Hindi'
    },
    // Primary
    {
      id: 'hindi-primary-1',
      title: 'Earthquake Safety Tips | Dr Binocs Show (Hindi)',
      description: 'Basic do’s and don’ts during earthquakes explained simply for kids.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=YK8MGENh0as',
      classLevel: 'Elementary',
      language: 'Hindi'
    },
    {
      id: 'hindi-primary-2',
      title: 'Earthquake Safety | Safety for Kids (Hindi)',
      description: 'भूकंप से कैसे बचें? Safety advice video for kids.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=dJpIU1rSOFY',
      classLevel: 'Elementary',
      language: 'Hindi'
    },
    // Secondary
    {
      id: 'hindi-sec-1',
      title: 'How to Stay Safe During an Earthquake? (BBC Hindi)',
      description: 'Detailed safety and preparedness info for teens.',
      category: 'Earthquake Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=m59kX6MAEPw',
      classLevel: 'Secondary',
      language: 'Hindi'
    },
    {
      id: 'hindi-sec-2',
      title: 'भूकंप से कैसे बचें? क्या-क्या उपाय करें !',
      description: 'Practical steps for earthquake survival in Hindi.',
      category: 'Earthquake Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=GLaPTHA_TaI',
      classLevel: 'Secondary',
      language: 'Hindi'
    },
    // College
    {
      id: 'hindi-college-1',
      title: 'Earthquake Preparedness Resources Hindi - Earthquake Country Alliance',
      description: 'Extensive resources and videos on earthquake preparedness.',
      category: 'Earthquake Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.earthquakecountry.org/hindi/',
      classLevel: 'College',
      language: 'Hindi'
    },
    {
      id: 'hindi-college-2',
      title: 'Earthquake Safety Tips - NIDM (Hindi)',
      description: 'Detailed do’s and don’ts by the National Institute of Disaster Management.',
      category: 'Earthquake Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=vULp0Lh4Jto',
      classLevel: 'College',
      language: 'Hindi'
    },
    // Primary
    {
      id: 'eng-primary-1',
      title: 'Earthquake Safety for Kids | Primary Students',
      description: 'Simple explanation of earthquakes and safety rules for primary school children.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=YWTsoSU1BMg',
      classLevel: 'Primary',
      language: 'English'
    },
    {
      id: 'eng-primary-2',
      title: 'Basic Earthquake Safety | Primary Kids',
      description: 'Fun and easy-to-follow guide for children to stay safe during earthquakes.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=90z5oU1WNTc',
      classLevel: 'Primary',
      language: 'English'
    },
    // Elementary
    {
      id: 'eng-elementary-1',
      title: 'Earthquake Explained for Elementary Students',
      description: 'Kid-friendly animated explanation about earthquakes and safety.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=MllUVQM3KVk',
      classLevel: 'Elementary',
      language: 'English'
    },
    {
      id: 'eng-elementary-2',
      title: 'Earthquake Preparedness for Elementary Kids',
      description: 'Do’s and Don’ts during an earthquake, specially made for young learners.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=d08QUmxzdKU',
      classLevel: 'Elementary',
      language: 'English'
    },
    // Secondary
    {
      id: 'eng-secondary-1',
      title: 'How to Stay Safe During an Earthquake? | Secondary Students',
      description: 'Detailed safety and preparedness information for teens.',
      category: 'Earthquake Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=rfC2idGJ9R8',
      classLevel: 'Secondary',
      language: 'English'
    },
    {
      id: 'eng-secondary-2',
      title: 'Earthquake Awareness & Survival | Secondary',
      description: 'Practical safety tips and preparedness strategies for secondary students.',
      category: 'Earthquake Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=BLEPakj1YTY',
      classLevel: 'Secondary',
      language: 'English'
    },
    // College
    {
      id: 'eng-college-1',
      title: 'Earthquake Preparedness for College Students',
      description: 'Step-by-step guide to staying safe during earthquakes and improving resilience.',
      category: 'Earthquake Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=TCyYfASvVr8',
      classLevel: 'College',
      language: 'English'
    },
    {
      id: 'eng-college-2',
      title: 'Seven Steps to Earthquake Safety | ECA',
      description: 'Comprehensive earthquake preparedness guide from Earthquake Country Alliance.',
      category: 'Earthquake Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.earthquakeauthority.com/california-earthquake-risk/personal-preparedness/seven-steps-to-earthquake-safety/the-seven-steps-to-earthquake-safety',
      classLevel: 'College',
      language: 'English'
    },
    {
      id: 'punjabi-elem-1',
      title: 'ਭੂਚਾਲ ਦੀ ਜਾਣਕਾਰੀ (Punjabi Playlist)',
      description: 'Animated and kid-friendly explanations of earthquakes and safety in Punjabi.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 110,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/playlist?list=PLrM5i3W2GWKMJURD5UvYrmdc70iX9zKIw',
      classLevel: 'Elementary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-elem-2',
      title: 'ਭੂਚਾਲ ਦੌਰਾਨ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ? (Punjabi)',
      description: 'Basic earthquake safety explained for elementary kids.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=Uj965XmV-I0',
      classLevel: 'Elementary',
      language: 'Punjabi'
    },
    // Primary
    {
      id: 'punjabi-primary-1',
      title: 'Earthquake Preparedness Resources (Punjabi)',
      description: 'Step-by-step resources to prepare for earthquakes, translated for Punjabi speakers.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 120,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.earthquakecountry.org/hindi/',  // closest Punjabi resource provided
      classLevel: 'Primary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-primary-2',
      title: 'ਭੂਚਾਲ ਸੁਰੱਖਿਆ | Safety for Kids (Punjabi)',
      description: 'Safety advice video for kids in Punjabi language.',
      category: 'Earthquake Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=iUH0cVfBDsU',
      classLevel: 'Primary',
      language: 'Punjabi'
    },
    // Secondary
    {
      id: 'punjabi-sec-1',
      title: 'ਭੂਚਾਲ ਦੌਰਾਨ ਸੁਰੱਖਿਆ (Punjabi)',
      description: 'Detailed safety and preparedness info for teens in Punjabi.',
      category: 'Earthquake Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=nU7n3c58RIc',
      classLevel: 'Secondary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-sec-2',
      title: 'Earthquake Safety Awareness | Secondary (Punjabi)',
      description: 'Awareness and safety drill for secondary students in Punjabi.',
      category: 'Earthquake Safety',
      difficulty: 'intermediate',
      duration: 18,
      points: 140,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=7WhNdyHwmjQ',
      classLevel: 'Secondary',
      language: 'Punjabi'
    },
    // College
    {
      id: 'punjabi-college-1',
      title: 'ਭੂਚਾਲ ਸੁਰੱਖਿਆ ਸਰੋਤ (Punjabi)',
      description: 'Comprehensive earthquake preparedness guide for Punjabi college students.',
      category: 'Earthquake Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.youtube.com/watch?v=nU7n3c58RIc',
      classLevel: 'College',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-college-2',
      title: 'Earthquake Preparedness Resources (Punjabi)',
      description: 'Extensive earthquake preparedness resources in Punjabi language.',
      category: 'Earthquake Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Earthquake.png",
      videoUrl: 'https://www.earthquakecountry.org/punjabi/',
      classLevel: 'College',
      language: 'Punjabi'
    },
    // Elementary (Kid-Friendly)
    {
      id: 'english-elem-1',
      title: "Sparky's Fire Safety Tips | Sparkys Schoolhouse",
      description: "Animated, kid-friendly video explaining basic fire safety tips.",
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://sparkyschoolhouse.org/resource/video-sparkys-fire-safety-tips/',
      classLevel: 'Elementary',
      language: 'English'
    },
    {
      id: 'english-elem-2',
      title: "Fire Safety Basics | Kid-Friendly Video",
      description: "Introduction to fire hazards and safety rules for young students.",
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=Rt2X7__DP88',
      classLevel: 'Elementary',
      language: 'English'
    },
    // Primary
    {
      id: 'english-primary-1',
      title: "Fire Safety Tips | Safe Kids Video",
      description: "Basic do’s and don’ts during a fire explained for children.",
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=AWHGdWOI4kw',
      classLevel: 'Primary',
      language: 'English'
    },
    {
      id: 'english-primary-2',
      title: "Fire Safety Rules for Kids | Educational Video",
      description: "Teach children how to prevent fire accidents and stay safe.",
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=vbkWAr1F37o',
      classLevel: 'Primary',
      language: 'English'
    },
    // Secondary
    {
      id: 'english-sec-1',
      title: "Fire Safety Awareness | Teen Guide",
      description: "Detailed fire safety and emergency response tips for teens.",
      category: 'Fire Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=Filzae3w1Zo',
      classLevel: 'Secondary',
      language: 'English'
    },
    {
      id: 'english-sec-2',
      title: "Fire Safety Precautions | How to Stay Safe",
      description: "Practical steps for fire prevention and safety for teens.",
      category: 'Fire Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=YxcSZw2UYmc',
      classLevel: 'Secondary',
      language: 'English'
    },
    // College
    {
      id: 'english-college-1',
      title: "Advanced Fire Safety Tips | College Level",
      description: "Comprehensive fire safety protocols for higher education students.",
      category: 'Fire Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=yodLMfOZNvA',
      classLevel: 'College',
      language: 'English'
    },
    {
      id: 'english-college-2',
      title: "Fire Safety Guidelines | College Students",
      description: "Detailed fire safety and prevention tips suitable for college students.",
      category: 'Fire Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=yCk7adIEPeo',
      classLevel: 'College',
      language: 'English'
    },
    // Elementary
    {
      id: 'hindi-fire-elem-1',
      title: 'बचपन में आग से सुरक्षा | Fire Safety for Kids (Hindi)',
      description: 'Animated, kid-friendly video explaining basic fire safety tips.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=--vra__u02k',
      classLevel: 'Elementary',
      language: 'Hindi'
    },
    {
      id: 'hindi-fire-elem-2',
      title: 'आग से बचने के आसान तरीके | Fire Safety Tips (Hindi)',
      description: 'Simple introduction to fire hazards and safety rules for young students.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=gNkGYTKgH1Q',
      classLevel: 'Elementary',
      language: 'Hindi'
    },
    // Primary
    {
      id: 'hindi-fire-primary-1',
      title: 'Fire Safety Tips for Children | सुरक्षा नियम (Hindi)',
      description: 'Basic do’s and don’ts during fire incidents explained simply for kids.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=IiqdAbJ6Yw8',
      classLevel: 'Primary',
      language: 'Hindi'
    },
    {
      id: 'hindi-fire-primary-2',
      title: 'आग से सुरक्षा | Safety for Kids (Hindi)',
      description: 'Practical advice on how children can stay safe during a fire.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=eh34NXDCHyk',
      classLevel: 'Primary',
      language: 'Hindi'
    },
    // Secondary
    {
      id: 'hindi-fire-sec-1',
      title: 'How to Stay Safe During a Fire? (Hindi)',
      description: 'Detailed safety and preparedness info for teens during fire emergencies.',
      category: 'Fire Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=ePpaYkKYpMI',
      classLevel: 'Secondary',
      language: 'Hindi'
    },
    {
      id: 'hindi-fire-sec-2',
      title: 'आग से बचने के उपाय | Fire Safety for Teens',
      description: 'Practical steps for fire survival and prevention in Hindi.',
      category: 'Fire Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=FkXBhzTHRmA',
      classLevel: 'Secondary',
      language: 'Hindi'
    },
    // College
    {
      id: 'hindi-fire-college-1',
      title: 'Fire Safety Guidelines Hindi | College Level',
      description: 'Comprehensive fire safety protocols for college students in Hindi.',
      category: 'Fire Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=ej1ZL2KiwJQ',
      classLevel: 'College',
      language: 'Hindi'
    },
    {
      id: 'hindi-fire-college-2',
      title: 'Fire Safety Tips - Detailed Guidelines (Hindi)',
      description: 'Advanced fire safety tips and prevention strategies for higher education students.',
      category: 'Fire Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=0OleA_1v4Us',
      classLevel: 'College',
      language: 'Hindi'
    },
    // Elementary
    {
      id: 'punjabi-elem-1',
      title: 'ਬੱਚਿਆਂ ਲਈ ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ | Fire Safety for Kids (Punjabi)',
      description: 'Animated, kid-friendly explanation about fire hazards and safety in Punjabi.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=r4qatG9NgWw',
      classLevel: 'Elementary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-elem-2',
      title: 'ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ ਦੇ ਟਿਪਸ | Fire Safety Tips (Punjabi)',
      description: 'Simple introduction to fire hazards and basic safety rules for young students.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://youtube.com/playlist?list=PL6EHXr54f5MqepPaMBWq4_DuMSpEBT59s&si=_01lX-WPJY_xEQ2-',
      classLevel: 'Elementary',
      language: 'Punjabi'
    },
    // Primary
    {
      id: 'punjabi-primary-1',
      title: 'ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ ਟਿਪਸ | Fire Safety for Kids (Punjabi)',
      description: 'Basic do’s and don’ts during fire incidents for children.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=HSFcGCOG2fs',
      classLevel: 'Primary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-primary-2',
      title: 'ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ | Fire Safety Guide (Punjabi)',
      description: 'PDF guide and video explaining safety precautions at home.',
      category: 'Fire Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.staffordshirefire.gov.uk/media/jxyavmmz/punjabi-fire-safety-in-the-home.pdf',
      classLevel: 'Primary',
      language: 'Punjabi'
    },
    // Secondary
    {
      id: 'punjabi-sec-1',
      title: 'ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ | Teen Fire Safety (Punjabi)',
      description: 'Detailed fire safety and emergency response tips for teens.',
      category: 'Fire Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=yHKRMv9wcoI',
      classLevel: 'Secondary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-sec-2',
      title: 'ਅੱਗ ਤੋਂ ਬਚਾਅ ਦੇ ਤਰੀਕੇ | Fire Safety Tips (Punjabi)',
      description: 'Practical steps for fire survival and prevention in Punjabi.',
      category: 'Fire Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=hKvhvOTt8zY',
      classLevel: 'Secondary',
      language: 'Punjabi'
    },
    // College
    {
      id: 'punjabi-college-1',
      title: 'College Level Fire Safety | ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ (Punjabi)',
      description: 'Comprehensive fire safety protocols and prevention strategies for college students.',
      category: 'Fire Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=nU7n3c58RIc',
      classLevel: 'College',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-college-2',
      title: 'Advanced Fire Safety Tips | ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ (Punjabi)',
      description: 'Detailed fire safety tips and emergency preparedness for higher education students.',
      category: 'Fire Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Fire.png",
      videoUrl: 'https://www.youtube.com/watch?v=TeoaGhqns1o',
      classLevel: 'College',
      language: 'Punjabi'
    },
    {
      id: 'eng-flood-primary-1',
      title: 'Flood Safety for Kids | Primary',
      description: 'Simple explanation of floods and basic safety rules for children.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=pi_nUPcQz_A',
      classLevel: 'Primary',
      language: 'English'
    },
    {
      id: 'eng-flood-primary-2',
      title: 'Stay Safe in a Flood | Kids Edition',
      description: 'Fun and easy-to-follow guide for children on what to do during floods.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=j4yuzWuMLGQ',
      classLevel: 'Primary',
      language: 'English'
    },
    // Elementary
    {
      id: 'eng-flood-elementary-1',
      title: 'Understanding Floods | Elementary',
      description: 'Kid-friendly animated explanation of how floods happen and safety measures.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=Y8dIDa6xfgo',
      classLevel: 'Elementary',
      language: 'English'
    },
    {
      id: 'eng-flood-elementary-2',
      title: 'Flood Preparedness for Kids | Elementary',
      description: 'Do’s and Don’ts during floods, specially made for elementary students.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 14,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=zEikCj85MPs',
      classLevel: 'Elementary',
      language: 'English'
    },
    // Secondary
    {
      id: 'eng-flood-secondary-1',
      title: 'How to Stay Safe During a Flood? | Secondary',
      description: 'Detailed safety and preparedness information for teens during floods.',
      category: 'Flood Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=wqEKBkxS7QY',
      classLevel: 'Secondary',
      language: 'English'
    },
    {
      id: 'eng-flood-secondary-2',
      title: 'Flood Awareness & Preparedness | Secondary',
      description: 'Practical flood safety tips and preparedness strategies for teenagers.',
      category: 'Flood Safety',
      difficulty: 'intermediate',
      duration: 18,
      points: 140,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=Ed3g9WWD6xM',
      classLevel: 'Secondary',
      language: 'English'
    },
    // College
    {
      id: 'eng-flood-college-1',
      title: 'Flood Preparedness for College Students',
      description: 'Step-by-step guide to staying safe during floods, designed for young adults.',
      category: 'Flood Safety',
      difficulty: 'advanced',
      duration: 30,
      points: 180,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=zZ6robkowZI',
      classLevel: 'College',
      language: 'English'
    },
    {
      id: 'eng-flood-college-2',
      title: 'Flood Safety & Preparedness Resources | College',
      description: 'Comprehensive resources and practical tips for flood preparedness.',
      category: 'Flood Safety',
      difficulty: 'advanced',
      duration: 35,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=8YS-BspsBXM',
      classLevel: 'College',
      language: 'English'
    },
    {
      id: 'hindi-flood-primary-1',
      title: 'फ्लड्स | बाढ़ क्या है? (Hindi)',
      description: 'बाढ़ का परिचय—क्या होती है और क्यों होती है।',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=ZHoIZMeFg8g',
      classLevel: 'Primary',
      language: 'Hindi'
    },
    {
      id: 'hindi-flood-primary-2',
      title: 'Flood Safety Tips | बाढ़ से बचाव के उपाय (Hindi)',
      description: 'बच्चों के लिए बाढ़ के दौरान सुरक्षा उपाय।',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=T0XtgXdqwVk',
      classLevel: 'Primary',
      language: 'Hindi'
    },
    // Elementary (Hindi Flood)
    {
      id: 'hindi-flood-elementary-1',
      title: 'बाढ़ समझें | Elementary (Hindi)',
      description: 'बाढ़ कैसे होती है और उससे कैसे बचें—बुनियादी जानकारी।',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=6fTrMqhedso',
      classLevel: 'Elementary',
      language: 'Hindi'
    },
    {
      id: 'hindi-flood-elementary-2',
      title: 'Flood Preparedness | तैयारियाँ और सुरक्षा (Hindi)',
      description: 'Elementary बच्चों के लिए बाढ़ की तैयारी और सुरक्षा टिप्स।',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=eAiJcmdnAhE',
      classLevel: 'Elementary',
      language: 'Hindi'
    },
    // Secondary (Hindi Flood)
    {
      id: 'hindi-flood-secondary-1',
      title: 'बाढ़ सुरक्षा नियम | Secondary (Hindi)',
      description: 'किशोरों के लिए विस्तृत बाढ़ सुरक्षा दिशा-निर्देश।',
      category: 'Flood Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=52ExV6dXOsQ',
      classLevel: 'Secondary',
      language: 'Hindi'
    },
    {
      id: 'hindi-flood-secondary-2',
      title: 'Flood Preparedness & Awareness | Secondary (Hindi)',
      description: 'किशोरों के लिए बाढ़ तैयारियों एवं जागरूकता।',
      category: 'Flood Safety',
      difficulty: 'intermediate',
      duration: 18,
      points: 140,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=BnIlp57amfA',
      classLevel: 'Secondary',
      language: 'Hindi'
    },
    // College (Hindi Flood)
    {
      id: 'hindi-flood-college-1',
      title: 'Flood Safety & Management (Hindi)',
      description: 'बाढ़ प्रबंधन और सुरक्षा की व्यापक जानकारी।',
      category: 'Flood Safety',
      difficulty: 'advanced',
      duration: 30,
      points: 180,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=InqciIoKFA8',
      classLevel: 'College',
      language: 'Hindi'
    },
    {
      id: 'hindi-flood-college-2',
      title: 'बाढ़ नियंत्रण और प्रबंधन अध्ययन (Hindi)',
      description: 'Testbook द्वारा बाढ़ नियंत्रण एवं प्रबंधन का विस्तृत अध्ययन सामग्री।',
      category: 'Flood Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://testbook.com/hi/ias-preparation/flood-control-management',
      classLevel: 'College',
      language: 'Hindi'
    },
    // Elementary
    {
      id: 'punjabi-flood-elem-1',
      title: 'ਬੱਚਿਆਂ ਲਈ ਬਾਰਿਸ਼ ਅਤੇ ਬਦਲਾਅ ਸੁਰੱਖਿਆ | Flood Safety (Punjabi)',
      description: 'Kid-friendly animated explanation about floods and safety in Punjabi.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 10,
      points: 100,
      completed: false,
      rating: 4.6,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/playlist?list=PLrM5i3W2GWKMJURD5UvYrmdc70iX9zKIw',
      classLevel: 'Elementary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-flood-elem-2',
      title: 'Flood Safety Tips for Kids | ਬੱਚਿਆਂ ਲਈ ਸੁਰੱਖਿਆ (Punjabi)',
      description: 'Simple introduction to floods and how children can stay safe.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 12,
      points: 120,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=Y8dIDa6xfgo',
      classLevel: 'Elementary',
      language: 'Punjabi'
    },
    // Primary
    {
      id: 'punjabi-flood-primary-1',
      title: 'Flood Safety for Primary Students | ਸੁਰੱਖਿਆ ਟਿਪਸ (Punjabi)',
      description: 'Basic do’s and don’ts during floods for primary students.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=C2BeWnb31yM',
      classLevel: 'Primary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-flood-primary-2',
      title: 'Flood Safety Guide | ਪ੍ਰਾਇਮਰੀ ਸੁਰੱਖਿਆ (Punjabi)',
      description: 'Practical steps and safety advice for primary students during floods.',
      category: 'Flood Safety',
      difficulty: 'beginner',
      duration: 15,
      points: 130,
      completed: false,
      rating: 4.8,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=nU7n3c58RIc',
      classLevel: 'Primary',
      language: 'Punjabi'
    },
    // Secondary
    {
      id: 'punjabi-flood-sec-1',
      title: 'Flood Safety for Teens | ਸੁਰੱਖਿਆ ਟਿਪਸ (Punjabi)',
      description: 'Detailed flood safety and preparedness tips for secondary students.',
      category: 'Flood Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=WeGAPkUVvzs',
      classLevel: 'Secondary',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-flood-sec-2',
      title: 'Flood Safety Measures | ਸੁਰੱਖਿਆ ਟਿਪਸ (Punjabi)',
      description: 'Practical steps for flood survival and prevention in Punjabi.',
      category: 'Flood Safety',
      difficulty: 'intermediate',
      duration: 20,
      points: 150,
      completed: false,
      rating: 4.9,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=Iy2Sb2mk3zI',
      classLevel: 'Secondary',
      language: 'Punjabi'
    },
    // College
    {
      id: 'punjabi-flood-college-1',
      title: 'College Level Flood Safety | ਸੁਰੱਖਿਆ (Punjabi)',
      description: 'Comprehensive flood safety protocols for college students.',
      category: 'Flood Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=7smr7tKnD_Y',
      classLevel: 'College',
      language: 'Punjabi'
    },
    {
      id: 'punjabi-flood-college-2',
      title: 'Advanced Flood Safety Tips | ਅੱਗੇ ਵਧੀਕ ਸੁਰੱਖਿਆ (Punjabi)',
      description: 'Detailed flood safety and emergency preparedness for higher education students.',
      category: 'Flood Safety',
      difficulty: 'advanced',
      duration: 40,
      points: 200,
      completed: false,
      rating: 4.7,
      thumbnail: "src/Assets/Flood.png",
      videoUrl: 'https://www.youtube.com/watch?v=nU7n3c58RIc',
      classLevel: 'College',
      language: 'Punjabi'
    },
  ];

  // Filters
  const categories = ['all', ...Array.from(new Set(modules.map(m => m.category)))];
  const classLevels = ['Primary', 'Elementary', 'Secondary', 'College'];
  const languages = ['all', ...Array.from(new Set(modules.map(m => m.language)))]; // ✅ New array for languages

  // Filtering logic
  const filteredModules = modules.filter(module => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesClass = module.classLevel === selectedClass;
    const matchesLanguage = selectedLanguage === 'all' || module.language === selectedLanguage; // ✅ New language filter logic
    const matchesSearch =
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesClass && matchesLanguage && matchesSearch; // ✅ Include language in filter
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Learning Modules</h1>
          <p className="text-gray-600 mt-1">Interactive emergency preparedness training</p>
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

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Class Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {classLevels.map(level => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Language Filter */} {/* ✅ New Language Filter Section */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>
                  {lang === 'all' ? 'All Languages' : lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <div
            key={module.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={module.thumbnail}
                alt={module.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <a href={module.videoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all">
                    <Play className="w-6 h-6 text-blue-600" />
                  </button>
                </a>
              </div>
              {module.completed && (
                <div className="absolute top-3 right-3 bg-green-500 p-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{module.title}</h3>
                <div className="flex items-center ml-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{module.rating}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{module.description}</p>

              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getDifficultyColor(module.difficulty)}`}>
                  {module.difficulty}
                </span>
                <span className="text-xs text-gray-500">{module.category}</span>
              </div>

              {/* Show class level badge */}
              <div className="mb-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  Class {module.classLevel}
                </span>
                {/* ✅ Show language badge */}
                <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  {module.language}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{module.duration} min</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1 text-yellow-500" />
                  <span className="font-medium text-yellow-600">{module.points} pts</span>
                </div>
              </div>

              <a
                href={module.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-2 px-4 rounded-md font-medium transition-colors ${
                  module.completed
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {module.completed ? 'Review Module' : 'Start Learning'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}