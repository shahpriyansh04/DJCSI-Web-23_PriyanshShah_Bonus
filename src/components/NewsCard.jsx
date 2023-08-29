function NewsCard({ thumbnail, category, title, image, author, details }) {
  return (
    <div className="bg-[#282454] rounded-3xl flex flex-col">
      <img src={thumbnail} alt="Post thumbnail" className="rounded-t-3xl" />
      <div className="space-y-5 p-6 relative">
        <div className="py-2 px-3 bg-[#6639E4] rounded-full text-xs absolute -top-4 left-5">
          {category}
        </div>
        <div>
          <p className="font-bold text-3xl text-center">{details?.code}</p>
          <p className="mt-2 text-gray-300 text-center">
            {details?.description}
          </p>
          <div className="flex w-full text-2xl mt-2 justify-center">
            <p>1&#8383; = </p>
            <p className="ml-2 font-bold font-sans"> {details?.rate}</p>
            <p
              className="font-semibold"
              dangerouslySetInnerHTML={{ __html: details?.symbol }}
            ></p>
          </div>
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
