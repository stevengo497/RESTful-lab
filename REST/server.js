const express = require('express'); 
const app = express();

// app.get('/videos', (request, response) => {
//     response.send('ALL videos');
// });

// app.get('/videos/:id', (request, response) => { // instead of ID on URL, you can put a number or even a string, it will still get you there
//     response.send('video by ID');
// });

let comedians = [
	{id: 1, name: 'Chris Rock', url: 'https://www.youtube.com/watch?v=tJFS5AFcNtw'},
	{id: 2, name: 'Joe Rogan', url: 'https://www.youtube.com/watch?v=wJv0BgBa0xs'},
  {id: 3, name: 'Mitch Hedberg', url: 'https://www.youtube.com/watch?v=Qqaq7MIcN0A'}
];

app.get('/comedians/:id', (request, response) => {
	let id = request.params.id;
    response.send(comedians[id-1])
});

// app.get('/comedians/:id/videos', (request, response) => {
//     response.send('VIDEOS by comedian');
// });

// app.get('/comedians/:id/videos/:id', (request, response) => {
//     response.send('VIDEO by comedian');
// });

app.listen(3000, () => {
    console.log("I am listening");
});