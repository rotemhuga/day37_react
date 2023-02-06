import './App.css';
import Cars from './components/Cars';

function App() {
  const AllCars = [
    {
    Image: <img src="https://www.bmw.co.il/content/dam/bmw/common/all-models/m-series/i4-m50/2021/onepager/bmw-i4-m50-onepager-mc-product-highlights-hero-desktop.jpg.asset.1625831868646.jpg" alt="BMW" className='img' />,
    name: "My BMW",
    color: "blue",
    year: "2011"
    }, 
    {
    Image: <img src="https://i.pinimg.com/originals/da/3e/10/da3e1081491264c1e9e82ee7ad4ec874.jpg" alt="Mercedes" className='img' />,
    name: "My Mercedes",
    color: "gray",
    year: "2018"
    },
    {
    Image: <img src="https://dealer-content.s3.amazonaws.com/images/models/toyota/2021/tacoma/colors/cement.png" alt="Toyota" className='img' />,
    name: "My Toyota",
    color: "gray",
    year: "2018"
    },
    {
    Image: <img src="https://media.ed.edmunds-media.com/alfa-romeo/giulia/2021/oem/2021_alfa-romeo_giulia_sedan_quadrifoglio_fq_oem_1_1600.jpg" alt="Alpha Romeo" className='img' />,
    name: "My Alpha Romeo",
    color: "red",
    year: "2012"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div className="cars">
          {
            AllCars.map((car) => {return <Cars image = {car.Image} name = {"name:" + " " + car.name} color = {"color:" + " " + car.color} year = {"year:" + " " + car.year}/>}) 
          }
        </div>
      </header>
    </div>
  );
}

export default App;
