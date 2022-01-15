

const Card = (props) => {
    
  return (
    <article className="flex-column centrado estilo-tarjetas">
      <h2>{props.titulo}</h2>
      <h3>{props.subtitulo}</h3>
      <div>
      <img className="imagen-tarjeta" src="https://placekitten.com/g/200/300" alt="" />
      </div>
    </article>
  );
};

export default Card;
