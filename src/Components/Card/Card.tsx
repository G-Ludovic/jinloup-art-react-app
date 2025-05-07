function Card({ specie, image }) {
  return (
    <figure>
      <img src={image} alt="animaux" />
      <figcaption>{specie}</figcaption>
    </figure>
  );
}

export default Card;
