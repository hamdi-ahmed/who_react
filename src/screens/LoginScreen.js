// ** imports
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import qs from 'qs'
import axios from 'axios'

// ** Styles
import 'react-toastify/dist/ReactToastify.css';

// ** Links
const href = '#'

const LoginScreen = () => {
	// ** States
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	// ** Handle Login
	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = qs.stringify({
			client_id: 'ro.client',
			client_secret: 'secret',
			grant_type: 'password',
			username,
			password
		})
		try {
			const res = await axios.post(
				'http://web.dev.prosylab.com/PSLAuthenticationAPI/connect/token',
				data,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			)
			// console.log(res.data)
			toast.success("Redirect to dashboard")
			localStorage.setItem('token', JSON.stringify(res.data.access_token))
			window.location.replace(
				'https://www.arcgis.com/apps/dashboards/93070e9f00424cb0988c70a3cb51f54b'
			)
		} catch (err) {
			console.log(`Error: ${err}`)
			toast.error("Invalid Email or Password")
		}
	}
	return (
		<div className="container-fluid mt-5 " style={{ marginBottom: '8rem' }}>
			<div className="row justify-content-center">
				<div className="col-12 col-sm-10 col-md-8 col-lg-6">
					<form onSubmit={handleSubmit} id="login">
						<p>Please login using wims account.</p>
						<div className="mb-3">
							<input
								type="text"
								placeholder="Email Address"
								className="form-control"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<input
								type="password"
								placeholder="Password"
								className="form-control"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="forgotPassword">
							<div className="mb-3 form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="exampleCheck1"
								/>
								<label className="form-check-label" for="exampleCheck1">
									Remember me
								</label>
							</div>
							<span>
								<a href={href}>Forgot Password</a>
							</span>
						</div>
						<div>
							<button
								type="submit"
								className="btn btn-primary btn-block"
								style={{ display: 'block', width: '100%', padding: '1rem 0' }}
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	)
}

export default LoginScreen
