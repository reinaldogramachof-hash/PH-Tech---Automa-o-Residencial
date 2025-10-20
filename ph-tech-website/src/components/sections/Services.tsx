"use client";

import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  priceRange: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Automação Residencial Básica",
    description: "Controle de iluminação, cortinas e tomadas inteligentes",
    icon: "���",
    features: ["Controle por app", "Cenas pré-definidas", "Agendamento", "2 cômodos"],
    priceRange: "A partir de R$ 2.500"
  },
  {
    id: 2,
    title: "Automação Avançada",
    description: "Sistema completo com áudio, vídeo e segurança integrados",
    icon: "���",
    features: ["Áudio multiroom", "Câmeras IP", "Sensores", "Integração total"],
    priceRange: "A partir de R$ 8.000"
  },
  {
    id: 3,
    title: "Casa Inteligente Premium",
    description: "Solução completa com IA e integração de todos os sistemas",
    icon: "���",
    features: ["Assistente vocal", "Climatização", "Irrigação", "Projeto personalizado"],
    priceRange: "Sob consulta"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-glow">Nossos</span>{' '}
            <span className="text-primary-orange">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluções completas de automação residencial para cada necessidade e orçamento
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                selectedService === service.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setSelectedService(service.id)}
              onMouseLeave={() => setSelectedService(null)}
            >
              {/* Card Principal */}
              <div className="bg-gray-900/50 backdrop-blur-lg border border-primary-blue/20 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary-blue/50 group-hover:shadow-2xl group-hover:shadow-primary-blue/20">
                {/* Ícone */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Título e Descrição */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Lista de Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Preço e CTA */}
                <div className="mt-auto">
                  <div className="text-primary-orange font-bold text-lg mb-4">
                    {service.priceRange}
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-blue to-primary-orange text-black py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary-orange/30 transition-all duration-300 transform group-hover:scale-105">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>

              {/* Efeito de Glow no Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 backdrop-blur-lg border border-primary-blue/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não encontrou o que precisa?
            </h3>
            <p className="text-gray-300 mb-6">
              Desenvolvemos soluções personalizadas para sua residência ou empresa
            </p>
            <button className="bg-gradient-to-r from-primary-blue to-primary-orange text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-blue/50 transition-all duration-300">
              Projeto Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
