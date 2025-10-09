import { Card } from "@/components/ui/card";
import { Heart, Users, Smartphone } from "lucide-react";

const WhySection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Nosso Porquê
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trabalhar na rua é viver na correria. A cada corrida ou entrega, surgem imprevistos: 
            multa injusta, acidente, cliente complicado, ou aquele problema que ninguém explica direito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Feito pra Você</h3>
            <p className="text-muted-foreground leading-relaxed">
              Um plano de proteção pensado pra quem vive do corre, rodando pra fazer o dia acontecer.
            </p>
          </Card>

          <Card className="p-8 bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up [animation-delay:200ms] border-2">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Atendimento Humano</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advogados parceiros te orientam e ajudam a resolver o problema com quem entende sua rotina.
            </p>
          </Card>

          <Card className="p-8 bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up [animation-delay:400ms] border-2">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Smartphone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Tudo no Celular</h3>
            <p className="text-muted-foreground leading-relaxed">
              Você fala com a gente pelo WhatsApp ou app e acompanha tudo — simples e sem enrolação.
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-foreground font-semibold">
            É tipo um <span className="text-primary">"clube do corre"</span> que te ajuda a resolver pepinos 
            com praticidade, preço justo e gente que entende você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
