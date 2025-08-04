export function ProfileHeader() {
  return (
    <header className="bg-cream-100 border-b border-sage-200 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 sm:gap-4">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-sage-500 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.2)",
                border: "0.666667px solid rgba(163, 163, 163, 1)",
                aspectRatio: "1 / 1"
              }}
            >
              <span className="text-white font-bold text-lg sm:text-xl">MS</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-black header-name">Margaret Smith</h1>
              <p className="text-black text-xs sm:text-sm header-details">
                Room 204 • Updated on August 4, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
