// The provided course information.
const CourseInfo = [{
  id: 451,
  name: "Introduction to JavaScript"
}];

// The provided assignment group.
const AssignmentGroup = [{
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
}];

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];



function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {

    // Store Result
    const result = [];

    // Check if IDs match
if (AssignmentGroup[0].course_id === CourseInfo[0].id) {

    // Match assignments with assignments group
    const assignments = AssignmentGroup[0].assignments;

    // Create a container to track each learner
    const learners = {};
    
    // Loop through each submission (object) in LearnerSubmissions
    // "submission" is now the shortcut name
    LearnerSubmissions.forEach(submission => {
        const submissionMatch = assignments.find(a => a.id === submission.assignment_id);
    
    // Add condition "submissionMatch" and const id, score, and possible points to reference arrays to begin calculation
        if (submissionMatch) {
            const id = submission.learner_id;
            const score = submission.submission.score;
            const possible = submissionMatch.points_possible;
            const assignid = submission.assignment_id;

    // Add every learner by using if statement to grab and collect from const declared above
            if (learners[id] === undefined) {
                learners[id] = {
                    score: 0, 
                    possible: 0
                    
                };
            }
            learners[id].score += score;
            learners[id].possible += possible;
            learners[id].assignid += assignid + ": 0" + (score/possible) + " ";
        }
    });

    // Calculate the average
        for (const id in learners) {
            const totalScore = learners[id].score;
            const totalPossible = learners[id].possible;
            const average = totalScore / totalPossible;
            const assign = learners[id].assignid;
            
    // Add the id, and average to result []
            result.push({ id, average, assign})
        }
        }

return result;
    }

    // Console.log result
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

/*
Create a function named getLearnerData() that accepts these values
 as parameters, in the order listed: (CourseInfo, AssignmentGroup, 
 [LearnerSubmission]), and returns the formatted result, which should 
 be an array of objects as described above.
*/


/*
function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
*/


/*
LearnerSubmissions.forEach(display);


function display(element) {

    console.log(element);
}
*/