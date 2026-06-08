// Index - restituisce la lista di tutti i post
const index = (request, response) => {
  response.json({ message: 'Lista dei post' });
};

// Show - restituisce un singolo post
const show = (request, response) => {
  response.json({ message: 'Dettaglio del post' });
};

// Store - crea un nuovo post
const create = (request, response) => {
  response.json({ message: 'Creazione di un nuovo post' });
};

// Update - modifica un post esistente
const update = (request, response) => {
  response.json({ message: 'Modifica del post' });
};

// Destroy - cancella un post
const destroy = (request, response) => {
  response.json({ message: 'Cancellazione del post' });
};

export { index, show, create, update, destroy };