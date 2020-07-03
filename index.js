// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

function newTask(title,description) {
  const task = {
    title:title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has ${this.complete ? " " : "not"} has been completed`);
    },

    markCompleted: function(){
      this.complete.true;
    }
  };
  return task;
}
// driver codes
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(tasks)

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed


task1.title
task1.markCompleted();

// ///  unrealistic example of where `.this` is a bit messy
// let logTask1 = task1.logState;    // J sez:  if you do this line....
// logTask1();                       // J sez:  .... then this line gets fucked-up (because of the `this` magic in `this.title` and so on)
//
// ///  more realistic example of where `.this` is a bit messy
// setTimeout(task1.logState,  1000) // J sez:  this code also fucks up, because somewhere inside there's code that breaks the dot-notation



// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
