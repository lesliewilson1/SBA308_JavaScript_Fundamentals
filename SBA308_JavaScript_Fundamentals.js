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
            learners[id].assignid += assignid  + ": 0" + (score/possible) + " ";
        } 

    });


/*
//Try and Catch (please comment out lines 101 - 120)

try {

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
            learners[id].assignid += assignid  + ": 0" + (score/possible) + " ";

        }  
        }
catch (err) {
            console.log ("Error", err.message);



}

*/



    // Calculate the average
        for (const id in learners) {
            const totalScore = learners[id].score;
            const totalPossible = learners[id].possible;
            const average = totalScore / totalPossible;
            const assign = learners[id].assignid;
            
    // Add the id, average, and assign to result []
            result.push({ id, average, assign})
        }
        }

return result;
    }

    // Console.log result
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
