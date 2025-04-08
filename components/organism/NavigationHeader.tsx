"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  customNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Web Development",
    href: "",
    description:
      "We build custom websites that are designed to be user-friendly and easy to navigate.",
  },
  {
    title: "Web Design",
    href: "",
    description:
      "We design custom websites that are designed to be user-friendly and easy to navigate.",
  },
  {
    title: "SEO",
    href: "",
    description:
      "We optimize your website for search engines to improve your visibility and attract more traffic.",
  },
  {
    title: "Social Media Marketing",
    href: "",
    description:
      "We manage your social media accounts to help you connect with your audience and grow your brand.",
  },
  {
    title: "Email Marketing",
    href: "",
    description:
      "We create and manage email campaigns to help you connect with your audience and grow your brand.",
  },
  {
    title: "Graphic Design",
    href: "",
    description:
      "We create custom graphics for your website and social media accounts.",
  },
];

export default function NavigationHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row gap-10">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={customNavigationMenuTrigger()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={customNavigationMenuTrigger()}>
              <NavigationMenuTrigger className="p-0 flex flex-row gap-1 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:hover:text-white hover:text-white ">
                About
              </NavigationMenuTrigger>
            </NavigationMenuLink>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      About Us
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learn more about our company and our mission.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about/team" title="Our Team">
                Meet the talented individuals behind our success.
              </ListItem>
              <ListItem href="/about/history" title="Our History">
                Discover our journey and milestones.
              </ListItem>
              <ListItem href="/about/values" title="Our Values">
                Learn about our core principles and what drives us.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={customNavigationMenuTrigger()}>
              <NavigationMenuTrigger className="p-0 flex flex-row gap-1 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:hover:text-white hover:text-white ">
                Services
              </NavigationMenuTrigger>
            </NavigationMenuLink>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={cn(customNavigationMenuTrigger())}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/portfolio" legacyBehavior passHref>
            <NavigationMenuLink className={customNavigationMenuTrigger()}>
              Portfolio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={customNavigationMenuTrigger()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
