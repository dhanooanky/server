const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'yourfile.zip'); 

  res.writeHead(200, {
    'Content-Type': 'application/octet-stream',
    'Content-Length': stat.size,
    'Content-Disposition': 'attachment; filename=yourfile.zip', 
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

const PORT = 3000; 
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
