function Navbar() {
  return (
    <div className="px-5 py-6 flex justify-between text-xl">
      <div>
        <h3 className="sm:text-2xl  lg:text-4xl">AVRITI</h3>
      </div>
      <div className="flex gap-4 items-centersm:text-2xl  lg:text-4xl group">
        <a href="https://theavriti.com" className="group-hover:text-blue-500">
          www.avriti.com
        </a>
      </div>
    </div>
  );
}

export default Navbar;
