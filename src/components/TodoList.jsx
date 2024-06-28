function TodoList({ todos, onTodoRemove }){   //상위 컴포넌트로 프로퍼티 전달 (공유 state, 단 state가 아닌 프로퍼티로 저장됨)

    return(
      <div>
        <ul>  
          {todos.map((todo, index)=>{
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={()=>onTodoRemove(todo)}>remove</button>
              </li>
            )
          })}
        </ul> 
      </div>  
    )
}

export default TodoList;