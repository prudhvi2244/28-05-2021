import First from './components/First'
import Greet from './components/Greet';
import Second from './components/Second'
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="container">
    
        <h2 className='text-danger'>Welcome To React By RAJ</h2>
        {/* <First></First>
        <Second></Second> */}
        {/* <Greet eid='1' ecity='Bangalore' ename='Raj'/>
        <Greet eid='2' ecity='Goa' ename='Prudhvi'/>
        <Greet eid='3' ecity='Hyderabad' ename='Rajeev'/> */}
        <Welcome name='Rajeev' city='Goa'/>
        <Welcome name='Prudhvi' city='Hyderabad'/>
    </div>
  );
}

export default App;
