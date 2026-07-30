import Image from "next/image";

/**
 * Capability statement band that follows the hero. A single lead paragraph
 * on a tinted surface, with a decorative technical-line graphic bleeding off
 * the right edge on larger screens.
 */
export function Approach() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F9]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[220px] lg:block"
      >
        <Image
          src="/images/line-img.png"
          alt=""
          fill
          sizes="220px"
          className="object-cover object-right"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="max-w-3xl text-xl leading-relaxed text-foreground/70 sm:text-3xl">
          We combine engineering expertise, data-driven insight and practical
          project support to improve operations, reduce risk, strengthen
          compliance, and advance energy and low-carbon industrial solutions.
        </p>
      </div>
    </section>
  );
}
