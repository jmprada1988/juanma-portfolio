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
{/* eslint-disable react/no-unescaped-entities */}
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
              Greetings.
              I'm Juan Manuel, a passionate software engineer with a career spanning over seven years dedicated to the art of crafting innovative and functional software solutions.
              My journey has been marked by a deep engagement with JavaScript and TypeScript, where I've developed expertise in both front-end frameworks like React and Next.js and back-end technologies, including NodeJS and NestJS.

            </p>
            <p>
              My approach to software development is holistic, ensuring that every application I build is technically robust and intuitively designed.
              My technical portfolio includes extensive experience with databases, having worked with SQL systems like MySQL and PostgreSQL, as well as NoSQL databases such as MongoDB, Redis, and DynamoDB.
              This broad skill set allows me to tackle complex data challenges and implement efficient and scalable solutions.
            </p>
            <p>
              I've developed a strong foundation in mobile development through React Native, enabling me to deliver high-quality applications for iOS and Android devices.
            </p>

            <p>
              Cloud computing is another area in which I excel, particularly within the AWS ecosystem.
              I've successfully architected and optimized cloud infrastructures using essential AWS services like S3, ECS, Glue, and RedShift.
              My proficiency in containerization technologies like Docker and Kubernetes further enhances my ability to create scalable and portable applications that meet the demands of today's dynamic digital environment.

            </p>
            <p>
              When I'm not working on software projects, I enjoy exploring new technologies, diving into DIY projects, and appreciating the finer things in life, such as a well-prepared meal or a glass of fine wine.
              My life is also enriched by the companionship of my two dogs, Proxy and Maní, who add joy and energy to my daily routine.
              These personal interests humanize me and make me more relatable to potential collaborators.
            </p>
            <p>
              I am the Director of Architecture and Engineering at Helix Genetics,
              a company I co-founded with my wife. Our mission at Helix Genetics is to advance medical research and healthcare through cutting-edge software solutions.
              We are mainly focused on early-stage cancer detection and the development of advanced healthcare systems, aiming to make a meaningful impact in our community in Colombia and beyond.
            </p>
            <p>
              If you're interested in collaborating or discussing innovative ideas,
              please get in touch with me at juanma.prada88@gmail.com
              I look forward to connecting and exploring how we can create something impactful together.
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
