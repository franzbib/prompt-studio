export function MobileNav({ items, currentSection, onNavigate, showChineseLabels }) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-40">
      <div className="flex items-center justify-around px-1 py-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all min-w-0 ${currentSection === item.id ? "text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span className="text-[10px] font-medium truncate max-w-[54px] leading-tight">
              {item.mobileLabel || item.label}
            </span>
            {showChineseLabels && (
              <span className="text-[9px] leading-tight truncate max-w-[54px] opacity-75">
                {item.zhLabel}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
