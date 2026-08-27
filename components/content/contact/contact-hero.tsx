import { getContactPage } from "@/lib/get-contact-page";
import { resolveIcon } from "@/lib/icon-map";

/**
 * Contact page hero: pitch on the left, a contact-details card driven by
 * the `contact-page` Payload global on the right. No client interactivity
 * needed here — that all lives in ContactForm below.
 */
export async function ContactHero() {
  const contactPage = await getContactPage();

  return (
    <section className="vhero-shape relative isolate overflow-hidden bg-[#0C203A] py-16 text-white">
      {/* The navy base doubles as the video's fallback — an unloaded video
          element is transparent, so the navy shows rather than black. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className="vhero-media absolute inset-0 -z-20 size-full object-cover"
      >
        <source src="/contact-vid.mp4" type="video/mp4" />
      </video>

      {/* Unlike the other heroes this one can't thin out to the right — the
          details card lives there — so the wash stays fairly strong across
          the whole band and only lifts to 70% at the far edge. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(115deg, #0C203AF5 0%, #0C203AE0 45%, #0C203AB3 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p
            className="vhero-item text-sm font-semibold tracking-wide text-[#D9A441] uppercase"
            style={{ ["--vhero-i" as string]: 0 }}
          >
            Contact Us
          </p>
          <h1
            className="vhero-item mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ ["--vhero-i" as string]: 1 }}
          >
            Let&apos;s Discuss Your Technical Challenge.
          </h1>
          <p
            className="vhero-item mt-6 max-w-xl text-white/80"
            style={{ ["--vhero-i" as string]: 2 }}
          >
            Send a project inquiry or request a formal proposal. We respond in
            less than 48 hours. All information is treated as confidential.
          </p>
        </div>

        {/* Opaque enough to guarantee contrast over moving footage — the old
            bg-white/5 was fine on flat navy but would let the video read
            straight through the contact details. */}
        <div
          className="vhero-item border border-white/15 bg-[#0C203A]/75 p-6 backdrop-blur-sm"
          style={{ ["--vhero-i" as string]: 3 }}
        >
          <div className="space-y-5">
            {contactPage.contactInfoItems.map((item) => {
              const Icon = resolveIcon(item.icon)

              return (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center bg-brand/30">
                    <Icon
                      aria-hidden
                      className="size-4 text-brand"
                      strokeWidth={1.75}
                    />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-white/50 uppercase">
                      {item.label}
                    </p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            We respond in less than 48h
          </div>
        </div>
      </div>
    </section>
  );
}
