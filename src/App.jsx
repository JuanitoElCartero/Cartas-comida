import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Platos Disponibles</h1>
      <div className="card-container">
        <Card
          title="Plato Vegano"
          description="Un delicioso salteado de verduras frescas, como brócoli, pimientos y zanahorias, combinado con quinoa y aderezado con salsa de soja y jengibre. Este plato es rico en nutrientes, lleno de sabor y ideal para quienes buscan opciones saludables y sostenibles.."
          image="https://www.vegkitchen.com/wp-content/uploads/2020/08/vegan-stir-fry-1.jpg"
        />
        <Card
          title="Plato Carnivoro"
          description="Un jugoso filete de res a la parrilla, sazonado con hierbas aromáticas y acompañado de puré de papas y espárragos asados. Este plato ofrece una experiencia sabrosa y reconfortante, perfecta para los amantes de la carne que buscan disfrutar de un clásico en la mesa."
          image="https://images.unsplash.com/photo-1603065000515-59f5eaa4e53c"
        />
      </div>
    </div>
  );
}

export default App;
