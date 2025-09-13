/**
 * Hero content
 * This component contains the content for the main landing page hero section.
 * @returns JSX.Element
 */
export function HeroContent() {
  return (
    <div className="relative z-10 h-[calc(100vh-84px)] flex flex-col justify-between items-center px-8 py-12 md:px-16 md:py-20">
      <div className="text-center">
        <h2 className="text-xs md:text-sm font-mono font-light uppercase tracking-[0.2em] opacity-80 text-muted-foreground">
          <span className="word font-mono" data-delay="0">
            Welcome
          </span>
          <span className="word font-mono" data-delay="120">
            to
          </span>
          <span className="word font-mono" data-delay="240">
            <b>Orchata AI</b>
          </span>
          <span className="word font-mono" data-delay="360">
            —
          </span>
          <span className="word font-mono" data-delay="480">
            Advancing
          </span>
          <span className="word font-mono" data-delay="600">
            deep
          </span>
          <span className="word font-mono" data-delay="720">
            learning
          </span>
          <span className="word font-mono" data-delay="840">
            research.
          </span>
        </h2>
        <div className="mt-4 w-16 h-px opacity-30 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>

      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-foreground">
          <div className="mb-4 md:mb-6">
            <span className="word" data-delay="960">
              Pioneering
            </span>
            <span className="word" data-delay="1050">
              the
            </span>
            <span className="word" data-delay="1140">
              future
            </span>
            <span className="word" data-delay="1230">
              of
            </span>
            <br />
            <span className="word" data-delay="1320">
              artificial
            </span>
            <span className="word" data-delay="1410">
              intelligence
            </span>
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl font-thin leading-relaxed text-muted-foreground">
            <span
              className="word font-mono text-sm md:text-lg"
              data-delay="1560"
            >
              Through
            </span>
            <span
              className="word font-mono text-sm md:text-lg"
              data-delay="1650"
            >
              innovative
            </span>
            <span
              className="word font-mono text-sm md:text-lg"
              data-delay="1740"
            >
              neural
            </span>
            <span
              className="word font-mono text-sm md:text-lg"
              data-delay="1830"
            >
              architectures
            </span>
            <span
              className="word font-mono text-sm md:text-lg"
              data-delay="1920"
            >
              and
            </span>
            <span
              className="word font-mono text-sm md:text-lg"
              data-delay="2010"
            >
              breakthrough
            </span>
            <span
              className="word font-mono text-sm md:text-lg"
              data-delay="2100"
            >
              research
            </span>
          </div>
        </h1>
      </div>

      <div className="text-center">
        <div className="mb-4 w-16 h-px opacity-30 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <h2 className="text-xs md:text-sm font-mono font-light uppercase tracking-[0.2em] opacity-80 text-muted-foreground mb-6">
          <span className="word font-mono" data-delay="2640">
            More
          </span>
          <span className="word font-mono" data-delay="2730">
            coming
          </span>
          <span className="word font-mono" data-delay="2820">
            soon...
          </span>
        </h2>

        <div className="mt-6 flex justify-center space-x-4">
          <div className="w-1 h-1 rounded-full opacity-40 bg-primary"></div>
          <div className="w-1 h-1 rounded-full opacity-60 bg-primary"></div>
          <div className="w-1 h-1 rounded-full opacity-40 bg-primary"></div>
        </div>
      </div>
    </div>
  );
}
