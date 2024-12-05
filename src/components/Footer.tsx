import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Feito por{" "}
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Marcelo
            </Link>
            . Codigo Disponivel:{" "}
            <Link
              href="https://github.com/MarceloArraes/esbanjanja"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <TooltipProvider>
          <div className="flex items-center space-x-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/MarceloArraes"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub Profile</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn Profile</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter Profile</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </footer>
  );
}
