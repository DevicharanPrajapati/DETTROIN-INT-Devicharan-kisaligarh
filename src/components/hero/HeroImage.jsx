const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-amber-200/40 blur-3xl"></div>

      {/* Main Image */}
      <img
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
        alt="Students"
        className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl object-cover"
      />

      {/* Top Floating Card */}
      <div className="absolute -top-5 -left-5 z-20 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
        <h3 className="text-2xl font-bold text-gray-900">20+</h3>
        <p className="text-sm text-gray-500">Years of Excellence</p>
      </div>

      {/* Bottom Floating Card */}
      <div className="absolute -bottom-5 -right-5 z-20 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
        <h3 className="text-2xl font-bold text-amber-500">2000+</h3>
        <p className="text-sm text-gray-500">Happy Students</p>
      </div>
    </div>
  );
};

export default HeroImage;