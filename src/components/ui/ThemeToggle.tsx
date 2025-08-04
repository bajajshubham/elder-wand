import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      {/* Full theme toggle for screens >= 640px */}
      <div className="hidden sm:flex items-center gap-2 rounded-full p-1 backdrop-blur-xs border" style={{ backgroundColor: "rgba(225, 225, 225, 0.7)", borderColor: "#babab9" }}>
        <button
          onClick={toggleTheme}
          className={`p-1 rounded-full transition-all duration-200 ${
            !isDark ? 'bg-white shadow-xs' : ''
          }`}
          style={{ backgroundColor: !isDark ? undefined : "#babab9" }}
          aria-label="Light mode"
        >
          <Sun className={`w-4 h-4 ${!isDark ? 'text-black' : ''}`} style={{ color: !isDark ? undefined : "white" }} />
        </button>

        <button
          onClick={toggleTheme}
          className="relative w-8 h-4 rounded-full transition-colors duration-200"
          style={{ backgroundColor: "rgba(158, 158, 159, 0.6)" }}
          aria-label="Toggle theme"
        >
          <div
            className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-xs transition-transform duration-200 ${
              isDark ? 'translate-x-4' : 'translate-x-0.5'
            }`}
          />
        </button>

        <button
          onClick={toggleTheme}
          className={`p-1 rounded-full transition-all duration-200 ${
            isDark ? 'bg-white shadow-xs' : ''
          }`}
          style={{ backgroundColor: isDark ? undefined : "#babab9" }}
          aria-label="Dark mode"
        >
          <Moon className={`w-4 h-4 ${isDark ? 'text-black' : 'text-white'}`} />
        </button>
      </div>

      {/* Icon-only theme toggle for screens < 640px */}
      <button
        onClick={toggleTheme}
        className="sm:hidden p-2 rounded-full backdrop-blur-xs border transition-all duration-200"
        style={{ backgroundColor: "rgba(225, 225, 225, 0.7)", borderColor: "#babab9" }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-black" />
        ) : (
          <Sun className="w-4 h-4 text-black" />
        )}
      </button>
    </>
  )
}
