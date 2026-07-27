import { CredentialCard } from "./credential-card"
import { CREDENTIALS } from "./credentials-config"

/**
 * Compact credibility strip: registration, technical foundation, approach
 * and safety posture, at a glance. Sits right after the hero, before the
 * page goes into detail.
 */
export function Credentials() {
  return (
    <section className="bg-[#F4F6F9] py-16 border-t border-[#0B1F3A1F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((credential) => (
            <CredentialCard key={credential.title} {...credential} />
          ))}
        </div>
      </div>
    </section>
  )
}
