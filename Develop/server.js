//  bring in dependencies 
const express = require('express');
const api = require('./routes/index.js');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

//  configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));




app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 👽`)
);

//  Routes 
    // homepage 
        // eg app.get('/')
        // send back the index.html
    // notes
        // eg app.get('/notes')
    
    // notes api 
        // app.delete('/api/notes/:noteId')

        // app.post('/api/notes')

        // app.get('/api/notes')

        // 1st Task = (Psuedo Code) => {
        //     *The challenge is extremely similar to Mini Project*
        //     app.get('/', (req, res) => {   //you know this is html because it's a single '/' without params - indicating homepage
        //     On browser:
        //         When you:
        //         - click 'start' -> ".com/notes"  //html path to notes.js
        //         - click 'trash' icon -> app.delete()
        //         - click '+' icon -> app.post()
        //     '/public' link I found very helpful: https://expressjs.com/en/starter/static-files.html
        //     };
        //     2nd Task = (Look @ Starter Code) => {
        //     npm i && node index.js
        //     Structure folders :
        //      - server.js @ root
        //      - db
        //      - helpers
        //      - routes - include files /index.js & /notes.js  -  (because modularization. Look into Activity 22 for more info)
        //     Server.js (use Boiler Plate above):
        //      - bring in dependencies
        //      - configure middleware (must come before api routes)
        //      - api routes
        //     };