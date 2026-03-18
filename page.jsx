export default function LojaPremium() {
  const packs = [
    {
      titulo: 'Pack Essencial',
      preco: 'R$ 19,90',
      descricao: 'Disciplina, hábitos e foco para sair da estagnação.',
      link: 'https://wa.me/5511942600180?text=Quero%20o%20Pack%20Essencial',
    },
    {
      titulo: 'Pack Mentalidade',
      preco: 'R$ 29,90',
      descricao: 'Controle emocional, pensamento estratégico e evolução pessoal.',
      link: 'https://wa.me/5511942600180?text=Quero%20o%20Pack%20Mentalidade',
      destaque: true,
    },
    {
      titulo: 'Pack Elite',
      preco: 'R$ 49,90',
      descricao: 'Finanças, poder, estratégia e mentalidade de alto nível.',
      link: 'https://wa.me/5511942600180?text=Quero%20o%20Pack%20Elite',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-black md:text-6xl">
          MENTE PENSANTE
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Biblioteca digital para quem quer evoluir na vida, ganhar mais dinheiro e ter disciplina.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#packs"
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
          >
            Ver Packs
          </a>
          <a
            href="https://wa.me/5511942600180"
            className="rounded-xl border border-white px-6 py-3"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-6 py-10 text-center">
        <p className="text-gray-400">+2.000 pessoas já acessaram</p>
        <h2 className="text-2xl font-bold mt-2">Conteúdo que realmente muda mentalidade</h2>
      </section>

      {/* PACKS */}
      <section id="packs" className="px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {packs.map((pack) => (
            <div
              key={pack.titulo}
              className={`rounded-2xl p-6 border ${
                pack.destaque
                  ? 'border-yellow-400 scale-105'
                  : 'border-white/10'
              }`}
            >
              {pack.destaque && (
                <p className="text-yellow-400 text-sm mb-2">MAIS VENDIDO</p>
              )}

              <h3 className="text-2xl font-bold">{pack.titulo}</h3>
              <p className="mt-2 text-gray-400">{pack.descricao}</p>

              <p className="mt-4 text-3xl font-black">{pack.preco}</p>

              <a
                href={pack.link}
                className="mt-6 block w-full text-center bg-yellow-400 text-black py-3 rounded-xl font-bold"
              >
                Comprar agora
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">O que você vai ganhar</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div>📚 Acesso imediato</div>
          <div>🧠 Mentalidade forte</div>
          <div>💰 Conhecimento sobre dinheiro</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Comece sua evolução hoje
        </h2>
        <p className="text-gray-400 mt-2">
          Clique abaixo e fale direto comigo
        </p>

        <a
          href="https://wa.me/5511942600180"
          className="mt-6 inline-block bg-white text-black px-8 py-4 rounded-xl font-bold"
        >
          Falar no WhatsApp
        </a>
      </section>
    </div>
  );
}
