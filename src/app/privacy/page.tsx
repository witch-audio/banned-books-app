import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { HighlightText } from '@/components/ui/HighlightText'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'BannedBooks.app does not collect, store, or share any personal data — on the site or the app.',
}

export default function PrivacyPage() {
  return (
    <Container className="pb-16 pt-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Privacy <HighlightText>Policy</HighlightText>
        </h1>
        <p className="mt-3 text-muted">Last updated: March 2025</p>

        <div className="mt-8 space-y-10 leading-relaxed">
          <section className="rounded-lg border border-accent/15 bg-surface/50 p-7">
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              The Short Version
            </h2>
            <p className="mt-3 text-lg">
              We collect <strong>nothing</strong>. No personal data, no analytics, no cookies, no
              tracking — on bannedbooks.app or in the app.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              What We Do Not Collect
            </h2>
            <ul className="mt-3 space-y-2">
              {[
                'Your name, email address, or any identifying information',
                'Your IP address or approximate location',
                'What books you view, search for, or click on',
                'Device identifiers or browser fingerprints',
                'Usage patterns, session duration, or navigation paths',
                'Any form of behavioral or advertising data',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 text-accent">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              Cookies & Local Storage
            </h2>
            <p className="mt-3">
              We do not use cookies. We do not use third-party analytics services (no Google
              Analytics, no Mixpanel, no Segment, no tracking pixels of any kind).
            </p>
            <p className="mt-3">
              Your device may use local storage to remember your theme preference (light or dark
              mode). This data never leaves your device and is not accessible to us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              Third-Party Services
            </h2>
            <p className="mt-3">
              This site is hosted on Netlify. Netlify may log standard server-side request data
              (such as IP addresses and request paths) for infrastructure purposes. We do not have
              access to this data in an identifiable form, and it is not used for tracking or
              marketing. See{' '}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Netlify&apos;s privacy policy
              </a>{' '}
              for details.
            </p>
            <p className="mt-3">
              External links on this site (e.g. to PEN America, the ALA, or retailers) are subject
              to those sites&apos; own privacy policies. We are not responsible for their practices.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy? Reach out at{' '}
              <a
                href="mailto:witchaudiostudios@gmail.com"
                className="text-accent hover:underline"
              >
                witchaudiostudios@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
