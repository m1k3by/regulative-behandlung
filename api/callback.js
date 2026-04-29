// GitHub OAuth – Schritt 2: Code gegen Token tauschen und an Decap CMS zurückgeben.
// GitHub leitet nach erfolgreicher Anmeldung hierher zurück.
export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    res.status(400).setHeader('Content-Type', 'text/plain').end('Kein OAuth-Code empfangen.');
    return;
  }

  // Token beim GitHub-Server abholen
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id:     process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenRes.json();

  if (!data.access_token) {
    const grund = data.error_description || data.error || 'Unbekannter Fehler';
    res.status(400).setHeader('Content-Type', 'text/plain').end(`OAuth-Fehler: ${grund}`);
    return;
  }

  // Token sicher als JSON-String kodieren – verhindert XSS durch Sonderzeichen
  const nachricht = JSON.stringify(
    JSON.stringify({ token: data.access_token, provider: 'github' })
  );

  // Ergebnis per postMessage an das CMS-Fenster zurücksenden
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"></head><body>
<script>
(function () {
  var msg = 'authorization:github:success:' + ${nachricht};
  function receiveMessage(e) {
    window.opener.postMessage(msg, e.origin);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body></html>`);
}
