"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import {
  ArrowRight,
  Award,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Scissors,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BrandLogo } from "@/components/templates/BrandLogo";
import { ContactForm } from "@/components/shared/ContactForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { WhatsAppButton, WhatsAppInline } from "@/components/shared/WhatsAppButton";
import { getGoogleMapsSearchUrl } from "@/lib/contact-links";
import { displayNumber } from "@/lib/content-placeholders";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";
import { isExternalBookingUrl, resolveBookingUrl } from "@/lib/booking-url";
import { getInitials } from "@/lib/utils";
import { salonLiquidGlassThemeColors } from "@/config/salon-design";
import type { SalonConfig } from "@/types";
import styles from "./SalonLiquidGlassTemplate.module.css";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stylists", href: "#stylists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <div>{description}</div>}
    </div>
  );
}

export function SalonLiquidGlassTemplate({ config }: { config: SalonConfig }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceCategory, setServiceCategory] = useState("All");
  const [pricingCategory, setPricingCategory] = useState(
    config.serviceCategories[0] ?? "Hair",
  );
  const bookingUrl = resolveBookingUrl(config.bookingUrl);
  const bookingIsExternal = isExternalBookingUrl(bookingUrl);
  const bookingProps = bookingIsExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
  const serviceCategories = ["All", ...config.serviceCategories];
  const visibleServices =
    serviceCategory === "All"
      ? config.services
      : config.services.filter((service) => service.category === serviceCategory);
  const visiblePricing = config.pricing.filter(
    (service) => service.category === pricingCategory,
  );
  const movePricingTab = (currentCategory: string, direction: number) => {
    const currentIndex = config.serviceCategories.indexOf(currentCategory);
    const nextIndex =
      (currentIndex + direction + config.serviceCategories.length) %
      config.serviceCategories.length;
    const nextCategory = config.serviceCategories[nextIndex];
    setPricingCategory(nextCategory);
    requestAnimationFrame(() => {
      document.getElementById(`pricing-tab-${nextCategory}`)?.focus();
    });
  };

  return (
    <div
      className={styles.root}
      style={{
        "--salon-pink": salonLiquidGlassThemeColors.color1,
        "--salon-blue": salonLiquidGlassThemeColors.color2,
      } as CSSProperties}
    >
      <header className={styles.header}>
        <nav className={styles.navbar} aria-label="Salon navigation">
          <a href="#hero" className={styles.wordmark} aria-label={`${config.name} home`}>
            <BrandLogo
              src={config.logo}
              alt={config.name}
              size={30}
              className={styles.logo}
              fallback={<Scissors aria-hidden="true" />}
            />
            <span>
              {config.name}
              <small>Beauty studio</small>
            </span>
          </a>
          <span className={styles.navDivider} aria-hidden="true" />
          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.navActions}>
            <ThemeToggle className={styles.themeToggle} />
            <a className={styles.primaryButton} href={bookingUrl} {...bookingProps}>
              Book Now
            </a>
            <button
              type="button"
              className={styles.menuButton}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="salon-mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileOpen && (
            <div id="salon-mobile-menu" className={styles.mobileMenu}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={bookingUrl} {...bookingProps} onClick={() => setMobileOpen(false)}>
                Book Appointment
              </a>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="hero" className={styles.hero}>
          <Image
            src={config.heroImage}
            alt={`${config.name} salon`}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroWash} />
          <div className={styles.heroContent}>
            <div className={styles.heroPanel}>
              <p className={styles.eyebrow}>
                <Sparkles aria-hidden="true" /> Award-winning beauty studio
              </p>
              <h1 style={{ whiteSpace: "pre-line" }}>{config.heroTitle}</h1>
              <p className={styles.heroDescription}>{config.heroSubtitle}</p>
              <div className={styles.heroButtons}>
                <a className={styles.primaryButton} href={bookingUrl} {...bookingProps}>
                  {config.heroCtaText} <ArrowRight aria-hidden="true" />
                </a>
                <a className={styles.secondaryButton} href="#services">
                  Explore Services
                </a>
              </div>
              <div className={styles.stats}>
                {[
                  { icon: Users, value: "500+", label: "Happy Brides" },
                  { icon: Award, value: "15 Yrs", label: "Experience" },
                  { icon: Star, value: "4.9", label: "Google Rating" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label}>
                    <Icon aria-hidden="true" />
                    <span>{value}</span>
                    <small>{label}</small>
                  </div>
                ))}
              </div>
            </div>
            <span
              className={styles.locationPill}
            >
              <MapPin aria-hidden="true" /> {config.city}
            </span>
          </div>
        </section>

        <div className={styles.sections}>
          <section id="services" className={`${styles.glassSection} ${styles.services}`}>
            <SectionHeading
              eyebrow="Our services"
              title="Treatments for Every You"
              description="From everyday care to special-occasion transformations, find the treatment made for you."
            />
            <div className={styles.filters} aria-label="Filter salon services">
              {serviceCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  aria-pressed={serviceCategory === category}
                  onClick={() => setServiceCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className={styles.serviceGrid}>
              {visibleServices.map((service) => (
                <article key={service.id} className={styles.serviceCard}>
                  <span className={styles.category}>{service.category}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className={styles.serviceMeta}>
                    <span><Clock aria-hidden="true" /> {service.duration}</span>
                    <strong>LKR {displayNumber(service.price)}</strong>
                  </div>
                  <a href={bookingUrl} {...bookingProps}>
                    Book Now <ArrowRight aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="pricing" className={`${styles.glassSection} ${styles.pricing}`}>
            <SectionHeading
              eyebrow="Our pricing"
              title="Clear, Transparent Pricing"
              description="Straightforward prices with consultation and aftercare guidance included."
            />
            <div className={styles.filters} role="tablist" aria-label="Pricing categories">
              {config.serviceCategories.map((category) => (
                <button
                  type="button"
                  role="tab"
                  key={category}
                  id={`pricing-tab-${category}`}
                  aria-selected={pricingCategory === category}
                  aria-controls={`pricing-panel-${category}`}
                  tabIndex={pricingCategory === category ? 0 : -1}
                  onClick={() => setPricingCategory(category)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowRight") {
                      event.preventDefault();
                      movePricingTab(category, 1);
                    } else if (event.key === "ArrowLeft") {
                      event.preventDefault();
                      movePricingTab(category, -1);
                    } else if (event.key === "Home") {
                      event.preventDefault();
                      const firstCategory = config.serviceCategories[0];
                      setPricingCategory(firstCategory);
                      requestAnimationFrame(() =>
                        document.getElementById(`pricing-tab-${firstCategory}`)?.focus(),
                      );
                    } else if (event.key === "End") {
                      event.preventDefault();
                      const lastCategory = config.serviceCategories.at(-1) ?? category;
                      setPricingCategory(lastCategory);
                      requestAnimationFrame(() =>
                        document.getElementById(`pricing-tab-${lastCategory}`)?.focus(),
                      );
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className={styles.pricingLayout}>
              <div
                className={styles.priceList}
                role="tabpanel"
                id={`pricing-panel-${pricingCategory}`}
                aria-labelledby={`pricing-tab-${pricingCategory}`}
              >
                {visiblePricing.length ? (
                  visiblePricing.map((service) => (
                    <div key={service.id} className={styles.priceRow}>
                      <div>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                      </div>
                      <span><Clock aria-hidden="true" /> {service.duration}</span>
                      <strong>LKR {displayNumber(service.price)}</strong>
                    </div>
                  ))
                ) : (
                  <p className={styles.emptyState}>Pricing for this category is available on request.</p>
                )}
              </div>
              <aside className={styles.bookingCard}>
                <span className={styles.iconTile}><Sparkles aria-hidden="true" /></span>
                <h3>Ready for Your Transformation?</h3>
                <p>Book your personalized consultation and let our artists create your perfect look.</p>
                <a className={styles.primaryButton} href={bookingUrl} {...bookingProps}>
                  Book an Appointment <ArrowRight aria-hidden="true" />
                </a>
              </aside>
            </div>
          </section>

          <section id="stylists" className={`${styles.glassSection} ${styles.stylists}`}>
            <SectionHeading
              eyebrow="Our team"
              title="Artists Behind the Magic"
              description="Internationally trained specialists bringing care, craft, and artistry to every appointment."
            />
            <div className={styles.stylistGrid}>
              {config.stylists.map((stylist) => (
                <article key={stylist.id} className={styles.stylistCard}>
                  <div className={styles.stylistImage}>
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className={styles.coverImage}
                    />
                  </div>
                  <div className={styles.stylistBody}>
                    <h3>{stylist.name}</h3>
                    <p className={styles.role}>{stylist.role}</p>
                    <p>{stylist.bio}</p>
                    <span className={styles.experience}>{stylist.experience} experience</span>
                    <div className={styles.tags}>
                      {stylist.specialties.map((specialty) => (
                        <span key={specialty}>{specialty}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="gallery" className={`${styles.glassSection} ${styles.gallery}`}>
            <SectionHeading
              eyebrow="Our gallery"
              title="Real Transformations"
              description="Beautiful results, captured before and after."
            />
            <div className={styles.galleryGrid}>
              {config.beforeAfter.map((item) => (
                <article key={item.id} className={styles.galleryCard}>
                  <div className={styles.pair}>
                    <div>
                      <Image
                        src={item.before}
                        alt={`Before ${item.treatment}`}
                        fill
                        sizes="(max-width: 767px) 50vw, 17vw"
                        className={styles.coverImage}
                      />
                      <span>Before</span>
                    </div>
                    <div>
                      <Image
                        src={item.after}
                        alt={`After ${item.treatment}`}
                        fill
                        sizes="(max-width: 767px) 50vw, 17vw"
                        className={styles.coverImage}
                      />
                      <span>After</span>
                    </div>
                  </div>
                  <h3>{item.treatment}</h3>
                </article>
              ))}
            </div>
          </section>

          <section id="reviews" className={`${styles.glassSection} ${styles.reviews}`}>
            <SectionHeading
              eyebrow="Testimonials"
              title="Our Clients Love Us"
              description="Real stories from clients who trust our artists."
            />
            <div className={styles.reviewGrid}>
              {config.testimonials.map((testimonial) => (
                <article key={testimonial.id} className={styles.reviewCard}>
                  <Quote aria-hidden="true" />
                  <div
                    className={styles.rating}
                    role="img"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        aria-hidden="true"
                        data-filled={index < testimonial.rating}
                      />
                    ))}
                  </div>
                  <p>&ldquo;{testimonial.content}&rdquo;</p>
                  <div className={styles.reviewer}>
                    <div className={styles.avatar}>
                      {testimonial.avatar ? (
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className={styles.coverImage}
                        />
                      ) : (
                        <span>{getInitials(testimonial.name)}</span>
                      )}
                    </div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className={`${styles.glassSection} ${styles.contact}`}>
            <SectionHeading
              eyebrow="Contact us"
              title="Reserve Your Slot"
              description="Tell us what you need and our team will confirm your appointment."
            />
            <div className={styles.contactLayout}>
              <div className={styles.contactInfo}>
                <div className={styles.contactDetails}>
                  {[
                    { icon: Phone, label: "Call us", value: config.phone, href: `tel:${config.phone}` },
                    { icon: Mail, label: "Email", value: config.email, href: `mailto:${config.email}` },
                    {
                      icon: MapPin,
                      label: "Visit us",
                      value: `${config.address}, ${config.city}`,
                      href: getGoogleMapsSearchUrl(config.address, config.city),
                    },
                    { icon: Clock, label: "Hours", value: config.openingHoursText },
                  ].map(({ icon: Icon, label, value, href }) => {
                    const details = (
                      <>
                        <Icon aria-hidden="true" />
                        <span><small>{label}</small>{value}</span>
                      </>
                    );
                    return href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {details}
                      </a>
                    ) : (
                      <div key={label}>{details}</div>
                    );
                  })}
                </div>
                <div className={styles.whatsappCard}>
                  <MessageCircle aria-hidden="true" />
                  <h3>Book on WhatsApp</h3>
                  <p>Quick and easy booking with our team.</p>
                  <WhatsAppInline config={config.whatsapp} label="Chat on WhatsApp" />
                </div>
              </div>
              <div className={styles.formPanel}>
                <h3>Send an Enquiry</h3>
                <ContactForm
                  accentColor={salonLiquidGlassThemeColors.color1}
                  onSubmit={({ data, honeypot }) =>
                    submitLeadToGoogleSheet({
                      template: "salon",
                      businessName: config.name,
                      data,
                      honeypot,
                    })
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <a href="#hero" className={styles.wordmark}>
              <BrandLogo
                src={config.logo}
                alt={config.name}
                size={30}
                className={styles.logo}
                fallback={<Scissors aria-hidden="true" />}
              />
              <span>{config.name}<small>{config.tagline}</small></span>
            </a>
            <SocialLinks
              links={config.socialLinks}
              className={styles.socials}
              linkClassName={styles.socialLink}
            />
          </div>
          <div>
            <h2>Quick links</h2>
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div>
            <h2>Services</h2>
            {config.serviceCategories.map((category) => (
              <a key={category} href="#services">{category}</a>
            ))}
          </div>
          <div>
            <h2>Contact</h2>
            <a href={`tel:${config.phone}`}>{config.phone}</a>
            <a href={`mailto:${config.email}`}>{config.email}</a>
            <p>{config.address}, {config.city}</p>
          </div>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
      </footer>
      <WhatsAppButton config={config.whatsapp} />
    </div>
  );
}
