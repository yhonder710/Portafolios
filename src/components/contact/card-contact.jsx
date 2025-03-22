export function CardContact ({text, icon}) {
  return (
    <>
     <div className="bg-black/50 flex gap-3 items-center px-5 py-3 border border-white/40 rounded-2xl">
      {icon}
      <strong className="text-2xl">{text}</strong>
      </div>
    </>
  )
}
