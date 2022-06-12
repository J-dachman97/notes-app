/** @jsx React.DOM */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
//import './index.css';

import { Low, JSONFile } from 'lowdb'
//import { redirect } from 'express/lib/response'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

const adapter = new JSONFile('db.json')
const db = new Low(adapter)
//db.defaults({ notes: [] }).write
await db.read()
db.data ||= { notes: [] }

const { notes } = db.data
const PORT = 4000;
var id = 0;
//get the highest id that currently exists
for (id in notes) {
    if(notes[id].id > id){
        id = notes[id].id
    }
}



function filterById(jsonObject, id) {
    return jsonObject.filter(function(jsonObject) {
        return (jsonObject['id'] == id);})[0];
    }

app.get('/notes', async (req, res) => {
    //const note = notes.push(req.body)
    await db.write()
    return res.json(notes)
    //res.send(note.toString())
})

app.get('/notes/:id', async (req, res) => {
    var note = filterById(notes, req.params.id);
    return res.json(note)
  })

app.post('/editNote', async (req, res) => {
    for (const id in notes) {
        if(notes[id].id == req.body.id){
            notes[id].text = req.body.text;
            //delete notes[id];
        }
    }
    return res.json(notes)
})

app.post('/deleteNote', (req, res) => {   
    for (const id in notes) {
        if(notes[id].id == req.body.id){
            notes.splice(id, 1);
            //delete notes[id];
        }
    }
    return res.json(notes);
})

app.post('/notes/new', (req, res) => {
    const note = req.body
    id++;

    notes.push({
        ... note, id: id
    })
    
    res.json({ success: true })
})

app.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
  })


  
/*app.get('/posts/:id', async (req, res) => {
  const post = posts.find((p) => p.id === req.params.id)
  res.send(post)
})

app.post('/posts', async (req, res, next) => {
  const post = posts.push(req.body)
  await db.write()
  res.send(post)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})*/