import Header from '@/components/sections/Header';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Servicos', href: '#servicos' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Contato', href: '#contato' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header navigation={navigation} />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="neon-glow">Tecnologia</span>
            <br />
            <span className="text-primary-orange">Inteligente</span>
            <br />
            <span className="text-white">Para Sua Casa</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transformamos seu lar com solucoes de automacao residencial de ultima geracao
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-blue to-primary-orange text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-blue/50 transition-all duration-300">
              Comecar Projeto
            </button>
            <button className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-blue/10 transition-all duration-300">
              Ver Projetos
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - REMOVIDA TEMPORARIAMENTE */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-glow">Nossos</span>{' '}
            <span className="text-primary-orange">Servicos</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Em breve: Nossas solucoes de automacao
          </p>
          <div className="bg-gray-900/50 backdrop-blur-lg border border-primary-blue/20 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-gray-300">Seção em desenvolvimento</p>
          </div>
        </div>
      </section>
    </main>
  );
}
