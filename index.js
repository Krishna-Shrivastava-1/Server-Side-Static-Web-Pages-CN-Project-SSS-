
import http from 'http';
import fs from 'fs/promises'; // Using promises consistently

const port = 5500;

const requestListner = async function (req, res) {
    const url = req.url;
    try {
        res.setHeader("Content-Type", "text/html");

        switch (url) {
            case '/':
                res.writeHead(200);
                const homepage = await fs.readFile('./index.html', 'utf-8');
                res.end(homepage);
                break;
            case '/service':
                res.writeHead(200);
                const service = await fs.readFile('./service.html', 'utf-8');
                res.end(service);
                break;
            case '/about':
                res.writeHead(200);
                const about = await fs.readFile('./about.html', 'utf-8');
                res.end(about);
                break;
            default:
                res.writeHead(404);
                const notFoundPage = await fs.readFile('./404.html', 'utf-8');
                res.end(notFoundPage);
                break;
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500);
        res.end(`Server error is - ${err.message}`);
    }
};

const server = http.createServer(requestListner);
server.listen(port, () => {
    console.log("Server running on port -", port);
});