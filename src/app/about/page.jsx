import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Juan Manuel. I live in Bogotá DC colombia, where I architect the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Juan Manuel. I live in Bogotá DC Colombia, where I architect the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Ahoy there, fellow digital explorers! I'm Juanma, your friendly neighborhood code conjurer, and I'm here to turn caffeine into beautifully functional software!

              👾 **Unleashing Tech Magic**: Armed with a degree in Computer Science and a passion for bringing digital dreams to life, I've spent more than seven fantastic years as a software engineer.
              Imagine me as a digital alchemist, transmuting lines of code into captivating applications.

            </p>
            <p>
              🚀 **The JavaScript Odyssey**: For over five years,
              I've been on a wild JavaScript adventure, zigzagging through its realms with the enthusiasm of a kid in a candy store.
              Whether it's crafting interactive user interfaces or sculpting server-side masterpieces,
              JavaScript/TypeScript is my trusty wand in this enchanting journey.
            </p>
            <p>
              ⚡ **Architect of the Digital Skies**: With my NodeJS cape and Express Nestjs armor,
              I've fearlessly ventured into the architecture realm, building and scaling applications that reach for the clouds.
              Front-end enchantments? I wield the powers of React, Next, Vue.js, and a trove of CSS spells, from SCSS to CSS modules,
              creating interfaces that are as visually stunning as they are user-friendly.
            </p>

            <p>
              📊 **Database Sorcery**: I've dabbled in the arcane arts of databases,
              from commanding the powerful SQL spirits of MySql and Postgres to forging alliances with the NoSQL guardians like MongoDB, Redis, and DynamoDb.
              My databases are more organized than a perfectly cataloged library – no magical bookmarks required!

            </p>
            <p>
              📱 **Mobile Wizardry**: Ever heard of React Native?
              It's my wand of choice for mobile development! With its spellbinding abilities, adding some swift and java touches for better IOS and Android support
              I craft mobile experiences that captivate and engage, all while keeping the user experience enchantingly seamless.

            </p>
            <p>
              ☁️ **Cloud Chronicles**: Venturing into the digital sky,
              I've harnessed the cloud with the mighty AWS Stack, From storing gems in S3 to optimization of ECS instances and setting up pipelines pulling to add some magic with amazon Glue just before feeding it to amazon RedShift
              Docker and Kubernetes? Oh, I've tamed those creatures too, ensuring that my software creations are as portable as they are powerful.

            </p>
            <p>
              🌌 **Ready for New Quests**: But I'm not just a tech maestro – I also have a soft spot for starry skies, DIY experiments, and the sweet thrill of a well-cooked meal. And while I code with passion, I also thrive on collaboration and am always eager to learn new incantations from my fellow wizards of the code realm.

              🚀 **Join Me on This Epic Journey**: So, whether you're on a quest for software that astonishes or simply want to discuss the latest tech enchantments, I'm your guide through this digital odyssey. Reach out to me at juanma.prada88@gmail.com, and together, let's script a tale of innovation!

              May your bugs be minor and your software always bewitching! 🎩✨
            </p>
            <p>
              🍷 **Sipping Code with a Glass of Red**: When the digital realms grow silent, you'll find me savoring life's finer flavors. Red wine, in particular, holds a special place in my heart. A glass of velvety Carmenere from Argentina or a robust Rioja from Spain? Those are my potions of relaxation, each sip a celebration of the artistry of both technology and taste.

              🐾 **Companions on the Quest**: While I'm busy conjuring code and savoring wine, I'm never alone on this grand adventure. Allow me to introduce my trusty sidekicks: Proxy and Maní, two furry wizards who bring boundless joy to my journey. Their boundless energy and unwavering loyalty remind me that life is meant to be lived to the fullest.

              So, whether I'm crafting intricate software spells or sharing a hearty laugh with Proxy and Maní, my world is an enchanting blend of the digital and the delightful. Drop me a message at juanma.prada88@gmail.com, and let's chat about tech, wine, or even swap tales of our four-legged companions. Here's to innovation, friendship, and the magic of a life well-lived!

              Cheers to codes, wines, and wagging tails! 🍻🍷🐶🐾

            </p>
            <p>
              In the realm of professional pursuits,
              I proudly wear the hat of CEO at Helix Genetics, a company co-founded with my wife to drive forward the frontiers of medical research and software innovation.
              Under the banner of Helix Genetics, our dedicated team is committed to enhancing human lives through cutting-edge projects that resonate with the heart of healthcare advancement.
              With a strategic focus on creating superior healthcare systems and pioneering models for early-stage cancer detection, we aspire to uplift our community in Colombia and beyond. Our mission isn't just to harness technology but to channel it as a catalyst for positive change, amplifying the impact of medical advancements on the lives of those we serve. As we navigate this intricate tapestry of science and technology, we remain steadfast in our commitment to weaving together a brighter, healthier future for all.

            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/jmprada88" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com/jmprada88" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink  href="https://github.com/jmprada1988" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/juanma-profile" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:juanma.prada88@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              juanma.prada88@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
