import Link from 'next/link';

export default function Services() {
  return (
    <main id="top">
      <section className="hero" style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'var(--bg)', textAlign: 'center' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--muted)' }}>CORE OFFERINGS</p>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            Our <span style={{ fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif", fontStyle: 'italic', color: 'var(--accent)' }}>Services</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted-2)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            A rigorous, phased delivery model spanning from strategic discovery to enterprise enablement. We build AI for modern teams.
          </p>
        </div>
      </section>

      <section id="services-framework" className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Phase 1: Discover */}
          <div className="service-phase reveal" style={{ marginBottom: '5rem' }}>
            <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '2rem', fontFamily: 'Outfit, sans-serif', color: 'var(--accent)', fontWeight: 300 }}>01</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Discover</h2>
            </div>
            <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>AI Strategy &amp; Roadmap</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Identify highest-impact opportunities and build the executive business case for AI investment.</p>
              </article>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>AI Proof of Concept (PoC)</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Rapidly validate technical feasibility and de-risk core assumptions before committing to scale.</p>
              </article>
            </div>
          </div>

          {/* Phase 2: Organize */}
          <div className="service-phase reveal" style={{ marginBottom: '5rem' }}>
            <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '2rem', fontFamily: 'Outfit, sans-serif', color: 'var(--accent)', fontWeight: 300 }}>02</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Organize</h2>
            </div>
            <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>Data Engineering &amp; BI</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Architect the robust, scalable data lakes and pipelines required for AI initiatives to succeed unconditionally.</p>
              </article>
            </div>
          </div>

          {/* Phase 3: Develop */}
          <div className="service-phase reveal" style={{ marginBottom: '5rem' }}>
            <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '2rem', fontFamily: 'Outfit, sans-serif', color: 'var(--accent)', fontWeight: 300 }}>03</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Develop</h2>
            </div>
            <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>AI Agents &amp; Automation</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Deploy autonomous multi-agent systems that chain complex iterative reasoning tasks securely.</p>
              </article>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>LLM &amp; Generative AI</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Fine-tuning and RAG integration for state-of-the-art Generative AI models against proprietary corporate data.</p>
              </article>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>Chatbot &amp; Conversational AI</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Build deeply contextual, intent-driven conversational interfaces for internal operations and external support.</p>
              </article>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>AI-Native Product Engineering</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Engineer ground-up SaaS architectures and interfaces where intelligence is an integrated fabric, not an add-on.</p>
              </article>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>Machine Learning &amp; Computer Vision</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Train bespoke predictive models, anomaly detection algorithms, and advanced optical character recognition pipelines.</p>
              </article>
            </div>
          </div>

          {/* Phase 4: Deploy */}
          <div className="service-phase reveal" style={{ marginBottom: '5rem' }}>
            <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '2rem', fontFamily: 'Outfit, sans-serif', color: 'var(--accent)', fontWeight: 300 }}>04</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Deploy</h2>
            </div>
            <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>AI Integration Services</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Embed AI reliably into live production systems, legacy technology stacks, and existing enterprise CI/CD pipelines.</p>
              </article>
            </div>
          </div>

          {/* Phase 6: Enablement (Wait, framework says phase 6 is Enablement) */}
          <div className="service-phase reveal" style={{ marginBottom: '5rem' }}>
            <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '2rem', fontFamily: 'Outfit, sans-serif', color: 'var(--accent)', fontWeight: 300 }}>05</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Enablement</h2>
            </div>
            <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>AI Training &amp; Enablement</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Empower existing internal engineering and product capability through comprehensive mentorship and workshops.</p>
              </article>
              <article className="interactive-service-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 600 }}>AI Teams &amp; Talent Augmentation</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Directly inject elite machine learning engineering velocity and AI strategy bandwidth into your organizational chart.</p>
              </article>
            </div>
          </div>

        </div>
      </section>

      <section className="section cta" style={{ background: 'var(--bg-2)', textAlign: 'center' }}>
        <div className="container reveal">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Looking for pre-packaged solutions?</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>We also offer turnkey platforms optimized for Document Processing, Knowledge Bases, and Customer Experience.</p>
          <Link href="/solutions" className="btn btn-primary">Explore Solutions</Link>
        </div>
      </section>

    </main>
  );
}
