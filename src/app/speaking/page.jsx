import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Sharing',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events worldwide and been interviewed, going in-depth into architectural problems companies must address."
      intro="One of my favorite ways to share my ideas is through international tech conferences, where I get to explore the world while discussing cutting-edge software architecture. I also enjoy appearing on podcast interviews, as they provide a unique platform for me to dive into technical details and answer questions, all while sharing my passion for software development and my love for dogs."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="#"
            title="Architecting Node.Js Applications"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="Lessons learned from bad architectural decisions"
            description="They say that if you’re not embarrassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Business of Startups 2020"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design systems as a competitive advantage in front end applications"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Scaling our MVP to 20M Users and 200K Request per second"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Marrying a framework, recipe to failure"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
