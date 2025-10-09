import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Bronze",
      price: "14,90",
      icon: null,
      description: "Ideal pra quem quer suporte básico",
      features: [
        "Canal de atendimento jurídico",
        "Orientações rápidas",
        "Suporte via WhatsApp",
      ],
      highlighted: false,
    },
    {
      name: "Prata",
      price: "19,90",
      icon: Sparkles,
      description: "Ideal pra quem quer mais segurança",
      features: [
        "Tudo do Bronze",
        "Ajuda em casos de sinistro",
        "Suporte em acidentes",
        "Acompanhamento de processos",
      ],
      highlighted: true,
    },
    {
      name: "Ouro",
      price: "24,90",
      icon: Crown,
      description: "Ideal pra quem quer rodar tranquilo e protegido",
      features: [
        "Tudo do Prata",
        "Monitoramento de multas",
        "Defesa de multas",
        "Prevenção proativa",
        "Prioridade no atendimento",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Nossos Planos
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Sem fidelidade. Cancelamento fácil. Atendimento pelo WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 bg-card hover:shadow-glow transition-all duration-300 hover:-translate-y-3 animate-fade-in-up border-2 ${
                plan.highlighted ? "border-accent scale-105 shadow-elegant" : "border-border"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                {plan.icon && (
                  <plan.icon className={`w-10 h-10 mx-auto mb-4 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                )}
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "accent" : "default"}
                className="w-full"
                size="lg"
              >
                Assinar {plan.name}
              </Button>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-primary-foreground/90 text-lg">
            ✓ Problemas jurídicos? Você fala direto com um advogado parceiro.
          </p>
          <p className="text-primary-foreground/90 text-lg">
            ✓ Quer se prevenir? Acompanhamos seus registros e te avisamos antes que virem dor de cabeça.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
