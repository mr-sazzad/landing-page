
export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className="md:text-2xl text-xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent font-sans">
            LandingPro
          </span>
        </div>
        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium tracking-wide">
          Landing Solutions
        </span>
      </div>
    </div>
  )
}
