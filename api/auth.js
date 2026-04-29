// GitHub OAuth – Schritt 1: Weiterleitung zur GitHub-Anmeldeseite
// Wird von Decap CMS aufgerufen, wenn der Nutzer auf „Login" klickt.
export default function handler(req, res) {
  const { host } = req.headers;
  const redirectUri = `https://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id:    process.env.GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope:        'repo',
  });

  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
