'use client';
import {Card, Skeleton} from "@heroui/react";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
<div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between  ">
        
        {/* Left: Text content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold dark:text-white text-gray-900 leading-tight">
            Eco-Friendly Charcoal, <br className="hidden sm:block" />
            Delivered Fresh to Your Door.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Sustainable fuel solutions for kitchens, grills, and businesses — crafted with care.
          </p>
          
          {/* CTA(Call To Action) Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link href="/products">
              <Button color="success" size="lg" radius="lg" className="font-semibold">
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="bordered" color="success" size="lg" radius="lg" className="font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-[500px]">

        <Card className="w-full space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="w-full rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>

          <Image
            src="/images/view-burning-charcoal.jpg"
            alt="Eco-friendly charcoal"
            fill
            priority
            className="object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>

      {/* Decorative background smoke / overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/smoke-texture.png')] bg-cover bg-center opacity-10"></div>
    </div>
  );
}
