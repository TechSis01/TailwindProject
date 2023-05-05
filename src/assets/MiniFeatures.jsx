
function MiniFeatures({photo,header,text,beauty}) {
  return (
    <div className={beauty}>
      <img src={photo} className="w-11"></img>
      <div className="text-center text-lg">
        <p className="text-indigo-900 font-bold">{header}</p>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
}

export default MiniFeatures;
