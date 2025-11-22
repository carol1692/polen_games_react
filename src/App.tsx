import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  
  return (
	<>
	<div className="h-screen flex justify-center items-center bg-(--container-yellow) ">

      {/* DIV PRINCIPAL “FLUTUANDO” */}
      	<div className="w-[70vw] sm:h-screen md:h-[90vh] sm:mt-0 grid grid-rows-[auto_1fr_auto] 
		      rounded-3xl shadow-3xl gap-2  bg-(--container-yellow) overflow-auto md:overflow-hidden"
		>
			<div>
				<Navbar />
			</div>   
			<div className='gap-0 '>
				<Home />
				<Footer />
			</div>
			

      </div>
    </div>
	</>
    
  )
}

export default App
