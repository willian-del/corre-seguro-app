import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import carlosImage from "@/assets/testimonial-carlos.jpg";
import fernandaImage from "@/assets/testimonial-fernanda.jpg";
import marcaoImage from "@/assets/testimonial-marcao.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos",
      role: "Motorista há 3 anos",
      location: "São Paulo/SP",
      image: carlosImage,
      quote: "Levei uma multa errada e o pessoal do Corre Seguro me ajudou a resolver rapidinho. Agora fico tranquilo pra rodar.",
    },
    {
      name: "Fernanda",
      role: "Entregadora",
      location: "Belo Horizonte/MG",
      image: fernandaImage,
      quote: "Dei um azar, bati a moto numa entrega. Eles me explicaram o passo a passo e ainda me ajudaram com o seguro. Show!",
    },
    {
      name: "Marcão",
      role: "Motorista",
      location: "Recife/PE",
      image: marcaoImage,
      quote: "É bom saber que tem alguém pra ajudar de verdade. Atendimento rápido e preço que cabe no bolso.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Quem já roda com a gente
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos parceiros estão falando
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
