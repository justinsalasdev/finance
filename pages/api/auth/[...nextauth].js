import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const options = {
	// Configure one or more authentication providers
	secret: process.env.JWT_SECRET,

	providers: [
		Providers.Credentials({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: "Credentials",
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				username: { label: "Client ID", type: "text", placeholder: "" },
				password: { label: "Password", type: "password" }
			},
			authorize: async credentials => {
				// Add logic here to look up the user from the credentials supplied
				console.log(credentials)
				const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return Promise.reject("/error")
				} else {
					// If you return null or false then the credentials will be rejected
					return Promise.reject("/error")
					// You can also Reject this callback with an Error or with a URL:
					// return Promise.reject(new Error('error message')) // Redirect to error page
					// return Promise.reject('/path/to/redirect')        // Redirect to a URL
				}
			}
		})
	]

	// A database is optional, but required to persist accounts in a database
	// database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options)
