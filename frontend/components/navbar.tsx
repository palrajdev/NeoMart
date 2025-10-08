'use client';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { Badge } from "@heroui/react";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  SearchIcon
} from "@/components/icons";
import Logo from "./Logo";

export const Navbar = () => {
  const searchInput = (
    <Input
      classNames={{
        base: "w-full max-w-full h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Search Products, Brands & More..."
      size="sm"
      endContent={
        <Button
          size="sm"
          color="primary"
          variant="flat"
          className="h-full min-w-10 px-3 -mr-2"
          isIconOnly
        >
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        </Button>
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Left: Logo */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-end gap-0.5"
            href="/"
          >
            <Logo />
            <p className="font-bold relative top-[6px] text-[#A3B18A]">eoMart</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Middle: Search (40%) */}
      <NavbarContent
        className="hidden md:flex basis-2/5 justify-center"
        justify="center"
      >
        <NavbarItem className="w-full max-w-lg">{searchInput}</NavbarItem>
      </NavbarContent>

      {/* Right: Actions */}
      <NavbarContent className="basis-2/5 sm:basis-full" justify="end">
        {/* Theme toggle (always visible from sm) */}
        <NavbarItem className="hidden sm:flex gap-5">
          <ThemeSwitch />
        </NavbarItem>

        {/* Auth / Profile / Cart (hidden on small screens) */}
        <NavbarItem className="hidden md:flex">
          <NextLink href="/login">Login</NextLink>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <NextLink href="/cart" className="flex items-center gap-2 relative">
            {/* Wrap only the icon with Badge */}
            <div className="relative">
              <Badge color="primary" content="5" variant="faded" size="md" placement="top-right">
                <span className="text-2xl">🛒</span>
              </Badge>
            </div>

            {/* Cart text outside badge */}
            <span className="text-sm font-medium">Cart</span>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <NextLink href="/profile">👤 Profile</NextLink>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile view: Top right (collapsed menu) */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>

  );
};
