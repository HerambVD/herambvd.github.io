'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CodeIcon, BugIcon, MailIcon, PencilIcon, GitForkIcon } from 'lucide-react'
import Link from "next/link"

interface ReportProps {
  report?: string
  dir?: string
  ext?: string
}

interface LinkItemProps {
  href: string
  text: string
  icon: React.ReactNode
}

const LinkItem = ({ href, text, icon }: LinkItemProps) => {
  return (
    <li>
      <Button asChild variant="ghost" className="w-full justify-start">
        <Link href={href} className="flex items-center gap-2">
          {icon}
          <span>{text}</span>
        </Link>
      </Button>
    </li>
  )
}

export default function Report({
  report = "page",
  dir = "app",
  ext = ".tsx",
}: ReportProps) {
  const links = [
    {
      href: ``,
      text: "Code source of this page",
      icon: <CodeIcon className="h-4 w-4" />,
    },
    {
      href: "",
      text: "Report issue on GitHub",
      icon: <BugIcon className="h-4 w-4" />,
    },
    {
      href: ``,
      text: "Report issue by email",
      icon: <MailIcon className="h-4 w-4" />,
    },
    {
      href: ``,
      text: "Edit this page on GitHub",
      icon: <PencilIcon className="h-4 w-4" />,
    },
    {
      href: "",
      text: "",
      icon: <GitForkIcon className="h-4 w-4" />,
    },
  ]

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-20 pb-20 xl:px-32">
      <Card className="bg-background text-foreground">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-edu-nsw text-primary">
            Anything wrong with this page?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <LinkItem key={index} {...link} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

