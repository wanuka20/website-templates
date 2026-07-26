"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Flame,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Star,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BrandLogo } from "@/components/templates/BrandLogo";
import { ContactForm } from "@/components/shared/ContactForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { StarRating } from "@/components/shared/StarRating";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";
import { getGoogleMapsSearchUrl } from "@/lib/contact-links";
import { buildWhatsAppUrl, getInitials } from "@/lib/utils";
import { displayNumber } from "@/lib/content-placeholders";
import type { RestaurantConfig } from "@/types";
import styles from "./RestaurantEditorialTemplate.module.css";

const navigation = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  { value: "50+", label: "Dishes", Icon: UtensilsCrossed },
  { value: "8 yrs", label: "Established", Icon: CalendarDays },
  { value: "4.9 / 5", label: "Google rating", Icon: Star },
];

function EditorialLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`${styles.eyebrow} ${light ? styles.eyebrowLight : ""}`}>
      <span>{children}</span>
      <span aria-hidden="true" className={styles.eyebrowRule} />
    </div>
  );
}

export function RestaurantEditorialTemplate({
  config,
}: {
  config: RestaurantConfig;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    config.menuCategories[0] ?? "",
  );

  const filteredMenu = useMemo(
    () =>
      activeCategory
        ? config.menu.filter((item) => item.category === activeCategory)
        : config.menu,
    [activeCategory, config.menu],
  );

  const averageRating = config.testimonials.length
    ? config.testimonials.reduce((total, item) => total + item.rating, 0) /
      config.testimonials.length
    : 0;
  const whatsappUrl = buildWhatsAppUrl(
    config.whatsapp.phone,
    config.whatsapp.defaultMessage,
  );
  const mapUrl = getGoogleMapsSearchUrl(config.address, config.city);

  return (
    <div className={styles.editorial}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Restaurant navigation">
          <a href="#hero" className={styles.brand} aria-label={`${config.name} home`}>
            <BrandLogo
              src={config.logo}
              alt={config.name}
              size={24}
              className={styles.brandLogo}
              fallback={<UtensilsCrossed aria-hidden="true" />}
            />
            <span>{config.name}</span>
          </a>

          <div className={styles.desktopLinks}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className={styles.navActions}>
            <ThemeToggle className={styles.themeToggle} />
            <a href="#contact" className={styles.reserveNav}>
              Reserve table
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={styles.mobileTrigger}
                  aria-label="Open navigation menu"
                >
                  <Menu aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className={styles.mobileSheet}>
                <div className={styles.mobileBrand}>
                  <UtensilsCrossed aria-hidden="true" />
                  <span>{config.name}</span>
                </div>
                <nav className={styles.mobileLinks} aria-label="Mobile navigation">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Reserve a table
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className={styles.hero}>
          <Image
            src={config.heroImage}
            alt={`${config.name} dining experience`}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <EditorialLabel light>{config.cuisine}</EditorialLabel>
              <h1>{config.heroTitle}</h1>
              <p>{config.heroSubtitle}</p>
              <div className={styles.heroActions}>
                <a href="#contact" className={styles.primaryButton}>
                  {config.heroCtaText}
                </a>
                <a href="#menu" className={styles.secondaryButton}>
                  View menu
                </a>
              </div>
              <div className={styles.heroStats}>
                {heroStats.map(({ value, label, Icon }) => (
                  <div key={label} className={styles.heroStat}>
                    <Icon aria-hidden="true" />
                    <span>
                      <strong>{value}</strong>
                      <small>{label}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className={styles.signatureSection}>
          <div className={styles.signatureGrid}>
            <div className={styles.sectionIntro}>
              <EditorialLabel>Signature dishes</EditorialLabel>
              <h2>A symphony of flavours</h2>
              <span className={styles.shortRule} aria-hidden="true" />
              <p>
                Our most celebrated creations, crafted from local ingredients and
                made to be remembered.
              </p>
              <a href="#menu" className={styles.outlineButton}>
                View full menu
              </a>
            </div>
            <div className={styles.featuredCards}>
              {config.featuredDishes.slice(0, 3).map((dish) => (
                <article key={dish.id} className={styles.featuredCard}>
                  {dish.image && (
                    <div className={styles.featuredImage}>
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(max-width: 767px) 82vw, (max-width: 1100px) 31vw, 300px"
                      />
                    </div>
                  )}
                  <div className={styles.featuredBody}>
                    <div className={styles.dishHeading}>
                      <h3>{dish.name}</h3>
                      <span>Chef&apos;s pick</span>
                    </div>
                    <p>{dish.description}</p>
                    <div className={styles.dishMeta}>
                      <strong>LKR {displayNumber(dish.price)}</strong>
                      <span>
                        {dish.spicy && (
                          <span>
                            <Flame aria-hidden="true" /> Spicy
                          </span>
                        )}
                        {dish.vegetarian && <span>Vegetarian</span>}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className={styles.menuSection}>
          <div className={styles.categoryBar} aria-label="Menu categories">
            <div className={styles.categoryScroller}>
              {config.menuCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  className={
                    activeCategory === category ? styles.activeCategory : undefined
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.menuInner}>
            <div className={styles.menuHeading}>
              <div>
                <EditorialLabel>From our kitchen</EditorialLabel>
                <h2>{activeCategory || "Our menu"}</h2>
              </div>
              <p>
                Seasonal Sri Lankan ingredients, thoughtful technique, and generous
                flavour in every plate.
              </p>
            </div>
            <div className={styles.menuList} aria-live="polite">
              {filteredMenu.map((item) => (
                <article key={item.id} className={styles.menuItem}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={112}
                      height={112}
                      sizes="112px"
                      className={styles.menuImage}
                    />
                  )}
                  <div className={styles.menuItemCopy}>
                    <div className={styles.menuItemTitle}>
                      <h3>{item.name}</h3>
                      <span aria-hidden="true" />
                      <strong>LKR {displayNumber(item.price)}</strong>
                    </div>
                    <p>{item.description}</p>
                    <div className={styles.menuTags}>
                      {item.featured && (
                        <span>
                          <Sparkles aria-hidden="true" /> Featured
                        </span>
                      )}
                      {item.spicy && (
                        <span>
                          <Flame aria-hidden="true" /> Spicy
                        </span>
                      )}
                      {item.vegetarian && <span>Vegetarian</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutStory}>
            <EditorialLabel light>Our story</EditorialLabel>
            <h2>Where tradition meets modernity</h2>
            <p>{config.description}</p>
            <p>
              Every recipe honours generations of craft while our kitchen brings a
              fresh, contemporary point of view to the table.
            </p>
            <a href="#gallery" className={styles.blueOutlineButton}>
              Learn more <ArrowRight aria-hidden="true" />
            </a>
            <div className={styles.aboutImages}>
              <Image
                src={config.aboutImage1}
                alt={`${config.name} interior`}
                width={520}
                height={260}
                sizes="(max-width: 767px) 50vw, 300px"
              />
              <Image
                src={config.aboutImage2}
                alt={`${config.name} culinary team`}
                width={520}
                height={260}
                sizes="(max-width: 767px) 50vw, 300px"
              />
            </div>
          </div>
          <div className={styles.hoursPanel}>
            <EditorialLabel>Opening hours</EditorialLabel>
            <div className={styles.hoursList}>
              {config.openingHours.map((hours) => (
                <div key={hours.day}>
                  <span>{hours.day}</span>
                  <strong>
                    {hours.closed ? "Closed" : `${hours.open} – ${hours.close}`}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.reviewSection}>
          <div className={styles.reviewGrid}>
            <div className={styles.reviewIntro}>
              <EditorialLabel>What our guests say</EditorialLabel>
              <h2>Experiences that stay with you</h2>
              <a href="#testimonials" className={styles.outlineButton}>
                View all reviews
              </a>
              <StarRating rating={averageRating} className={styles.overallStars} />
              <p>
                {averageRating.toFixed(1)}/5 from {config.testimonials.length} guest
                reviews
              </p>
            </div>
            <div className={styles.reviewCards}>
              {config.testimonials.slice(0, 3).map((testimonial) => (
                <article key={testimonial.id} className={styles.reviewCard}>
                  <Quote aria-hidden="true" />
                  <p>&ldquo;{testimonial.content}&rdquo;</p>
                  <StarRating
                    rating={testimonial.rating}
                    className={styles.cardStars}
                  />
                  <div className={styles.reviewer}>
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt=""
                        width={42}
                        height={42}
                      />
                    ) : (
                      <span aria-hidden="true">{getInitials(testimonial.name)}</span>
                    )}
                    <div>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.role}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className={styles.gallerySection}>
          <div className={styles.galleryHeading}>
            <EditorialLabel>Ambience &amp; artistry</EditorialLabel>
            <h2>A feast for the senses</h2>
          </div>
          <div className={styles.galleryScroller}>
            {config.galleryImages.map((image) => (
              <figure key={image.id}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={520}
                  height={340}
                  sizes="(max-width: 767px) 76vw, 280px"
                />
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactPanel}>
            <div className={styles.contactDetails}>
              <EditorialLabel>Reservations</EditorialLabel>
              <h2>Book your table</h2>
              <p>We can&apos;t wait to welcome you.</p>
              <div className={styles.contactLinks}>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin aria-hidden="true" />
                  <span>{config.address}, {config.city}</span>
                </a>
                <a href={`tel:${config.reservationPhone}`}>
                  <Phone aria-hidden="true" />
                  <span>{config.reservationPhone}</span>
                </a>
                <a href={`mailto:${config.email}`}>
                  <Mail aria-hidden="true" />
                  <span>{config.email}</span>
                </a>
                <div>
                  <Clock3 aria-hidden="true" />
                  <span>
                    {config.openingHours[0]
                      ? `${config.openingHours[0].day}: ${config.openingHours[0].open} – ${config.openingHours[0].close}`
                      : "Contact us for opening hours"}
                  </span>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappInline}
              >
                <MessageCircle aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
            <div className={styles.formPanel}>
              <h3>Reservation details</h3>
              <ContactForm
                className={styles.reservationForm}
                accentColor="#22211F"
                copy={{
                  subjectLabel: "Date, time & guests",
                  subjectPlaceholder: "e.g. Friday, 7:30 PM, table for 4",
                  messageLabel: "Special requests",
                  messagePlaceholder:
                    "Dietary requirements, occasion, seating preference...",
                  submitLabel: "Reserve table",
                  successTitle: "Reservation request sent",
                  successMessage:
                    "Thank you. The restaurant will contact you to confirm availability.",
                }}
                onSubmit={({ data, honeypot }) =>
                  submitLeadToGoogleSheet({
                    template: "restaurant",
                    businessName: config.name,
                    data,
                    honeypot,
                  })
                }
              />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div>
              <BrandLogo
                src={config.logo}
                alt={config.name}
                size={24}
                className={styles.brandLogo}
                fallback={<UtensilsCrossed aria-hidden="true" />}
              />
              <strong>{config.name}</strong>
            </div>
            <p>{config.tagline}</p>
          </div>
          <div>
            <h2>Explore</h2>
            {navigation.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
          <div>
            <h2>Help</h2>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Reservations</a>
          </div>
          <div>
            <h2>Follow</h2>
            <SocialLinks
              links={config.socialLinks}
              className={styles.footerSocials}
              linkClassName={styles.footerSocialLink}
            />
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </div>
      </footer>

      <WhatsAppButton
        config={config.whatsapp}
        className="!bg-[#2B9664] !shadow-md focus-visible:!ring-[#F5F1E8]"
      />
    </div>
  );
}
