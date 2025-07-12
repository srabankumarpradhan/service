'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './Services.css';

const services = [

  {
    id: 5,
    image: '/zoom.jpg',
    title: 'Start Up (India especially)',
    description: 'Connect with our expert and gain knowledge about market, Pricings, Working modules. We will help you build your idea from scratch. Then we will decide price or investment there live in meeting',
    priceInr: 999,
    priceUsd: 10.99,
  },
  {
    id: 6,
    image: '/games.jpg',
    title: 'Gaming Tournament Apps',
    description: 'We know bro, Free fire, BGMI torunament apps are really popular. We can build you a companion app for your game with all the features you need.',
    priceInr: 10999, // discounted from 17999
    priceUsd: 128.11,
    originalPriceInr: 30000,
    originalPriceUsd: 349.42,
    discount: true,
  },
  {
    id: 3,
    image: '/shops.jpg',
    title: 'E-commerce Applications (Base)',
    description: 'Secure, fast, affordable e-commerce apps with payment integration. Brand level quality.',
    priceInr: 15999, // discounted from 22999
    priceUsd: 186.35,
    originalPriceInr: 50000,
    originalPriceUsd: 582.37,
    discount: true,
  },
  {
    id: 1,
    image: '/androids.jpg',
    title: 'Full Mobile App Development',
    description: 'Modern Android apps with fast, scalable Firebase or custom backend.',
    priceInr: 9999,
    priceUsd: 120,
  },
  {
    id: 2,
    image: '/website.jpg',
    title: 'Web Design & Development',
    description: 'Make your business digital. Get fast, clean websites built with care.',
    priceInr: 6999,
    priceUsd: 85,
  },
  
  {
    id: 4,
    image: '/image4.jpg',
    title: 'Educational Apps',
    description: 'Interactive apps to teach, inspire, and change the future.',
    priceInr: 9999, // discounted from 14999
    priceUsd: 58.23,
    originalPriceInr: 14999,
    originalPriceUsd: 180,
    discount: true,
  },

];

export default function Services() {
  return (
    <section id="services" className="bg-white text-center py-24 px-4 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-14 tracking-tight">
        Services
      </h2>

      
      <div className="mt-20">
        <p className="text-blue-800 text-lg italic font-medium mb-4">
          "Great services bring great ideas to life — and we keep it affordable."
        </p>
      </div>

      {/* ✅ GRID Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {services.map((service) => {
          const message = `Hi, I'm interested in the "${service.title}" service ${service.discount ? '(60% OFF)' : ''
            } priced at ₹${service.priceInr} / $${service.priceUsd}. Please share more details.`;

          return (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="group relative p-5 bg-white rounded-2xl border-2 border-transparent hover:border-blue-500 hover:animate-dash shadow-md transition-all"
            >
              <div className="rounded-xl overflow-hidden mb-4 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={240}
                  className="w-full h-44 object-cover rounded-xl"
                />

                {/* 🔥 Discount Tag */}
                {service.discount && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold text-black px-3 py-1 rounded-full animate-pulse shadow-lg">
                    70% OFF 🚀
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-blue-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>

              {/* 💰 Pricing */}
              <div className="mt-4 text-blue-700 font-semibold text-sm">
                {service.discount ? (
                  <>
                    <div>
                      <span className="line-through text-gray-500 mr-2">
                        ₹{service.originalPriceInr?.toLocaleString()} / ${service.originalPriceUsd}
                      </span>
                      <span className="text-blue-700">
                        ₹{service.priceInr.toLocaleString()} / ${service.priceUsd}
                      </span>
                    </div>
                  </>
                ) : (
                  <>₹{service.priceInr.toLocaleString()} / ${service.priceUsd}</>
                )}
              </div>

              {/* 📲 CTA Button */}
              <a
                href={`https://wa.me/919337954743?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
              >
                Build Yours!
              </a>
            </motion.div>
          );
        })}
      </div>

      
    </section>
  );
}
