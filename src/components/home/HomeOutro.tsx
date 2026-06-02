import { NewsletterSignup } from "../NewsletterSignup"
import { CurrentlyCard } from "./CurrentlyCard"


function HomeOutro({ onSubscribe }: { onSubscribe?: (email: string) => Promise<void> | void }) {
  return (
    <section className="grid grid-cols-2 border-t border-line max-md:grid-cols-1">
      <NewsletterSignup
        onSubscribe={onSubscribe}
        className="px-20 py-16"
      />
      <CurrentlyCard
        className="border-l border-line px-20 py-16 max-md:border-l-0 max-md:border-t"
      />
    </section>
  )
}

export { HomeOutro }