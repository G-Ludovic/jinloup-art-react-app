interface CardProps {
  specie: string;
  image: string;
}

function Card({ specie, image }: CardProps) {
  return (
    <figure>
      <img src={image} alt="animaux" />
      <figcaption>{specie}</figcaption>
    </figure>
  );
}

export default Card;
