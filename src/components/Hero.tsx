import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Car, Bike } from "lucide-react";
import heroImage from "@/assets/hero-dual.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Motoristas de carro e entregadores de moto nas ruas da cidade - Corre Legal protege os dois"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-accent-foreground bg-accent px-4 py-1 rounded-full text-sm font-semibold">
              Corre Legal
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            O parceiro certo pra te proteger no corre de todo dia
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 leading-relaxed">
            Motoristas e entregadores de app merecem proteção de verdade. A gente cuida de você quando o perrengue aparece.
          </p>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              <Car className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">Motoristas</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              <Bike className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">Entregadores</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" className="group" onClick={() => scrollToSection('planos')}>
              Ver Planos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm" onClick={() => scrollToSection('como-funciona')}>
              Como Funciona
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
