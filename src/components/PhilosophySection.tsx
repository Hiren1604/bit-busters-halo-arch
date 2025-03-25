
export default function PhilosophySection() {
  const philosophyPoints = [
    {
      title: "Sustainable Innovation",
      description: "We incorporate eco-friendly materials and energy-efficient systems in every design.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      )
    },
    {
      title: "Form Follows Function",
      description: "We believe that beautiful design must always serve a practical purpose for those who inhabit it.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      title: "Client-Centered Design",
      description: "Every project begins with understanding our clients' needs, dreams, and lifestyle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      )
    },
    {
      title: "Attention to Detail",
      description: "We believe that excellence lies in the details, from the grand vision to the smallest element.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="philosophy" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Guiding Principles That Define Our Work
          </h2>
          <p className="text-muted-foreground">
            At HALO Architect, our design philosophy is built on principles that ensure
            every project achieves the perfect balance of beauty, functionality, and sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyPoints.map((point, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg border border-border hover:border-primary/30 transition-colors bg-background hover:shadow-lg"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-secondary/50 rounded-md text-primary">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-secondary/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Our Mission
          </h3>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80 italic font-heading">
            "Designing sustainable, innovative, and timeless spaces that inspire and enhance lives."
          </p>
        </div>
        <div className="mt-16 bg-secondary/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Our Vision
          </h3>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80 italic font-heading">
            "To redefine modern architecture with creativity, sustainability, and human-centered design."
          </p>
        </div>
      </div>
    </section>
  );
}
