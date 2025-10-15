export function MotivationSection() {
  return (
    <section
      className="bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 rounded-md px-6 py-4 my-6 animate-pulse"
      role="region"
      aria-label="Motivation professionnelle"
    >
      <div className="rounded-md p-2">
        <div className="flex items-start">
          <div className="w-1 h-24 md:h-16 bg-white mr-4 mt-1"></div>
          <div className="flex-1">
            <div className="font-bold text-3xl text-white mb-1">
              Ma mission :
            </div>
            <div className="font-bold text-2xl text-white">
              Apporter une valeur ajoutée concrète en santé digitale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
