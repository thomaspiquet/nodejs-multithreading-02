import { parentPort } from "worker_threads";

(() => {
  console.log(`[Worker] I'm the worker thread`);

  // Look for parent (main thread) message
  // once() instead of on() mean that you look for 1 message only and then kill the subscription
  parentPort.once('message', message => {
    console.log(`[Worker] Main custom message: ${message.message}`);
  });

  // Send message to parent (main thread)
  parentPort.postMessage({message: `Hi, I’m the worker thread!`});
})();
