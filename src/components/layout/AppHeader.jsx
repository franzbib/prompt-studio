export function AppHeader({ items, currentSection, onNavigate, favoriteCount, showChineseLabels }) {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate("home")}>
          <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            FLE
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-slate-800 block leading-tight">Prompt Studio</span>
            {showChineseLabels && (
              <span className="text-[10px] text-slate-400 leading-tight">中文导航辅助</span>
            )}
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
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

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span className="hidden sm:block">{favoriteCount > 0 && `★ ${favoriteCount}`}</span>
        </div>
      </div>
    </header>
  );
}
