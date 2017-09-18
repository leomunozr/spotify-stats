if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "production") {
  var redirect_uri = 'https://leomunozr.github.io/spotify-stats/';
} else {
  var redirect_uri = 'http://localhost:8080';
}

const config = {
  "auth_uri": "https://accounts.spotify.com/authorize",
  "client_id": "0e1bc905c38f456ba2991f8be45962ca",
  "response_type": "token",
  "redirect_uri": redirect_uri,
  "state": "123",
  "scope": [
    "user-library-read",
    "user-top-read"
  ],
  "show_dialog": "false"
};

export default config;
