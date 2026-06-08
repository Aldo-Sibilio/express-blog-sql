import connection from '../config/db.js';

// Index - restituisce la lista di tutti i post
const index = async (request, response) => {
    const [posts] = await connection.query('SELECT * FROM posts');
    response.json(posts);
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
const destroy = async (request, response) => {
    const id = request.params.id;
    await connection.query('DELETE FROM posts WHERE id = ?', [id]);
    response.sendStatus(204);
};

export { index, show, create, update, destroy };