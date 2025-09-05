import HeroSection from "../components/HeroSection";
import book from "../assets/book-cover.jpg";

function Home() {
  return (
    <>
    <HeroSection/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="p-4 border-1 border-gray-300 rounded">
            <img src={book} alt="" className="w-full h-70"/>
            <div className="text-center space-y-2">
              <h1>Book Title</h1>
              <p>description</p>
              <div className="flex flex-wrap">
                {['travel', 'knowledge', 'fantasy', 'horror'].map(genre => (
                  <span className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-400"> {genre} </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;
