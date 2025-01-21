"use client"
import { useState, useEffect } from "react";
export default function Page() {
  const [fruit,setFruit] = useState('None')
  const toBanana = () => {
    setFruit('Banana')}
  const toApple = () => {
    setFruit('Apple')}

    useEffect(() => {
      document.title = `My fruit is ${fruit}`
    }
  )
  return (
    <div>
      <h1>
      {fruit}
      </h1>
      <button onClick={toBanana}>Banana</button>
      <button onClick={toApple}>Apple</button>
    </div>
  );
}