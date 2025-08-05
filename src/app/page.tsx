'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ShoppingCart, Check, Star, Volume2, Battery, Bluetooth, Zap } from 'lucide-react';

const AurumLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Jamás pensé que unos auriculares pudieran sentirse como una joya.",
      author: "María González",
      role: "Productora Musical"
    },
    {
      text: "Aurum me hizo redescubrir mis canciones favoritas.",
      author: "Carlos Mendoza",
      role: "Audiófilo"
    },
    {
      text: "Una obra maestra del diseño y del sonido.",
      author: "Sofia Ruiz",
      role: "DJ Profesional"
    }
  ];

  const features = [
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Sonido Hi-Res 3D",
      description: "Tecnología de audio envolvente de última generación"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cancelación Activa",
      description: "Enfócate solo en lo que escuchas"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "48h de Batería",
      description: "Reproducción continua sin interrupciones"
    },
    {
      icon: <Bluetooth className="w-8 h-8" />,
      title: "Bluetooth 5.3",
      description: "Conexión ultraestable y de baja latencia"
    }
  ];

  const productFeatures = [
    "Sonido Hi-Res 3D",
    "Cancelación activa de ruido",
    "48 horas de batería",
    "Bluetooth 5.3 ultraestable",
    "Materiales premium dorados",
    "Garantía de 2 años"
  ];

  const socialLinks = ['Instagram', 'Facebook', 'Twitter', 'YouTube'];

  const handleTestimonialChange = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen relative flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12" />
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 font-['Montserrat'] leading-tight">
                Siente el
                <span className="block bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                  Sonido del Oro
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl lg:text-2xl text-yellow-100 font-light max-w-xl mx-auto lg:mx-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Auriculares de lujo con calidad de estudio. 
              <span className="font-semibold text-white"> Edición limitada.</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button 
                className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                type="button"
                aria-label="Comprar auriculares AURUM"
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Ahora
              </motion.button>
              
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                aria-label="Ver detalles del producto"
              >
                <Play className="w-5 h-5" />
                Ver Detalles
              </motion.button>
            </motion.div>

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 text-white">
                <div className="flex text-yellow-200" role="img" aria-label="5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-lg">4.9/5 de más de 1,000 reseñas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="relative z-10 aspect-square max-w-lg mx-auto"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/auriculares.png" 
                  alt="AURUM Sound Headphones - Auriculares premium dorados" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Características <span className="text-yellow-400">Premium</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cada detalle diseñado para ofrecer la experiencia de audio más extraordinaria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(244, 208, 63, 0.1)"
                }}
              >
                <div className="text-yellow-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(244, 208, 63, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(244, 208, 63, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(244, 208, 63, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text mb-8 font-['Playfair_Display']">
              "Cuando el arte del diseño se une con el alma del sonido"
            </h2>
            
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            {/* Sound Waves Animation */}
            <div className="flex justify-center items-center gap-2 mb-8" role="img" aria-label="Ondas de sonido animadas">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-yellow-400 rounded-full"
                  animate={{
                    height: [20, 60, 20],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Lo que dicen nuestros <span className="text-yellow-400">usuarios</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-yellow-400 mb-6">
                  <div className="flex justify-center" role="img" aria-label="5 estrellas">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-2xl lg:text-3xl text-white font-light mb-8 italic">
                  {testimonials[currentTestimonial].text}
                </blockquote>
                
                <div className="text-yellow-400">
                  <p className="font-semibold text-lg">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-300">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                  onClick={() => handleTestimonialChange(index)}
                  type="button"
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 max-w-2xl mx-auto shadow-2xl">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                AURUM <span className="text-yellow-600">ProSound</span>
              </h2>
              
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-gray-500 line-through">$399</span>
                  <span className="text-5xl font-bold text-yellow-600">$299</span>
                </div>
                <p className="text-yellow-600 font-semibold text-lg">
                  ✨ Oferta de lanzamiento - Ahorra $100
                </p>
              </div>

              <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                {productFeatures.map((feature, index) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                aria-label="Añadir AURUM ProSound al carrito"
              >
                <ShoppingCart className="w-6 h-6 inline mr-2" />
                Añadir al carrito
              </motion.button>

              <p className="text-sm text-gray-600 mt-4">
                🚚 Envío gratis • 🔄 30 días de garantía de devolución
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-yellow-400">AURUM</span> Sound
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Redefiniendo la experiencia auditiva con diseño premium y tecnología de vanguardia
              </p>
              
              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    aria-label={`Síguenos en ${social}`}
                  >
                    {social}
                  </a>
                ))}
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-500 text-sm">
                  © 2025 AURUM Sound. Todos los derechos reservados. | 
                  <a href="#" className="hover:text-yellow-400 ml-1">Política de Privacidad</a> | 
                  <a href="#" className="hover:text-yellow-400 ml-1">Términos de Servicio</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AurumLanding;