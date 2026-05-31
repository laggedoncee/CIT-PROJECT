import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Coffee, Utensils, Calendar, Map, Languages, Wallet, Shield, Compass, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import heroImg from "@assets/stock_images/tirana-hero-ai.png";
import buildingsImg from "@assets/stock_images/tirana-buildings-ai.png";
import squareImg from "@assets/stock_images/tirana-square-ai.png";
import mosqueImg from "@assets/stock_images/tirana-mosque.jpg";
import mountainImg from "@assets/stock_images/tirana-mountain.jpg";
import foodImg from "@assets/stock_images/tirana-food.jpg";
import coffeeImg from "@assets/stock_images/tirana-coffee.jpg";
import parkImg from "@assets/stock_images/tirana-park.jpg";
import bllokuImg from "@assets/stock_images/tirana-blloku.jpg";

const IMAGES = {
  hero: heroImg,
  colorfulBuildings: buildingsImg,
  skanderbegSquare: squareImg,
  mosque: mosqueImg,
  mountain: mountainImg,
  bunker: bllokuImg,
  park: parkImg,
  blloku: buildingsImg,
  food: foodImg,
  coffee: coffeeImg,
  gallery: squareImg,
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`font-serif text-2xl tracking-wide cursor-pointer ${scrolled ? "text-primary" : "text-white"}`} onClick={() => scrollTo('hero')} data-testid="nav-logo">
            Tirana.
          </div>
          <div className="hidden md:flex gap-8">
            {['about', 'landmarks', 'food', 'practical'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                data-testid={`nav-link-${item}`}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-secondary ${scrolled ? "text-foreground/70" : "text-white/80"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-[100dvh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img 
            src={IMAGES.hero}
            alt="Panoramic view of Tirana, Albania" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-background/80" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-6 block">Albania's Vibrant Capital</span>
            <h1 className="text-8xl md:text-[12rem] text-white font-serif mb-6 drop-shadow-2xl leading-none">Tirana</h1>
            <p className="text-xl md:text-3xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
              A city reinventing itself in vibrant colors and endless energy.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-3 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => scrollTo('about')}
          data-testid="scroll-cta"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/70">Discover</span>
          <ArrowDown className="w-5 h-5 animate-bounce text-secondary" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 px-6 relative" data-testid="section-about">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl mb-8 text-primary font-serif leading-tight">A city<br/>reborn.</h2>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-6 font-light">
                Founded in 1614 and designated as capital in 1920, Tirana is a city of extraordinary contrast. Where grey communist-era blocks once stood, vibrant murals and bold facades now dominate. 
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-10 font-light">
                Surrounded by mountains and home to nearly a million people, it's one of Europe's youngest capitals — with an average age under 35. The energy here is palpable in the humming cafes, broad boulevards, and lively streets.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
                <div data-testid="stat-founded">
                  <span className="block text-5xl font-serif text-secondary mb-2">1614</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Founded</span>
                </div>
                <div data-testid="stat-age">
                  <span className="block text-5xl font-serif text-secondary mb-2">35</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Average Age</span>
                </div>
                <div data-testid="stat-population">
                  <span className="block text-5xl font-serif text-secondary mb-2">900k</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Metro Population</span>
                </div>
                <div data-testid="stat-elevation">
                  <span className="block text-5xl font-serif text-secondary mb-2">1611m</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Mt. Dajti Peak</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-7 relative h-[600px] md:h-[800px] rounded-2xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={IMAGES.colorfulBuildings}
                alt="Colorful painted buildings of Tirana" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-serif text-2xl">One of Europe's most colorful cities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Landmarks Section */}
      <section id="landmarks" className="py-24 md:py-40 bg-card" data-testid="section-landmarks">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">The Highlights</span>
            <h2 className="text-6xl md:text-8xl mb-6 text-accent font-serif">Must-See</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">Layers of Ottoman, Fascist, and Communist history coexisting in one dynamic space.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Skanderbeg Square",
                desc: "The monumental heart of the city, named after national hero Gjergj Kastrioti Skanderbeg. One of Europe's largest pedestrian spaces.",
                img: IMAGES.skanderbegSquare,
                id: "skanderbeg"
              },
              {
                title: "Et'hem Bey Mosque",
                desc: "A stunning 1823 mosque with rare exterior frescoes, surviving the atheist campaigns of the 20th century. Open to all visitors.",
                img: IMAGES.mosque,
                id: "mosque"
              },
              {
                title: "Mount Dajti",
                desc: "Take the 8-minute Dajti Ekspres cable car to 1,611m for panoramic views over the city and beyond.",
                img: IMAGES.mountain,
                id: "dajti"
              },
              {
                title: "Bunk'Art Museum",
                desc: "Cold War-era atomic bunkers transformed into powerful underground history and art spaces. One of over 750,000 bunkers built across Albania.",
                img: IMAGES.bunker,
                id: "bunkart"
              },
              {
                title: "The Grand Park",
                desc: "A 290-hectare oasis with an artificial lake. The lungs of the city — perfect for sunset strolls and picnics.",
                img: IMAGES.park,
                id: "grand-park"
              },
              {
                title: "Blloku District",
                desc: "Once restricted to the Communist elite, now the trendiest neighborhood packed with boutiques, rooftop bars, and cafes.",
                img: IMAGES.blloku,
                id: "blloku"
              }
            ].map((landmark, i) => (
              <motion.div 
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-background shadow-sm hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-landmark-${landmark.id}`}
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={landmark.img} alt={landmark.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif text-primary mb-4">{landmark.title}</h3>
                  <p className="text-foreground/70 leading-relaxed font-light text-lg">{landmark.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Secrets */}
      <section className="py-24 md:py-32 px-6" data-testid="section-secrets">
        <div className="max-w-5xl mx-auto bg-muted rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Compass className="w-64 h-64 text-accent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Beyond the guidebook</span>
            <h2 className="text-4xl md:text-6xl text-accent font-serif mb-12">Local Secrets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div data-testid="secret-tanners-bridge">
                <h3 className="text-2xl font-serif text-primary mb-3">Tanners' Bridge</h3>
                <p className="text-foreground/80 font-light leading-relaxed">Tucked away in the modern suburbs, this 18th-century Ottoman stone bridge (Tabak Bridge) is a rare survivor of the city's ancient trade routes. It feels completely out of time amid the high-rises.</p>
              </div>
              <div data-testid="secret-pyramid">
                <h3 className="text-2xl font-serif text-primary mb-3">The Pyramid of Tirana</h3>
                <p className="text-foreground/80 font-light leading-relaxed">Once a museum dedicated to Communist leader Enver Hoxha, this brutalist concrete pyramid is undergoing a transformation into a tech and youth hub. Climb its sloped sides for an unusual view of the city.</p>
              </div>
              <div data-testid="secret-palace">
                <h3 className="text-2xl font-serif text-primary mb-3">Palace of Culture</h3>
                <p className="text-foreground/80 font-light leading-relaxed">Built with Soviet assistance in the 1960s, this grand Soviet-era venue houses the National Theatre of Opera and Ballet. Catch a performance for €5-15 — extraordinary value for world-class art.</p>
              </div>
              <div data-testid="secret-new-bazaar">
                <h3 className="text-2xl font-serif text-primary mb-3">New Bazaar</h3>
                <p className="text-foreground/80 font-light leading-relaxed">The recently renovated New Bazaar (Pazari i Ri) is where locals shop. Fruits, spices, cheeses, olives — the smells and colors are overwhelming in the best possible way. Go before 9am.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Food & Drink */}
      <section id="food" className="py-24 md:py-40 px-6 overflow-hidden" data-testid="section-food">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div 
              className="lg:w-5/12 space-y-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Gastronomy</span>
                <h2 className="text-6xl md:text-8xl text-primary font-serif leading-none mb-6">A Feast for the Senses</h2>
                <p className="text-xl text-foreground/80 font-light leading-relaxed">Albanian cuisine is a brilliant collision of Mediterranean, Balkan, and Ottoman flavors — and it is remarkably affordable.</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start" data-testid="food-item-tave">
                  <div className="mt-2 bg-secondary/20 p-4 rounded-2xl"><Utensils className="w-8 h-8 text-secondary" /></div>
                  <div>
                    <h4 className="text-3xl font-serif mb-2 text-accent">Tavë Kosi and Fërgesë</h4>
                    <p className="text-foreground/70 font-light leading-relaxed text-lg">The national dish: lamb baked in a rich egg-and-yogurt sauce (Tavë Kosi), and the Tirana specialty of sautéed peppers, tomatoes, and cottage cheese (Fërgesë).</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" data-testid="food-item-coffee">
                  <div className="mt-2 bg-primary/10 p-4 rounded-2xl"><Coffee className="w-8 h-8 text-primary" /></div>
                  <div>
                    <h4 className="text-3xl font-serif mb-2 text-accent">Café Culture</h4>
                    <p className="text-foreground/70 font-light leading-relaxed text-lg">Coffee is serious business. Strong Albanian espresso runs €1-1.50 a cup. Blloku is the epicenter — people-watch here for hours.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" data-testid="food-item-byrek">
                  <div className="mt-2 bg-accent/10 p-4 rounded-2xl"><Heart className="w-8 h-8 text-accent" /></div>
                  <div>
                    <h4 className="text-3xl font-serif mb-2 text-accent">Byrek and Raki</h4>
                    <p className="text-foreground/70 font-light leading-relaxed text-lg">Start your day with flaky savory pastries under €1 from a bakery (byrek). End it with raki — grape or mulberry brandy offered as a welcome drink everywhere.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-7/12 grid grid-cols-2 gap-6 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 mt-16">
                <img src={IMAGES.food} alt="Mediterranean food spread" className="w-full h-[400px] object-cover rounded-2xl shadow-xl" data-testid="img-food" />
              </div>
              <div className="space-y-6">
                <img src={IMAGES.coffee} alt="Cafe culture in Tirana" className="w-full h-[500px] object-cover rounded-2xl shadow-xl" data-testid="img-coffee" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immersive Gallery Moment */}
      <section className="relative h-[65vh] bg-black overflow-hidden" data-testid="section-gallery">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <img 
            src={IMAGES.gallery}
            alt="The Et'hem Bey Mosque, Tirana" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2 
            className="text-5xl md:text-8xl text-white font-serif tracking-widest text-center px-4 drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            History <br/><span className="text-secondary italic">Illuminated</span>
          </motion.h2>
        </div>
      </section>

      {/* Practical Info */}
      <section id="practical" className="py-24 md:py-40 bg-accent text-accent-foreground px-6 relative overflow-hidden" data-testid="section-practical">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Map className="w-full h-full" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Logistics</span>
            <h2 className="text-6xl md:text-8xl text-white font-serif">Plan Your Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "When to Go", desc: "April–June and September–October offer mild weather and fewer crowds.", id: "when" },
              { icon: MapPin, title: "Getting There", desc: "Fly into Nënë Tereza International Airport (TIA), 17km from the city center.", id: "flight" },
              { icon: Wallet, title: "Budget", desc: "Lek (ALL) is the currency — €1 ≈ 123 ALL. Budget €30–40/day and live extremely well.", id: "budget" },
              { icon: Languages, title: "Language", desc: "Albanian is a unique Indo-European language unrelated to any other. English is widely spoken in Blloku.", id: "language" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`card-practical-${item.id}`}
              >
                <item.icon className="w-10 h-10 mb-6 text-secondary" />
                <h3 className="text-2xl font-serif mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
            
            <motion.div 
              className="bg-primary/20 p-8 rounded-3xl backdrop-blur-md border border-primary/30 md:col-span-2 lg:col-span-4 flex flex-col md:flex-row items-center gap-8 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              data-testid="card-safety"
            >
              <Shield className="w-16 h-16 text-primary shrink-0" />
              <div>
                <h3 className="text-3xl font-serif mb-3 text-white">Safety and Hospitality</h3>
                <p className="text-white/80 font-light leading-relaxed text-lg">Tirana is proudly one of the safest capitals in Europe. The Albanian code of Besa dictates that guests must be treated with the utmost respect and protection. You will find locals extraordinarily hospitable — expect raki and coffee pressed into your hands before you've even sat down.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-background border-t border-border text-center px-6 relative" data-testid="section-footer">
        <div className="max-w-2xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-7xl font-serif text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Shihemi në Tiranë.
          </motion.h2>
          <p className="text-2xl text-muted-foreground mb-12 font-light italic">See you in Tirana.</p>
          <div className="h-px w-24 bg-secondary mx-auto mb-12" />
          <p className="text-sm text-foreground/40 tracking-widest uppercase">A cinematic guide to Albania's vibrant capital.</p>
        </div>
      </footer>
    </div>
  );
}
