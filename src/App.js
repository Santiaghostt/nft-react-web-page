import './App.css';
import Review from './components/Review';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Review texto="Me gusto mucho la pelicula, la volveria a ver"
      nombre="Misato Okinawa"
      cargo="Jefe de recursos humanos"
      imagen="animeGRL"/>
      
      <Review texto="Definitivamente una obra maestra, me gustó todo, hicieron un muy excelente trabajo"
      nombre="Eladio carrion"
      cargo="Estrella musical"
      imagen="EladioCarrion"/>

      <Review texto="Tuvo muchos giros de trama, pero en general estuvo espectacular"
      nombre="Pisculichi"
      cargo="Deportista"
      imagen="MasterChief"/>
    <div className='row d-flex justify-content-center'>
      <row className="col-12 col-lg-4">
      <Card
      img="NFT"
      name="Amatista #5555"
      desc="En la inmensidad del espacio se encuentra la especialidad de la vida"
      imgETH="icon-ethereum"
      imgCLK="icon-clock"
      imgAVT="image-avatar"
      creator="Jules Wyvern"/>
      </row>
      <row className="col-12 col-lg-4">
      <Card
      img="NFT2"
      name="Emerith #7485"
      desc="La divinidad converge con la naturaleza del todo y a su vez se experimenta mediante ella"
      imgETH="icon-ethereum"
      imgCLK="icon-clock"
      imgAVT="reinhardt"
      creator="Reinhardt Wilhelm"/>
      </row>
      <row className="col-12 col-lg-4">
      <Card
      img="NFT3"
      name="Ambar #1947 "
      desc="En la inmensidad del espacio se encuentra la especialidad de la vida"
      imgETH="icon-ethereum"
      imgCLK="icon-clock"
      imgAVT="moira"
      creator="Moira O'Deorain"/>
      </row>
      </div>
    </div>
  );
}

export default App;
