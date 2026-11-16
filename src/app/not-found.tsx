import Link from "next/link";

export default function NotFoundPage(){
  return (
    <div className="min-h-[700px] flex justify-center items-center flex-col gap-8">
      <h2 className="text-9xl font-extrabold">404</h2>
      <p className="text-2xl">Página não encontrada.</p>
      <Link href={"/"} className="block text-center text-2xl transition w-[200px] bg-slate-800 hover:bg-slate-900 rounded px-6 py-4 cursor-pointer font-bold text-slate-100">Voltar</Link>
    </div>
  )
}
