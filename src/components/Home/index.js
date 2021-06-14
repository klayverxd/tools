import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Title } from '../../styles'

function Home() {
	const history = useHistory()

	return (
		<div>
			<Title>Home</Title>
			<h3>Hello, everyone</h3>
			<Button onClick={() => history.push('/counter')}>Counter</Button>
		</div>
	)
}

export default Home
