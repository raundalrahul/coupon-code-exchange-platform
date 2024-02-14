import Express from 'express'

const app = Express()

app.get('/',(req,res)=>{
    res.send('This is Home Page');
})

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            name:"Joke 1",
            joke:"This is Joke 1"
        },
        {
            id:2,
            name:"Joke 2",
            joke:"This is Joke 2"
        },
        {
            id:3,
            name:"Joke 3",
            joke:"This is Joke 3"
        }
    ];
    res.json(jokes)
})

app.listen(3000, ()=> console.log("Listening..."))