import { NewsletterSignup } from "../NewsletterSignup"
import { CurrentlyCard } from "./CurrentlyCard"


function HomeOutro({ onSubscribe }: { onSubscribe?: (email: string) => Promise<void> | void }) {
  return (
    <section className="grid grid-cols-2">
      <NewsletterSignup
        onSubscribe={onSubscribe}
        className="md:px-20 px-6 md:py-12 py-8 col-span-2 md:col-span-1"
      />
      <CurrentlyCard
        className="border-l border-line md:px-20 px-6 md:py-16 py-8 max-md:border-l-0 max-md:border-t"
      />
    </section>
  )
}

export { HomeOutro }