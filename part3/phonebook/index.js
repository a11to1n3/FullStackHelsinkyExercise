const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: false }));
morgan.token("body", function(req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :req[content-length] :response-time ms :body")
);
app.use(bodyParser.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  let count = persons.length;
  const info = {
    content: `Phonebook has info for ${count} people`,
    date: new Date(Date.now())
  };
  response.json(info);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(person => {
    if (person.id === id) {
      return person;
    }
  });
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({ error: "content missing" });
  } else if (
    persons.find(person => {
      if (person.name === body.name) {
        return true;
      }
    })
  ) {
    return response.status(400).json({ error: "name must be unique!" });
  }

  console.log(body);

  const person = {
    name: body.name,
    number: body.number,
    id: parseInt(Math.random() * 1000)
  };

  persons = persons.concat(person);
  response.json(persons);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
