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
  FIREBASE: {
    type: 'service_account',
    project_id: 'bombsquad-74087',
    private_key_id: '3d37c978854770eabfd40934970ce293082cc09f',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDUMVhug4aCqrl\nAchPKhTM1prXK0FlsLxEuyuR5FX2bar7CY7x2z4tupM5aN0KnhFadZFHqRQ6VVzl\nec6LJQZb0xU2jwzRTAKE2IsYnbgIIKxKp6MJ3qkyL0yKlE5giC1vvpgOZdadRYDd\nvEIgc/yTorMPlyusBu6RrYebhPWlX6L7bUONXiZfrZavgTCnMbUXf7Uw8t/VLP4E\nwKOi84MN74V4sP3piRLx4L8AK3yY+IofXr0jZKU2QqRbtRvWOxX3LyHQrDutOMpY\ndYqknNJ7tzAXF9jL/rJFqCLH3yvQR7mBnfFk5CcmaWRIWYWZ74aa2jyz2aHhcO80\nw2YdFMG5AgMBAAECggEAcNQhIgJcERkmfeKYt3qkx2wVyMTZI4iESeQiGEZijlfu\nFNUBuZ+gfMQyNlDomDCV777I7S+0WrpjTsEd2u3JjZQTxg+/JM0XC20YdWDvJerR\n/NJ4ccQp067VNZzU5hjkvo/IwVB9OR8kgXM2dA7s0tCDRjda6Cac/JTVKLcXPK9P\nPRx2DhuY6bRkfU491fqJb0pYERwyEVS6pccu+ACiHX2eqpFSQ1D3oT3Wxftf1RgQ\nBCETQ70BqujDpfl1X9IE/FFCfjh4R5t2S40oQKhmk2XgH3y543WgaONjfFTGEZzf\nqH2vjP/nwB6kvjZr2GZXk6pGFmiS9yAhobbzXm5i8QKBgQDmcnPVeghtOK0jttCY\nweGtwD/p36Rov9iS0TIhHcCkBKDX+DcxmYwMzGyl9jYzhZmEOT2b7rtq2jcRS3wN\nrROxVkmUTQCKAPyvtiitftOfePIt3lrV+i9NSN41iNpWNPODSqA39NtXOOAhxhx4\nCB6jFhPSJkj/u3YcQwodFnjJHQKBgQDY+Q/pi2ipzPwewqgzaXVis9QMEtTL6H/g\nuiP77DukArdbsB7Uugw362K4M9Vzl260Bi/m4OfqQ9kc984IJ36aYHejjFizkocU\nvMwVjNVXlKl2u+oAm28XiGWhmHbG6s8g27BtrdeYA2bPBc3mZGUR5FXwngFpwzwQ\nlI3OMxIUTQKBgHfpmmi9BWGAGmf5GvZB/OLipN9Xpj9zhIhxHrqotrMiTWfUGzRO\nB9gpD2gUhAOvQ0DQYEShpxhk0D7JnpWnOBYRJlxq7RrihJoSGXyeABR9ZNeFWpL5\nil+WyTnmKmatSwFIdbJoUTJDwC0S34F+CCMou8ugbF/V9hGiuMKGDPfpAoGAYXND\n1VY69QDPQBWXrDeydFlmZOHUV50eSlXwMYcBpoFdzz2EK3FAaaE8HpWRSjB6lTqu\nKxlasFo22o7mJ71tXHL1aSxw7n5iU0sUsp0leQeZMW3nBMzLEZu+YdzzhBYUX6Ks\nVCafTXRBqbvmpZLz3hxbCQ4+fj0k7iF6q2E+voUCgYEAtd9n24UXjbJH969lbI+r\nMnDr7o9ubnClxi+dU7DmCnMzTm70WbR4qW7yBAA6AJ8yYW2t0YWtgMIqP6tdozGT\nCHO31VDuGgCQ1BtvRWDSiAsnAfBTK4ARWLCLQZnrnF2LSAX0wymifSjZ2VUMnHqO\nfyCaVgibT3y+U/HhU9PSAoc=\n-----END PRIVATE KEY-----\n',
    client_email: 'bombsquadrebase@bombsquad-74087.iam.gserviceaccount.com',
    client_id: '111604275204254363774',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://accounts.google.com/o/oauth2/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/bombsquadrebase%40bombsquad-74087.iam.gserviceaccount.com'
  },
  LOGGING: true,
  NATIVE: true
};