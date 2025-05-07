function Card({ specie }) {
  return (
    <figure>
      <img
        src="https://cdn.pixabay.com/photo/2024/10/30/21/50/wolf-9162574_1280.jpg"
        alt="en cours"
      />
      <figcaption>{specie}</figcaption>
    </figure>
  );
}

export default Card;
