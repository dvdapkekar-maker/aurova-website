export default function DryFruitWebsite() {
  const products = [
    {
      name: 'Royal Almonds',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop',
      desc: 'Premium California almonds packed with nutrition and crunch.'
    },
    {
      name: 'Golden Cashews',
      image: 'https://images.unsplash.com/photo-1615485925873-0f8d7f20f56f?q=80&w=1200&auto=format&fit=crop',
      desc: 'Handpicked rich buttery cashews with export-grade quality.'
    },
    {
      name: 'Iranian Pistachios',
      image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop',
      desc: 'Luxury pistachios with authentic flavor and freshness.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    },
    {
      name: 'Premium Dates',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Naturally sweet dates sourced for timeless purity.'
    }
  ];

  return (
    <div className="bg-[#07130d] text-white overflow-hidden min-h-screen font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07130d]/80 backdrop-blur-lg border-b border-[#b9975b]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <div>
          <h1
  className="text-3xl tracking-wide"
  style={{
    color: "#D4AF37",
    fontFamily: "Georgia, serif",
    fontWeight: "700",
    letterSpacing: "1px"
  }}
>
              Aurova अमृतव मेवा
            </h1>
            <p
  style={{
    color: "#d4d4d4",
    fontSize: "14px",
    letterSpacing: "2px",
    fontStyle: "italic",
    marginTop: "-5px"
  }}
>
              The Taste of Timeless Purity
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
            <a href="#home" className="hover:text-[#d6b36a] transition">Home</a>
            <a href="#products" className="hover:text-[#d6b36a] transition">Products</a>
            <a href="#about" className="hover:text-[#d6b36a] transition">About</a>
            <a href="#contact" className="hover:text-[#d6b36a] transition">Contact</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1606923829579-0cb981a83e2f?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-[#d6b36a] mb-6 text-sm">
            Premium Dry Fruits Collection
          </p>

          <h1
  style={{
    fontSize: "clamp(3rem, 8vw, 6rem)",
    fontFamily: "Georgia, serif",
    color: "#D4AF37",
    fontWeight: "700",
    lineHeight: "1.1",
    marginBottom: "30px",
    textShadow: "0 0 20px rgba(212,175,55,0.3)"
  }}
>
            Aurova <span className="text-[#d6b36a]">अमृतव मेवा</span>
          </h1>

          <p
  style={{
    fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
    color: "#E5E5E5",
    lineHeight: "1.9",
    maxWidth: "850px",
    margin: "0 auto 50px auto",
    letterSpacing: "0.5px"
  }}
>
            Discover luxury dry fruits crafted with timeless purity, premium sourcing, and unforgettable taste.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <a
              href="#products"
              className="bg-[#d4af37] text-black px-12 py-5 rounded-full text-lg font-semibold shadow-2xl"
            >
              Explore Collection
            </a>

            <a
              href="https://wa.me/918369568815"
              target="_blank"
              className="border border-[#d4af37] px-12 py-5 rounded-full text-lg font-semibold"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#091710]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#102018] border border-[#d6b36a]/20 rounded-3xl p-10 shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl text-[#d6b36a] font-bold mb-4">Luxury Quality</h3>
            <p className="text-gray-300 leading-8">
              Carefully selected premium dry fruits from trusted global suppliers.
            </p>
          </div>

          <div className="bg-[#102018] border border-[#d6b36a]/20 rounded-3xl p-10 shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl text-[#d6b36a] font-bold mb-4">Fresh & Pure</h3>
            <p className="text-gray-300 leading-8">
              Hygienically packed products preserving nutrition, crunch, and freshness.
            </p>
          </div>

          <div className="bg-[#102018] border border-[#d6b36a]/20 rounded-3xl p-10 shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl text-[#d6b36a] font-bold mb-4">Nationwide Delivery</h3>
            <p className="text-gray-300 leading-8">
              Reliable delivery for families, gifting, and wholesale business orders.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-28 px-6 bg-[#07130d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-[#d6b36a] mb-4 text-sm">
              Signature Collection
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Premium Dry Fruits
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A curated collection crafted for purity, luxury, and healthy living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-[#0f1f17] border border-[#d6b36a]/20 rounded-[30px] overflow-hidden shadow-2xl hover:scale-105 transition duration-500"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#d6b36a] mb-3">
                    {item.name}
                  </h3>

                  <p className="text-gray-300 leading-7 mb-6">
                    {item.desc}
                  </p>

                  <a
                    href="https://wa.me/918369568815"
                    target="_blank"
                    className="block text-center bg-[#c9a15c] hover:bg-[#d6b36a] text-black py-3 rounded-full font-semibold transition"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-28 px-6 bg-[#091710]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1603048719539-9ecb4f8f2cb2?q=80&w=1200&auto=format&fit=crop"
            alt="Aurova Dry Fruits"
            className="rounded-[40px] shadow-2xl h-[650px] object-cover w-full"
          />

          <div>
            <p className="uppercase tracking-[0.4em] text-[#d6b36a] mb-4 text-sm">
              About Aurova
            </p>

            <h2
  style={{
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
    fontFamily: "Georgia, serif",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "35px"
  }}
>
              The Taste of <span className="text-[#d6b36a]">Timeless Purity</span>
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-8">
              At Aurova अमृतव मेवा, we bring together premium quality dry fruits, luxurious presentation, and authentic taste to create a truly memorable experience.
            </p>

            <p className="text-gray-400 text-lg leading-9 mb-10">
              From handpicked almonds and buttery cashews to naturally sweet dates and rich pistachios, every product reflects freshness, purity, and excellence.
            </p>

            <a
              href="https://instagram.com/aurovameva"
              target="_blank"
              className="inline-block border border-[#d6b36a] text-[#d6b36a] hover:bg-[#d6b36a] hover:text-black px-8 py-4 rounded-full transition font-semibold"
            >
              Follow @AUROVAMEVA
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 px-6 bg-[#07130d]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-[#d6b36a] mb-4 text-sm">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Let’s Build Healthy Luxury Together
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-14 max-w-3xl mx-auto">
            For retail, gifting, wholesale, or premium dry fruit inquiries, connect directly with Aurova.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="bg-[#102018] rounded-3xl border border-[#d6b36a]/20 p-8">
              <h3 className="text-[#d6b36a] text-2xl font-bold mb-3">WhatsApp</h3>
              <p className="text-gray-300">+91 8369568815</p>
            </div>

            <div className="bg-[#102018] rounded-3xl border border-[#d6b36a]/20 p-8">
              <h3 className="text-[#d6b36a] text-2xl font-bold mb-3">Instagram</h3>
              <p className="text-gray-300">@AUROVAMEVA</p>
            </div>

            <div className="bg-[#102018] rounded-3xl border border-[#d6b36a]/20 p-8">
              <h3 className="text-[#d6b36a] text-2xl font-bold mb-3">Location</h3>
              <p className="text-gray-300">Mumbai, Maharashtra</p>
            </div>
          </div>

          <a
            href="https://wa.me/918369568815"
            target="_blank"
            className="inline-block bg-[#c9a15c] hover:bg-[#d6b36a] text-black px-10 py-5 rounded-full text-lg font-bold shadow-2xl transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/918369568815"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-4 shadow-2xl z-50 font-bold"
      >
        WhatsApp Us
      </a>

      <footer className="bg-black border-t border-[#d6b36a]/20 py-8 text-center text-gray-400">
        <h3 className="text-2xl text-[#d6b36a] font-bold mb-2">
          Aurova अमृतव मेवा
        </h3>

        <p className="mb-3">The Taste of Timeless Purity</p>

        <p>© 2026 Aurova Dry Fruits. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
