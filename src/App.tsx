import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'


function App() {
  
  return (
	<>
		<div className="h-screen flex justify-center items-center bg-(--candy-blush)">

      {/* DIV PRINCIPAL “FLUTUANDO” */}
      	<div className="w-[70vw] h-[90vh] grid grid-rows-[auto_1fr_auto] gap-0 
		       rounded-3xl shadow-3xl bg-white overflow-hidden "
		>
    		<Navbar />
			<Home />
			<Footer />
			

      </div>
    </div>
	</>
    
  )
}

export default App
