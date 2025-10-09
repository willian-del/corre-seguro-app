import { Car, Bike, Package, Truck } from "lucide-react";

const ForWho = () => {
  const apps = [
    { icon: Car, name: "Uber", color: "text-primary", type: "Carro" },
    { icon: Car, name: "99", color: "text-accent", type: "Carro" },
    { icon: Bike, name: "iFood", color: "text-primary", type: "Moto" },
    { icon: Bike, name: "Rappi", color: "text-accent", type: "Moto" },
    { icon: Car, name: "inDrive", color: "text-primary", type: "Carro" },
    { icon: Truck, name: "Loggi", color: "text-accent", type: "Van/Moto" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Pra Quem é
          </h2>
          <p className="text-2xl text-foreground font-semibold mb-12">
            Se você vive do corre, o <span className="text-primary">Corre Seguro</span> é pra você
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {apps.map((app, index) => (
              <div
                key={app.name}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary hover:bg-primary/5 transition-all duration-300 hover:scale-110 animate-scale-in border-2 border-transparent hover:border-primary/20 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <app.icon className={`w-12 h-12 ${app.color} transition-transform group-hover:scale-110`} />
                  <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full">
                    {app.type}
                  </span>
                </div>
                <span className="text-sm font-semibold text-foreground">{app.name}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground">
            Pra quem roda de aplicativo de transporte ou entrega, seja qual for a plataforma
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
