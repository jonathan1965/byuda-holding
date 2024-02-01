const StatsSections = () => {
  return (
    <div className="py-10 bg-dark-red-200 lg:py-32 text-dark-red">
      <div className="flex flex-col justify-center lg:flex-row gap-16 lg:gap-44">
        <div className="flex flex-col items-center justify-center">
          <span className="block text-6xl font-roboto">0000</span>
          <span className="font-medium">JOBS CREATED</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="block text-6xl font-roboto">0000</span>
          <span className="font-medium">CLIENTS SERVED</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="block text-6xl font-roboto">0000</span>
          <span className="font-medium">EMPLOYEES</span>
        </div>
      </div>
    </div>
  );
};
export default StatsSections;
