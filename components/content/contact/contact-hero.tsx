import { getContactPage } from "@/lib/get-contact-page";
import { resolveIcon } from "@/lib/icon-map";

const GRID_SIZE = 80;

/**
 * Contact page hero: pitch on the left, a contact-details card driven by
 * the `contact-page` Payload global on the right. No client interactivity
 * needed here — that all lives in ContactForm below.
 */
export async function ContactHero() {
  const contactPage = await getContactPage();

  return (
    <section className="relative overflow-hidden bg-[#0C203A] py-16 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Discuss Your Technical Challenge.
          </h1>
          <p className="mt-6 max-w-xl text-white/80">
            Send a project inquiry or request a formal proposal. We respond in
            less than 48 hours. All information is treated as confidential.
          </p>
        </div>

        <div className="border border-white/10 bg-white/5 p-6">
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
