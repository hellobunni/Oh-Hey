import { NewsletterSignup } from "@/components/NewsletterSignup"
import { CurrentlyCard } from "./CurrentlyCard"
import FollowStrip from "./FollowStrip"

function HomeOutro({ onSubscribe }: { onSubscribe?: (email: string) => Promise<void> | void }) {
  return (
    <>
      <FollowStrip />

      <section id="newsletter" className="border-b-2 border-card py-[72px] px-6">
        <NewsletterSignup onSubscribe={onSubscribe} />
      </section>

      <section className="border-b-2 border-card">
        <div className="max-w-xl mx-auto px-6 py-12">
          <CurrentlyCard />
        </div>
      </section>
    </>
  )
}

export { HomeOutro }
