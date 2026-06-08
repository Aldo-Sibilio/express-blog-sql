import connection from '../config/db.js';

// Index - restituisce la lista di tutti i post
const index = async (request, response) => {
    const [posts] = await connection.query('SELECT * FROM posts');
    response.json(posts);
};

// Show - restituisce un singolo post con i tag
const show = async (request, response, next) => {
    try {
        const id = request.params.id;

        const [posts] = await connection.query('SELECT * FROM posts WHERE id = ?', [id]);

        if (posts.length === 0) {
            return response.status(404).json({ message: `Post con id ${id} non trovato` });
        }

        const post = posts[0];

        const [tags] = await connection.query(`
      SELECT tags.* FROM tags
      JOIN post_tag ON tags.id = post_tag.tag_id
      WHERE post_tag.post_id = ?
    `, [id]);

        post.tags = tags;

        response.json(post);
    } catch (error) {
        next(error);
    }
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