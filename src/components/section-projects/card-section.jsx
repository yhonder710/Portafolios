
export function CardProjects ({icon, text}) {
  return (
    <>
      <div className="flex items-center bg-black/50 p-2 border border-white/40 rounded-[10px] gap-2">
        {icon}
        <strong className="text-2xl hidden md:inline">{text}</strong>
      </div>
    </>
  )
}
