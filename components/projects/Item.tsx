'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from 'lucide-react'

interface HeaderLink {
  url?: string
  icon?: React.ReactNode
  privateSource?: boolean
}

interface SeeMore {
  before?: string
  after?: string
  url?: string
  text?: string
}

interface ItemProps {
  name: string
  description: string
  headerImg: string
  impact?: string
  seeMore?: SeeMore
  techs: string[]
  headerLinks?: {
    github?: HeaderLink
    privateSource?: boolean
  }
}

export default function Item({
  name,
  headerImg,
  description,
  impact,
  seeMore,
  techs,
  headerLinks,
}: ItemProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            className="object-cover transition-all duration-500 group-hover:scale-105 w-full h-full"
            src={headerImg}
            alt={name}
          />
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-bold text-foreground">
          {name}
        </h2>

        {impact && (
          <div className="text-sm font-semibold text-green-600 dark:text-green-400">
            ✓ {impact}
          </div>
        )}

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {seeMore && (
          <p className="text-sm">
            <Link
              href={seeMore.url || "#"}
              className="text-primary hover:text-primary/80 inline-flex items-center gap-1 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {seeMore.text}
              <ExternalLink className="h-3 w-3" />
            </Link>
          </p>
        )}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
        {techs.map((tech, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-muted/50 hover:bg-primary/10 transition-colors duration-300"
          >
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
