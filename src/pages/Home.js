import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
	const history = useHistory()

	return (
		<div>
			<h1>Home</h1>
			<h3>Hello, everyone</h3>
			<button onClick={() => history.push('/counter')}>Counter</button>
		</div>
	)
}

export default Home
