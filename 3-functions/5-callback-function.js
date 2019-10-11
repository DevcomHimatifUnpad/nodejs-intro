function startTask() {
  console.log("task started");
}

function finishTask() {
  console.log("task finished");
}

function taskOne(callbackOne, callbackTwo) {
  // callbacks to functions that were passed as params
  callbackOne();
  callbackTwo();
}

// calling the higher-order function
taskOne(startTask, finishTask);
