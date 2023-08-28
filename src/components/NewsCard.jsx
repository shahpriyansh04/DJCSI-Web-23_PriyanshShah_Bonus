function NewsCard({ thumbnail, category, title, image, author }) {
  return (
    <div className="bg-[#282454] rounded-3xl flex flex-col">
      <img src={thumbnail} alt="Post thumbnail" className="rounded-t-3xl" />
      <div className="space-y-5 p-6 relative">
        <div className="py-2 px-3 bg-[#6639E4] rounded-full text-xs absolute -top-4 left-5">
          {category}
        </div>
        <div className="">
          <p className="font-bold text-xl">{title}</p>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            dapibus dui eget mattis. Nulla eu leo nec justo vulputate tincidunt.
          </p>
        </div>
        <hr />
        <div className=" flex space-x-4 items-center">
          <img src={image} alt="Author Image" className="h-12 rounded-full" />
          <div>
            <p className="font-bold text-lg">{author}</p>
            <p className="font-light">SEPTEMBER 1,2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
