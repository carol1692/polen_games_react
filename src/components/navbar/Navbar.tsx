export default function Navbar(){
    return(
       <>
            <nav className="w-full flex flex-col justify-center items-center rounded-2xl bg-white">
                <figure className="lg::h-[20vh] sm:h-[15vh] w-full bg-(--bg-color) pt-2"><a href=""><img className="w-full h-full object-contain" src="/banner_3.svg" alt="" /></a></figure>
                <div className="w-full h-11 bg-repeat-x bg-size-[80px] bg-[url('/circle.svg')]"></div>
                 <div className="
                                w-full 
                                flex flex-col sm:flex-row        /* mobile: coluna | desktop: linha */
                                gap-y-3 sm:gap-y-0               /* espaçamento vertical no mobile */
                                sm:gap-x-8                       /* espaçamento horizontal no desktop */
                                dynapuff-font font-bold text-(--merlot-color)
                                text-lg sm:text-xl               /* fonte menor no mobile */
                                m-2 p-2 
                                items-center justify-center
">
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
