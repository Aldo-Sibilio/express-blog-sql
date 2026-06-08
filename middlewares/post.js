// middleware per cercare il post tramite id
const findPost = (request, response, next) => {
  const id = parseInt(request.params.id);

  // per ora passiamo solo l'id alla request
  request.postId = id;

  next();
};

export default findPost;