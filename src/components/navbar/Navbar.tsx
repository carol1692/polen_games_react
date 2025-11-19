export default function Navbar(){
    return(
       <>
            
            
            <nav className=" flex flex-col justify-center items-center">
                {/* <div className="text-(--merlot-color) text-6xl font-bold rubik-bubbles-regular pb-3">Pólen Games</div> */}
                <figure className="h-[15vh] w-full bg-(--bg-color) pt-2"><img className="w-full h-full object-contain" src="/banner_2.svg" alt="" /></figure>
                <div className="bg-white w-full h-11 bg-repeat-x bg-size-[80px] bg-[url('/circle.svg')]"></div>
                <div className="flex gap-x-8 delius-regular font-extrabold text-(--merlot-color) text-xl bg-white" >
                        <a href="">Home</a>
                        <a href="">Categorias</a>
                        <a href="">Sobre Nós</a>
                        <a href="">Contato</a>
                        <a href=""> Sair </a>
                </div>
            </nav>
        </>

         
    )
}