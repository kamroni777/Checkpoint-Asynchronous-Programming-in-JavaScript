async function iterateWithAsyncAwait(array) {
  for (const value of array) {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    console.log(value);
  }
}


iterateWithAsyncAwait(['first', 'second', 'third']);