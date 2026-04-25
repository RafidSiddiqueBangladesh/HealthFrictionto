import { motion } from "framer-motion";
import { Brain, Bell, Heart, Utensils, Activity, MapPin } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced AI models analyze your health data for personalized nutrition and fitness recommendations.",
    color: "from-primary to-[hsl(320_85%_60%)]",
  },
  {
    icon: Activity,
    title: "Real-Time Exercise Validation",
    description: "ML-powered pose detection validates every rep with real-time feedback. Mechanical friction that ensures proper form and maximum results.",
    color: "from-accent to-primary",
    friction: "Mechanical",
  },
  {
    icon: Heart,
    title: "Health & Cost Analytics",
    description: "Comprehensive health metrics and cost impact analysis. Cognitive friction that makes you think deeply about your decisions.",
    color: "from-[hsl(320_85%_60%)] to-primary",
    friction: "Cognitive",
  },
  {
    icon: Utensils,
    title: "Manual Nutrition Tracking",
    description: "Intentional manual logging creates behavioral friction, forcing mindful eating and conscious food choices.",
    color: "from-primary to-accent",
    friction: "Behavioral",
  },
  {
    icon: Bell,
    title: "Smart Health Alerts",
    description: "Stay updated with real-time alerts about vital sign changes, medication reminders, and personalized warnings.",
    color: "from-accent to-[hsl(320_85%_60%)]",
  },
  {
    icon: MapPin,
    title: "One-Tap Emergency Access",
    description: "Critical scenarios demand zero friction. Instant access to nearby hospitals, ambulances, and emergency telemedicine.",
    color: "from-[hsl(320_85%_60%)] to-accent",
    friction: "No Friction",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-12 sm:py-20 lg:py-24">
      <div className="section-divider w-full mb-12 sm:mb-16 lg:mb-24" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Intelligent Features for <span className="text-gradient-primary">Smarter Health</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-full lg:max-w-2xl mx-auto font-light">
            Everything you need to manage your health journey, powered by advanced AI and tailored to your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-border rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-shadow shrink-0`}>
                  <feature.icon size={22} className="text-white" />
                </div>
                {feature.friction && (
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
                    feature.friction === "Mechanical" ? "bg-primary/20 text-primary border border-primary/30" :
                    feature.friction === "Cognitive" ? "bg-accent/20 text-accent border border-accent/30" :
                    feature.friction === "Behavioral" ? "bg-pink-500/20 text-pink-500 border border-pink-500/30" :
                    "bg-green-500/20 text-green-500 border border-green-500/30"
                  }`}>
                    {feature.friction} Friction
                  </span>
                )}
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
