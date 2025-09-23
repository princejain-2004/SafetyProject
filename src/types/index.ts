export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  grade?: string;
  school_id: string;
  points: number;
  badges: string[];
  created_at: string;
}

export interface EducationModule {
  id: string;
  title: string;
  description: string;
  category: 'earthquake' | 'fire' | 'severe-weather' | 'lockdown' | 'medical';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  points_reward: number;
  content: ModuleContent[];
  quiz: QuizQuestion[];
  completed_by: string[];
}

export interface ModuleContent {
  id: string;
  type: 'text' | 'image' | 'video' | 'interactive';
  title: string;
  content: string;
  order: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}

export interface Alert {
  id: string;
  title: string;
  message: string;
  type: 'emergency' | 'warning' | 'info' | 'test';
  severity: 'low' | 'medium' | 'high' | 'critical';
  region: string;
  school_ids: string[];
  created_at: string;
  expires_at?: string;
  active: boolean;
}

export interface Drill {
  id: string;
  title: string;
  type: 'earthquake' | 'fire' | 'lockdown' | 'severe-weather';
  description: string;
  duration: number;
  scenario: string;
  steps: DrillStep[];
  passing_score: number;
}

export interface DrillStep {
  id: string;
  instruction: string;
  time_limit: number;
  correct_action: string;
  points: number;
}

export interface DrillResult {
  id: string;
  user_id: string;
  drill_id: string;
  score: number;
  time_taken: number;
  completed_at: string;
  steps_completed: DrillStepResult[];
}

export interface DrillStepResult {
  step_id: string;
  completed: boolean;
  time_taken: number;
  points_earned: number;
}

export interface EmergencyContact {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  department: string;
  school_id: string;
  priority: number;
  available_24_7: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  requirements: string;
}