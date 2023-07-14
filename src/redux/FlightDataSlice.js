import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../redux/localstorage";

const localdata = JSON.parse(localStorage.getItem("allData"));
// console.log("localdata: ", localdata.manipulateForm.data);
const getlocaldata = localdata;
const initialState = {
  allData: getlocaldata || [],
};

const FlightDataSlice = createSlice({
  name: "FlightBookingForm",
  initialState,
  reducers: {
    select(state, action) {
      state.allData.push(action.payload);
    },

    updateTodo(state, action) {
      const { id, updatedTodo } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      state.allData.push(updatedTodos);
    },

//     deletee(state, action) {
// return{
//       ...state
//       state.allData : state.allData.filter(
//           (todo) => console.log(todo.id)  !== action.payload)
// }
    
//   },        
}
});

export const {select, updateTodo, deletee } =
  FlightDataSlice.actions;
export default FlightDataSlice.reducer;
