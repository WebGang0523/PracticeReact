import React, { useState, useEffect, useRef } from 'react'

export default function Demo() {
  const [sum, setSum] = useState(0)
  const firstRenderRef = useRef(true)

  useEffect(() => {
    // 当你在strict mode in development时，这是一个来自React18本身的问题。基本上，即使在React18中卸载之后，核心团队仍在试图改变组件的状态。useEffect两次被调用与此功能有关。
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    console.log('@')
  }, [])
  function add() {
    setSum(sum + 1)
  }

  return (
    <div>
      <h1>求和为{sum}</h1>
      <button onClick={add}>点击加1</button>
    </div>
  )
}
