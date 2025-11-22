export default function Footer() {
    return(
        <> 
            {/* FOOTER */}
            <footer className="w-full flex flex-col justify-center items-center rounded-b-2xl bg-(--bg-color)">
                <div className="bg-white w-full h-5 bg-repeat-x bg-size-[40px] bg-[url('/circle_reverse.svg')]"></div>
                <div className="flex justify-center items-center">
                     <p className="text-(--merlot-color) font-bold pb-4 comfortaa-font text-sm sm:text-base py-3 sm:py-4 ">Ana Lemos - 2025</p>
                </div>
            </footer>
        </>
    )
}