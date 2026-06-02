import React from 'react'
import { useState } from 'react'

const Context = () => {
  const [userText,setUserText]=useState("")
  const [item,setItem]=useState("")
  const [list,setList]=useState([])
  function handleLogin()
  {
    setUserText("Current user:rohan, isAuthenticated: Yes")
  }
  function handleSignout()
  {
    setUserText("Current user:, isAuthenticated: No")
  }
  function handleInput(e)
  {
    setItem(e.target.value)
  }
  function handleAddition()
  {
    if (!item.trim()) return;
    setList([...list,item])
    setItem("");
  }
  function handleRemove(product)
  {
    setList(list.filter(info=>info!==product))
  }
  function handleClear()
  {
    setList([])
  }
  return (
    <div>
      <button id="login-btn" onClick={handleLogin}>Login</button>
      <button id="signout" onClick={handleSignout}>Signout</button>
      <p id="current-user">{userText}</p>
      <input type="text" id="shopping-input" value={item} onChange={handleInput}/>
      <button onClick={handleAddition}>Add</button>
      <ul>
        {list.map((product, index) => (
          <li key={index}>
            <span id={`item-${product}`}>{product}</span>

            <button
              id={`remove-${product}`}
              onClick={() => handleRemove(product)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <button id="clear-list" onClick={handleClear}>
        Clear List
      </button>
    </div>
  )
}

export default Context
