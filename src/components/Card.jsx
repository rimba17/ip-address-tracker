const Card = ({ data }) => {
  const fieldCardStyle =
    "text-center text-g400 text-xs font-bold md:text-sm md:text-start";
  const contentCardStyle =
    "text-center text-g950 font-bold text-sm md:text-xl md:text-start";
  return (
    <div className="grid grid-cols-1 gap-4  w-full bg-white rounded-md shadow p-4 md:grid-cols-4 md:gap-0">
      <div className="md:px-3 md:border-r md:border-g400">
        <p className={fieldCardStyle}>IP ADDRESS</p>
        <p className={contentCardStyle}>{data?.ip}</p>
      </div>
      <div className="md:px-3 md:border-r md:border-g400">
        <p className={fieldCardStyle}>LOCATION</p>
        <p className={contentCardStyle}>
          <span className="block">{data?.location?.country}</span>
          <span>{data?.location?.region}</span>
        </p>
      </div>
      <div className="md:px-3 md:border-r md:border-g400">
        <p className={fieldCardStyle}>TIMEZONE</p>
        <p className={contentCardStyle}>UTC {data?.location?.timezone}</p>
      </div>
      <div className="md:px-3">
        <p className={fieldCardStyle}>ISP</p>
        <p className={contentCardStyle}>{data?.isp}</p>
      </div>
    </div>
  );
};

export default Card;
