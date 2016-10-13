module.exports = {
  DATABASE_URL: 'postgres://localhost:5432/bdc',
  SESSION_SECRET: 'Optimus Prime is my real dad',
  TWITTER: {
    consumerKey: 'INSERT_TWITTER_CONSUMER_KEY_HERE',
    consumerSecret: 'INSERT_TWITTER_CONSUMER_SECRET_HERE',
    callbackUrl: 'INSERT_TWITTER_CALLBACK_HERE'
  },
  FACEBOOK: {
    clientID: '344778585864647',
    clientSecret: 'e039eb4cb41d382dbb8f5605dbcc01c2',
    callbackURL: '/auth/facebook/callback'
  },
  GOOGLE: {
    clientID: 'INSERT_GOOGLE_CLIENTID_HERE',
    clientSecret: 'INSERT_GOOGLE_CLIENT_SECRET_HERE',
    callbackURL: 'INSERT_GOOGLE_CALLBACK_HERE'
  },
  LOGGING: true,
  NATIVE: true
};
