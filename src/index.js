import React from 'react'
import ReactDOM from 'react-dom'
import { SpringContext } from 'react-spring'
import 'bootstrap/dist/js/bootstrap'

// ** Components
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<SpringContext cancel={true}>
			<App />
		</SpringContext>
	</React.StrictMode>,
	document.getElementById('root')
)
