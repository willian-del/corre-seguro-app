import { AlertCircle, FileText, Scale, HelpCircle, Shield, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Problems = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Multas e pontos indevidos na CNH",
      description: "Ajudamos a recorrer e acompanhar o processo",
    },
    {
      icon: FileText,
      title: "Acidentes e sinistros sem suporte",
      description: "Orientamos na recuperação e documentação",
    },
    {
      icon: Scale,
      title: "Questões jurídicas com apps e passageiros",
      description: "Defesa legal quando você mais precisa",
    },
    {
      icon: HelpCircle,
      title: "Falta de orientação quando dá ruim",
      description: "Suporte rápido e prático na hora do perrengue",
    },
    {
      icon: Shield,
      title: "Dúvidas sobre direitos e deveres",
      description: "Esclarecemos suas questões como motorista/entregador",
    },
    {
      icon: Users,
      title: "Problemas com empresas parceiras",
      description: "Mediação e orientação em conflitos",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Os Problemas que a Gente Resolve
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aqui pra quando você mais precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
