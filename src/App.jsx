import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos(){
  const result=[];

  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {

     
  //const todos = fetchTodos();                     //state lifting: 동일한 상태를 공유하는 하위 컴포넌트를 위해 state를 한단계 위로 올림
  const [todos, setTodos] = useState(fetchTodos()); //state는 리엑트가 추적관리 하며, 값이 변할 때 마다 컴포넌트 값이 리랜더링 됨, state는 반드시 set을 이용하여 값을 변경
              

  const addTodo = (todo)=>{
    localStorage.setItem(todo, todo);
    setTodos((currentTodos)=>{  //function을 파라미터로 넘기면 현재 state를 function에 파라미터로 가져올 수 있음
      return [...currentTodos, todo];
    }); //원본배열 변경을 권장하지 않음 -> 새로운 배열 생성후 set 권장
}


  const RemoveTodo = (todo)=>{  //state를 변경하는 메서드는 해당 파일에 있는 게 좋음. 하위 컴포넌트는 디스플레이 표시를 담당 
    localStorage.removeItem(todo) //여기까지만 해도 리랜더링시 표시에는 문제가 없음
    //todos.splice(index, 1) //배열에서 index번 요소부터 1개 제거, 하지만 일반 배열이라 react는 이를 추적해 리렌더링 해주지 않음
    setTodos(todos.filter(todoItem => todo!==todoItem));  //js는 렉시컬 스코프 기반이기 때문에 콜백함수로 전달돼도 App의 state를 최우선적으로 참조함
  }


  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={RemoveTodo} /> 
    </div>
  )
}

export default App
