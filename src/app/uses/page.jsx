import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 32GB RAM (2022)">
            I was using an Intel-based 14” Asus running Ubuntu 22.04 prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations nor I spend 10 hours trying to get my bluetooth driver to work after installing an update.
          </Tool>
          <Tool title="ThinkVision 27 inch Monitor - P27h-30">
            Perfect for high performers and multitaskers,
            the Lenovo ThinkVision P27h-30 Monitor is simply brilliant any which way you look at it.
            Its 27-inch 2560 x 1440 QHD resolution IPS display provides sharp, precise images with wide-viewing angles.
            Its 4-side borderless design gives you a sleek, large screen with an excellent contrast ratio. The ThinkVision P27h-30 makes for a dynamic, vibrant visual experience and offers 99% sRGB, 95% DCI-P3 and 99% BT.709; together with Avg. Delta E2 color accuracy.
          </Tool>

          <Tool title="Bose Noise Cancelling Headphones 700">
            The sweet sound of better silence.
            The Bose Noise Cancelling Headphones 700 are packed full of all the features you need for
            superior sound and premium quiet — including 11 customizable levels of noise cancellation with
            situational awareness for when you want to let the world in.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VIM">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, VIM is still the best text editor ever
            made when working within a shell.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="Webstorm">
            WebStorm is an integrated development environment for JavaScript and related technologies. Like other JetBrains IDEs,
            it makes your development experience more enjoyable, automating routine work and helping you handle complex tasks with ease.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Confluence Software">
            Confluence is your remote-friendly team workspace where knowledge and collaboration meet.
            In my daily basis I use Confluence for documentation and guides and Jira for project management.
          </Tool>
          <Tool title="DbDiagram">
            When it comes to architecting and database design you need a way to visualize your creations.
            A free, simple tool to draw ER diagrams by just writing code.
            Designed for developers and data analysts.
          </Tool>
          <Tool title="Postman">
            A great place to organize collection of APIs, setup Flows and automate test before launching  your creations to production.
            an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.
          </Tool>
          <Tool title="Pg Admin">
            pgAdmin is the most popular and feature rich Open Source administration and development platform for PostgreSQL, the most advanced Open Source database in the world.
          </Tool>
          <Tool title="MySql Workbench">
            MySQL Workbench is a unified visual tool for database architects, developers, and DBAs. MySQL Workbench provides data modeling, SQL development, and comprehensive administration tools for server configuration, user administration, backup, and much more. MySQL Workbench is available on Windows, Linux and Mac OS X.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
