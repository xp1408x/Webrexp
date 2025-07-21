import React from 'react';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: 'Plan Básico',
      price: '$499',
      features: [
        'Selección entre 2 diseños',
        'Diseño responsive (adaptable a móviles)',
        'Tiempo de entrega: 2 semanas',
        'Hasta 3 secciones',
        'Integración de redes sociales',
        'Soporte básico (1 mes)',
      ],
      buttonText: 'Elegir Plan Básico',
    },
    {
      name: 'Plan Estándar',
      price: '$999',
      features: [
        'Selección entre 5 diseños',
        'Diseño responsive avanzado',
        'Tiempo de entrega: 4 semanas',
        'Hasta 7 secciones',
        'Integración de redes sociales y blog',
        'Optimización SEO básica',
        'Soporte prioritario (3 meses)',
      ],
      buttonText: 'Elegir Plan Estándar',
    },
    {
      name: 'Plan Premium',
      price: '$1999',
      features: [
        'Diseño personalizado y exclusivo',
        'Diseño responsive avanzado y optimizado',
        'Tiempo de entrega: 8 semanas',
        'Secciones ilimitadas',
        'Integración completa (e-commerce, CRM, etc.)',
        'Optimización SEO avanzada y marketing digital',
        'Soporte 24/7 (6 meses)',
        'Mantenimiento y actualizaciones',
      ],
      buttonText: 'Elegir Plan Premium',
    },
  ];

  return (
    <section id="pricing" className="py-20 text-blanco-puro">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cian-futurista">Nuestros Planes</h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          Ofrecemos planes flexibles para adaptarnos a tus necesidades y presupuesto. Todos nuestros planes incluyen diseño responsive y soporte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border-2 border-azul-conectado"
            >
              <h3 className="text-3xl font-bold mb-4 text-cian-futurista">{plan.name}</h3>
              <p className="text-5xl font-extrabold mb-6 text-blanco-puro">{plan.price}</p>
              <ul className="text-lg mb-8 space-y-3 text-gris-neblina">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <svg className="w-6 h-6 text-cian-futurista mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-azul-conectado hover:bg-cian-futurista text-blanco-puro font-bold py-3 px-8 rounded-full transition-colors duration-300">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
