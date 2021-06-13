import React, { useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)

	function incrementCount() {
		setCount(nextCount => nextCount + 1)
	}

	function decrementCount() {
		setCount(prevCount => prevCount - 1)
	}

	return (
		<>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
		</>
	)
}
