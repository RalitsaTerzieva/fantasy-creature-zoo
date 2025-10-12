import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const items = [
    {id: 1, name: "coffee", description: "Really nice coffee"},
    {id: 2, name: "milk", description: "Awesome milk"}
];

// get endpoint that can filter by name
app.get("/examples", (req, res) => {
    const name = req.query.name;
    let result = items;

    if (name) {
        result = items.filter(i => i.name === name);
    }

    res.json(result);
});



app.put("/example/:id", (req, res) => {
    const { id } = req.params.id;
    const { name } = req.body;

    const item = items.filter(i => i.id === id)

    item.name = name
    res.json(item)
})


app.listen(4000, () => console.log("Welcome to port 4000!"))