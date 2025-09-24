/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} name
 * @property {('student'|'teacher'|'admin')} role
 * @property {string} [grade]
 * @property {string} school_id
 * @property {number} points
 * @property {Array<string>} badges
 * @property {string} created_at
 */

/**
 * @typedef {Object} EducationModule
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {('earthquake'|'fire'|'severe-weather'|'lockdown'|'medical')} category
 * @property {('beginner'|'intermediate'|'advanced')} difficulty
 * @property {number} duration // in minutes
 * @property {number} points_reward
 * @property {Array<ModuleContent>} content
 * @property {Array<QuizQuestion>} quiz
 * @property {Array<string>} completed_by
 */

/**
 * @typedef {Object} ModuleContent
 * @property {string} id
 * @property {('text'|'image'|'video'|'interactive')} type
 * @property {string} title
 * @property {string} content
 * @property {number} order
 */

/**
 * @typedef {Object} QuizQuestion
 * @property {string} id
 * @property {string} question
 * @property {Array<string>} options
 * @property {number} correct_answer
 * @property {string} explanation
 */

/**
 * @typedef {Object} Alert
 * @property {string} id
 * @property {string} title
 * @property {string} message
 * @property {('emergency'|'warning'|'info'|'test')} type
 * @property {('low'|'medium'|'high'|'critical')} severity
 * @property {string} region
 * @property {Array<string>} school_ids
 * @property {string} created_at
 * @property {string} [expires_at]
 * @property {boolean} active
 */

/**
 * @typedef {Object} Drill
 * @property {string} id
 * @property {string} title
 * @property {('earthquake'|'fire'|'lockdown'|'severe-weather')} type
 * @property {string} description
 * @property {number} duration
 * @property {string} scenario
 * @property {Array<DrillStep>} steps
 * @property {number} passing_score
 */

/**
 * @typedef {Object} DrillStep
 * @property {string} id
 * @property {string} instruction
 * @property {number} time_limit
 * @property {string} correct_action
 * @property {number} points
 */

/**
 * @typedef {Object} DrillResult
 * @property {string} id
 * @property {string} user_id
 * @property {string} drill_id
 * @property {number} score
 * @property {number} time_taken
 * @property {string} completed_at
 * @property {Array<DrillStepResult>} steps_completed
 */

/**
 * @typedef {Object} DrillStepResult
 * @property {string} step_id
 * @property {boolean} completed
 * @property {number} time_taken
 * @property {number} points_earned
 */

/**
 * @typedef {Object} EmergencyContact
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} phone
 * @property {string} email
 * @property {string} department
 * @property {string} school_id
 * @property {number} priority
 * @property {boolean} available_24_7
 */

/**
 * @typedef {Object} Badge
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} icon
 * @property {string} category
 * @property {string} requirements
 */
