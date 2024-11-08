const http=require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo2</title>
    <style>
        ul
        {
            list-style:none;
            display:flex;
        }
        ul li
        {
            border:1px solid black;
            padding:5px;
            color:black;
            text-align:center;
            width:30px;
            margin-right:10px;
            background-color:rgb(223, 219, 219);
            border-radius:5px;         
        }
        ul li:hover
        {
            background-color:blueviolet;
            color:red;
        }
        ol
        {
            list-style:none;
        }
        ol li
        {
            border: 1px solid black;
            padding:5px;
            color:white;
            background-color:rgb(101, 179, 12);
            width:100px;
            text-align:center;
            margin-bottom:10px;
            border-radius:10px;
        }
        ol li:hover
        {
            background-color:brown;
            color:aqua;
        }

    </style>
</head>
<body>
    <h3>Pagaination</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
    </ul>
    <h3>Navigation Bar</h3>
    <nav>
       <ol>
          <li>Home</li>
          <li>Shop</li>
          <li>Doc</li>
          <li>Fashion</li>
          <li>Contact</li>
        </ol>
    </nav>
</body>
</html>`);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
