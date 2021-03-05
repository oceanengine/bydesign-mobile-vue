export async function asyncQueue<T>(
  tasks: (() => Promise<T>)[],
  parallel: number
): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    const finalParallel = Math.floor((parallel >= 1 && parallel) || 1);
    const finalTasks = [...tasks];

    const { length } = finalTasks;
    let index = 0;
    let finishedCount = 0;

    const aggregation: T[] = [];
    const run = async (): Promise<void> => {
      const currentIndex = index;
      const currentTask = finalTasks[currentIndex];
      index++;
      return currentTask()
        .then((result) => {
          aggregation[currentIndex] = result;
          finishedCount++;

          if (finishedCount === length) {
            resolve(aggregation);
          }
          if (index < length) {
            return run();
          }
        })
        .catch(reject);
    };

    for (let i = 0; i < finalParallel && i < length; i++) {
      run();
    }
  });
}
