"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Bed, Bath, Maximize, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RealEstateConfig, Property } from "@/types";

const statusColors: Record<string, string> = {
  "For Sale": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "For Rent": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Sold": "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400",
  "Rented": "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400",
};

function PropertyCard({ property }: { property: Property }) {
  const formatPrice = (p: number, status: string) => {
    if (status === "For Rent" || status === "Rented") {
      return `LKR ${p.toLocaleString()}/mo`;
    }
    return `LKR ${(p / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <img src={property.images[0]} alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", statusColors[property.status])}>
            {property.status}
          </span>
          {property.featured && (
            <Badge className="bg-emerald-500 text-white text-xs">Featured</Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-white font-bold text-sm backdrop-blur">
          {formatPrice(property.price, property.status)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base leading-tight mb-1">{property.title}</h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />{property.location}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">{property.description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground border-t pt-3">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5" />{property.bedrooms} bed
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" />{property.bathrooms} bath
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5" />{property.area} {property.areaUnit}
          </div>
        </div>
        <Button size="sm" className="mt-4 w-full gap-1.5 bg-emerald-600 text-white hover:bg-emerald-700">
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
