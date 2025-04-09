
async function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    
      Math.random() > 0.2 
        ? resolve({ data: "API response data" }) 
        : reject(new Error("API request failed"));
    }, 1500);
  });
}


async function awaitCall() {
  try {
    console.log("Fetching data from API...");
    const response = await fetchDataFromAPI();
    console.log("Data received:", response.data);
  } catch (error) {
    console.error("Error:", error.message);
    console.log("Please try again later.");
  }
}


await awaitCall();
