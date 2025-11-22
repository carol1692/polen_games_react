import Carousel from "../../components/carousel/Carousel";

export default function Home() {
  return (
    <>
      {/* CONTEÚDO */}
		<main className="w-full flex flex-col justify-start items-center bg-white rounded-t-2xl pb-4">
			<header className="border-(--merlot-color) text-(--merlot-color) text-3xl rubik-bubbles-regular rounded-2xl w-full p-4">
				Games
			</header>
			<div className="flex justify-center items-center w-[70vw] p-3">
				<Carousel />
				
			</div>
			
		</main>

    </>
       
  )
}