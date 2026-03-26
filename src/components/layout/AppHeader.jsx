export function AppHeader({ items, currentSection, onNavigate, favoriteCount, showChineseLabels }) {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0 cursor-pointer" onClick={() => onNavigate("home")}>
          <img
            src="/ispa-logo.svg"
            alt="Logo ISPA"
            className="w-14 h-9 sm:w-[72px] sm:h-11 object-contain bg-white rounded-md shadow-sm ring-1 ring-slate-100 flex-shrink-0"
          />
          <div className="min-w-0">
            <span className="font-bold text-slate-800 block leading-tight truncate">Prompt Studio</span>
            <span className="text-xs text-slate-500 block leading-tight truncate">par François Carbonnier</span>
            {showChineseLabels && (
              <span className="text-[10px] text-slate-400 leading-tight block truncate">中文导航辅助</span>
            )}
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1.5 rounded-lg transition-all font-medium ${currentSection === item.id ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`}
            >
              <span className="block text-sm leading-tight">{item.label}</span>
              {showChineseLabels && (
                <span className="block text-[10px] leading-tight opacity-75">{item.zhLabel}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-sm text-slate-400 flex-shrink-0">
          <span className="hidden sm:block">{favoriteCount > 0 && `★ ${favoriteCount}`}</span>
        </div>
      </div>
    </header>
  );
}
