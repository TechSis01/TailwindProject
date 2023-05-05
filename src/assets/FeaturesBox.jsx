function FeaturesBox({image,firstText,header,pitch}) {
  return (
    <div className="py-10 leading-7">
      <div className="flex items-center flex-col md:flex-row">
        <img src={image} className="w-20"></img>
        <div className="text-center md:text-left">
          <p className="text-gray-500">{firstText}</p>
          <h2 className="text-2xl font-bold">{header}</h2>
        </div>
      </div>
      <p className="text-center text-gray-500 pt-5 md:text-left px-5">
       {pitch}
      </p>
    </div>
  );
}

export default FeaturesBox;
