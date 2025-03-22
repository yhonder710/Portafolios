export function Presentacion () {
  return (
    <>
     <div className="w-full flex justify-around items-center gap-10">
      <div className="w-160 flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Hola es un placer, soy Kpito</h1>
        <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti porro! Possimus ratione error, ad deserunt, consequatur perspiciatis molestiae veniam ab laudantium delectus rerum corrupti minus blanditiis quisquam vel libero.</p>
      </div>
      <picture><img className="w-50 h-50 rounded-full" src="https://img.freepik.com/vector-premium/cute-programador-depuracion-codigo-vector-dibujos-animados_865091-13405.jpg" alt="foto de perfil" /></picture>
    </div>
    </>
  )
}
