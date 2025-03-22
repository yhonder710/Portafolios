export function Presentacion () {
  return (
    <>
     <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
      <div className="w-full sm:160 flex flex-col gap-5">
        <h1 className="text-2xl sm:text-5xl font-bold">Hola es un placer, soy Kpito</h1>
        <p className="text-[14px] sm:text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti porro! Possimus ratione error, ad deserunt, consequatur perspiciatis molestiae veniam ab laudantium delectus rerum corrupti minus blanditiis quisquam vel libero.</p>
      </div>
      <picture><img className="w-50 h-50 rounded-4xl" src="https://img.freepik.com/vector-premium/cute-programador-depuracion-codigo-vector-dibujos-animados_865091-13405.jpg" alt="foto de perfil" /></picture>
    </div>
    </>
  )
}
