import Header from '@/components/sections/Header';
import Services from '@/components/sections/Services';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Serviços', href: '#servicos' },
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
            Transformamos seu lar com soluções de automação residencial de última geração
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-blue to-primary-orange text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-blue/50 transition-all duration-300">
              Começar Projeto
            </button>
            <button className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-blue/10 transition-all duration-300">
              Ver Projetos
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </main>
  );
}
