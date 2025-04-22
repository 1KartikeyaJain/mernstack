

// http://localhost:3000/api/convert?to=USD&amount=100


const http = require('http');
const https = require('https');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/convert') {
    const to = url.searchParams.get('to');
    const amount = url.searchParams.get('amount');

    if (!to || !amount) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing required query params: to, amount' }));// JavaScript object(Stringify)
      return;
    }

    const apiUrl = `https://api.frankfurter.app/latest?amount=${amount}&from=INR&to=${to.toUpperCase()}`;

    https.get(apiUrl, (apiRes) => {
      let data = '';
 
      // Collect the incoming chunks
      apiRes.on('data', chunk => {
        data += chunk;
      });

      // When response is complete
      apiRes.on('end', () => {
        try {
          const json = JSON.parse(data);//JSON.parse() → turns string back into object
          const rate = json.rates[to.toUpperCase()];

          const result = {
            from: 'INR',
            to: to.toUpperCase(),
            rate: rate / amount,
            amount: Number(amount),
            converted: rate
          };

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        } catch (e) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Error parsing exchange data' }));
        }
      });
    }).on('error', () => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Error fetching exchange rate' }));
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Currency converter API running at http://localhost:${PORT}`);
});
