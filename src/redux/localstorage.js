// Load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("allData");
    console.log(serializedState);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

// Save state to localStorage
export const saveState = (state) => {
  try {
    //console.log(state);
    const serializedState = JSON.stringify(state.allData);
   //console.log("jrloemgjrlemgj", state);
    localStorage.setItem("allData", serializedState);
    
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

