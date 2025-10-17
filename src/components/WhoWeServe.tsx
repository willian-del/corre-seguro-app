import { Car, Bike } from "lucide-react";
import carDriverImage from "@/assets/hero-car-driver.jpg";
import deliveryImage from "@/assets/hero-delivery.jpg";

const WhoWeServe = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20" aria-labelledby="who-we-serve-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="who-we-serve-heading" className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Feito Para Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seja no carro ou na moto, protegemos quem vive do corre
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Motoristas de Carro */}
          <div className="group relative overflow-hidden rounded-2xl bg-card border-2 border-transparent hover:border-primary/20 transition-all duration-300 animate-scale-in">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={carDriverImage}
                alt="Motorista de aplicativo profissional dirigindo carro com proteção jurídica Corre Legal"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary rounded-xl">
                  <Car className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Motoristas</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Uber, 99, inDrive e outros apps de transporte
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Proteção contra multas indevidas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Suporte em acidentes e sinistros
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Orientação jurídica especializada
                </li>
              </ul>
            </div>
          </div>

          {/* Entregadores de Moto */}
          <div className="group relative overflow-hidden rounded-2xl bg-card border-2 border-transparent hover:border-accent/20 transition-all duration-300 animate-scale-in" style={{ animationDelay: "100ms" }}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={deliveryImage}
                alt="Entregador de aplicativo trabalhando com moto - proteção jurídica especializada Corre Legal"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent rounded-xl">
                  <Bike className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Entregadores</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                iFood, Rappi, Loggi e outros apps de entrega
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Ajuda em casos de sinistro
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Defesa em problemas com apps
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Atendimento rápido pelo WhatsApp
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
