"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Bed, Bath, Maximize, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { displayNumber, isMissingNumber } from "@/lib/content-placeholders";
import type { RealEstateConfig, Property } from "@/types";

const statusColors: Record<string, string> = {
  "For Sale": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "For Rent": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Sold": "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400",
  "Rented": "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400",
};

function PropertyCard({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = property.images.filter(Boolean);
  const imageCount = images.length;
  const currentImage = images[activeImage] ?? property.images[0];

  const formatPrice = (p: number, currency: string, status: string) => {
    if (isMissingNumber(p)) return "[Missing number]";
    const formattedPrice = p >= 1000000 ? `${(p / 1000000).toFixed(1)}M` : p.toLocaleString();

    if (status === "For Rent" || status === "Rented") {
      return `${currency} ${formattedPrice}/mo`;
    }
    return `${currency} ${formattedPrice}`;
  };

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + imageCount) % imageCount);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % imageCount);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={currentImage}
          alt={property.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", statusColors[property.status])}>
            {property.status}
          </span>
          <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-semibold text-white">
            {property.type}
          </span>
          {property.featured && (
            <Badge className="bg-emerald-500 text-white text-xs">Featured</Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-black/80 px-3 py-1 text-white font-bold text-sm">
          {formatPrice(property.price, property.currency, property.status)}
        </div>
        {imageCount > 1 && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Show previous property image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Show next property image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
              {activeImage + 1}/{imageCount}
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base leading-tight mb-1">{property.title}</h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />{property.location}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">{property.description}</p>
        {property.features.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {property.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="secondary" className="text-xs">+{property.features.length - 3} more</Badge>
            )}
          </div>
        )}
        <div className="flex items-center gap-4 text-xs text-muted-foreground border-t pt-3">
          {(property.bedrooms || isMissingNumber(property.bedrooms ?? Number.NaN)) && (
            <div className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5" />{displayNumber(property.bedrooms ?? Number.NaN)} bed
            </div>
          )}
          {(property.bathrooms || isMissingNumber(property.bathrooms ?? Number.NaN)) && (
            <div className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" />{displayNumber(property.bathrooms ?? Number.NaN)} bath
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5" />{displayNumber(property.area)} {property.areaUnit}
          </div>
        </div>
        <Button asChild size="sm" className="mt-4 w-full gap-1.5 bg-emerald-600 text-white hover:bg-emerald-700">
          <a href="#contact" className="flex items-center gap-1.5 w-full justify-center">
            Enquire Now <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function RealEstateProperties({ config }: { config: RealEstateConfig }) {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "For Sale", "For Rent"];
  const filtered = filter === "All" ? config.properties : config.properties.filter((p) => p.status === filter);

  return (
    <section id="properties" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Property Listings"
          title="Find Your Perfect Property"
          description="Browse our curated selection of premium properties across Colombo and suburbs."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {statuses.map((s) => (
            <button key={s} onClick={() => setFilter(s)}
              className={cn("rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === s ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" : "border bg-card text-muted-foreground hover:border-emerald-500 hover:text-emerald-500")}>
              {s}
            </button>
          ))}
        </div>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
