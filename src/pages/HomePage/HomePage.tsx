import Card from "../../Components/Card/Card";
import "./HomePage.css";

function HomePage() {
  return (
    <main>
      <Card
        specie="Loup"
        image="https://cdn.pixabay.com/photo/2024/10/30/21/50/wolf-9162574_1280.jpg"
      />
      <Card
        specie="Husky"
        image="https://cdn.pixabay.com/photo/2024/04/13/02/18/pet-8693062_1280.jpg"
      />
    </main>
  );
}

export default HomePage;
