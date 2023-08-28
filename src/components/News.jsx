import NewsCard from "./NewsCard";
import Post1 from "/post1.jpg";
import Profile1 from "/profile1.jpg";
import Post2 from "/post2.jpg";
import Profile2 from "/profile2.jpg";
import Post3 from "/post3.jpg";
import Profile3 from "/profile3.jpg";
function News() {
  return (
    <div className="pt-36 pb-12 flex flex-col space-y-8">
      <p className="text-4xl font-bold">Browse our latest news</p>
      <div className="grid  grid-cols-3 justify-items-center gap-6">
        <NewsCard
          thumbnail={Post1}
          category="PRODUCTS"
          title="What is the best and most secure crypto wallet of 2021?"
          author="ALEX TURNER"
          image={Profile1}
        />
        <NewsCard
          thumbnail={Post2}
          category="TUTORIAL"
          title="How to trade crypto tokens from your phone"
          author="JOHN CARTER"
          image={Profile2}
        />
        <NewsCard
          thumbnail={Post3}
          category="APPS"
          title="5 great crypto apps you should not be missing out"
          author="SOPHIE MOORE"
          image={Profile3}
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="py-4 mx-auto bg-[#282454] px-8 rounded-full ">
          VIEW ALL ARTICLES
        </button>
      </div>
    </div>
  );
}
export default News;
