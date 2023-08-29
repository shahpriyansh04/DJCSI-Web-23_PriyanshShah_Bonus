import NewsCard from "./NewsCard";
import Post1 from "/post1.jpg";
import Profile1 from "/profile1.jpg";
import Post2 from "/post2.jpg";
import Profile2 from "/profile2.jpg";
import Post3 from "/post3.jpg";
import Profile3 from "/profile3.jpg";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function News() {
  const [price, setPrice] = useState();
  const fetchData = async () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPrice(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(price);
  return (
    <div className="pt-36 pb-12 flex justify-center flex-col space-y-8">
      <p className="text-4xl font-bold">Check out the latest prices</p>
      <div className="grid  grid-cols-3 justify-items-center gap-6">
        <NewsCard
          thumbnail={Post1}
          category="PRODUCTS"
          title="What is the best and most secure crypto wallet of 2021?"
          author="ALEX TURNER"
          details={price?.bpi.USD}
          image={Profile1}
        />
        <NewsCard
          thumbnail={Post2}
          category="TUTORIAL"
          details={price?.bpi.EUR}
          title="How to trade crypto tokens from your phone"
          author="JOHN CARTER"
          image={Profile2}
        />
        <NewsCard
          thumbnail={Post3}
          category="APPS"
          details={price?.bpi.GBP}
          title="5 great crypto apps you should not be missing out"
          author="SOPHIE MOORE"
          image={Profile3}
        />
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          className="py-4 mx-auto bg-[#282454] px-8 rounded-full "
          whileHover={{ opacity: 0.7 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW ALL PRICES
        </motion.button>
      </div>
    </div>
  );
}
export default News;
