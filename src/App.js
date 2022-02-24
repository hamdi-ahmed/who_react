// ** React Imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// ** Screens
import LandingPage from './screens/LandingPage'
import LoginScreen from './screens/LoginScreen'

// ** Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// ** Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route>
					<Route path="/" element={<LandingPage />} />
				</Route>
				<Route>
					<Route path="/login" element={<LoginScreen />} />
				</Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
