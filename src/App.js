import JumbotronComp from './Component/Header/JumbotronComp';
import NavbarComp from './Component/Navbar/NavbarComp';
import logo from './logo.svg';
import './App.css';
import TargetSectionComp from './Component/Content1/TargetSectionComp';
import TrackAnywayComp from './Component/Content2/TrackAnywayComp';
import TrackCaloriesComp from './Component/Content3/TrackCaloriesComp';
import SponsorComp from './Component/Content4/SponsorComp';
import JContentComp from './Component/Content5/JContentComp';


function App() {
  return (
    <div className='App'>
      <NavbarComp />
      <JumbotronComp />
      <TargetSectionComp />
      <TrackAnywayComp />
      <TrackCaloriesComp />
      <JContentComp />
      <SponsorComp />
    </div>
  );
}

export default App;
