import { motion } from "framer-motion";
import { Database, Zap, Users, Lightbulb, Trophy, AlertCircle } from "lucide-react";

const frictionTypes = [
  {
    icon: Database,
    title: "Data Submission Friction",
    tagline: "No Data, No Doctor",
    description: "Medical reports are not auto-generated. Patients must consistently log health data (nutrition, exercise, vitals) to unlock report sharing with doctors.",
    color: "from-primary to-[hsl(320_85%_60%)]",
    impact: [
      "Forces consistency in health tracking",
      "Prevents passive users",
      "Doctors see real data, not empty logs",
    ],
  },
  {
    icon: Zap,
    title: "Exercise Compliance Friction",
    tagline: "No Effort, No Report",
    description: "Health reports include validated activity metrics. Without completing tracked exercises, reports remain incomplete and cannot be shared.",
    color: "from-accent to-primary",
    impact: [
      "Enforces physical commitment",
      "System rejects incomplete lifestyle data",
      "Ensures accountability",
    ],
  },
  {
    icon: Users,
    title: "Social Friction",
    tagline: "Connection Before Communication",
    description: "Users cannot directly message others. They must establish a mutual connection first, introducing intentional social friction to ensure meaningful interactions.",
    color: "from-[hsl(320_85%_60%)] to-primary",
    impact: [
      "Prevents spam and shallow engagement",
      "Builds trust between users",
      "Creates intentional, quality relationships",
    ],
  },
  {
    icon: Lightbulb,
    title: "Reflection Friction",
    tagline: "No Insight Without Input",
    description: "Advanced analytics and insights are unlocked only after users actively log and engage with their health data.",
    color: "from-primary to-accent",
    impact: [
      "Rewards consistent engagement",
      "Deeper understanding of personal health",
      "Data-driven decision making",
    ],
  },
  {
    icon: Trophy,
    title: "Progress Friction",
    tagline: "Consistency Unlocks Features",
    description: "Key features, advanced plans, insights, and rewards are progressively unlocked through consistent healthy behavior.",
    color: "from-accent to-[hsl(320_85%_60%)]",
    impact: [
      "Gamifies health goals",
      "Long-term engagement through achievement",
      "Behavioral reinforcement",
    ],
  },
  {
    icon: AlertCircle,
    title: "Zero Friction Zone",
    tagline: "Emergency Access - Instant Care",
    description: "While we add friction to growth-related actions, we remove it entirely in emergencies—ensuring instant access to care when it matters most.",
    color: "from-[hsl(320_85%_60%)] to-accent",
    impact: [
      "One-tap emergency telemedicine",
      "No barriers in critical moments",
      "Life-saving speed when needed",
    ],
  },
];

const FrictionFrameworkSection = () => {
  return (
    <section id="friction-framework" className="relative py-12 sm:py-20 lg:py-24">
      <div className="section-divider w-full mb-12 sm:mb-16 lg:mb-24" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">The Friction Framework</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Effort is the API</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-full lg:max-w-3xl mx-auto font-light leading-relaxed">
            NutriCare enforces a powerful principle: <span className="font-semibold text-foreground">If you don't engage, the system doesn't work for you.</span> We strategically apply friction to drive meaningful behavior, unlocking features and insights through consistent effort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {frictionTypes.map((friction, i) => (
            <motion.div
              key={friction.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="glass glass-border rounded-2xl p-6 sm:p-7 h-full hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${friction.color} flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-shadow shrink-0`}>
                    <friction.icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base sm:text-lg font-bold">{friction.title}</h3>
                    <p className="text-xs sm:text-sm text-accent font-semibold italic">{friction.tagline}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {friction.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider opacity-70">Impact:</p>
                  <ul className="space-y-2">
                    {friction.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-r ${friction.color}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framework Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="glass glass-border rounded-2xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-[hsl(320_85%_60%/0.05)]">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-center">
              The NutriCare Friction Model
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">With Friction</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Behavioral Friction → Must log data",
                    "Physical Friction → Must perform exercises",
                    "Social Friction → Must build connections",
                    "Access Friction → Features unlock with effort",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-green-500">Zero Friction</h4>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-green-500">Emergency Access:</span> One-tap telemedicine, instant ambulance booking, and critical care without any barriers. When lives are on the line, friction disappears entirely.
                </p>
                <p className="text-xs text-muted-foreground italic mt-4">
                  "NutriCare is not built to be effortless—it is built to make effort meaningful."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrictionFrameworkSection;
