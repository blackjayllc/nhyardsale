"use client";

import { useState } from "react";
import { MapPin, Calendar, Search, Tag, ChevronDown, Menu, X, ArrowRight, Sparkles, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const towns = [
  "All Towns",
  "Hopkinton",
  "Concord",
  "Manchester",
  "Nashua",
  "Portsmouth",
  "Keene",
  "Dover",
  "Rochester",
  "Lebanon",
];

const dates = [
  "This Weekend",
  "Today",
  "Tomorrow",
  "Next Weekend",
  "This Month",
];

const featuredSales = [
  {
    id: 1,
    title: "Vintage Collectibles",
    description: "Antiques, retro decor, and rare finds",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Kids' Toys & Games",
    description: "Gently used toys, games, and books",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Tools & Equipment",
    description: "Power tools, garden equipment, and more",
    image: "https://images.unsplash.com/photo-1581147036324-c1c88c9b1e3b?w=400&h=300&fit=crop",
  },
];

const upcomingSales = [
  {
    id: 1,
    title: "Hopkinton Town-Wide Yard Sale",
    date: "Memorial Day Weekend",
    location: "Hopkinton, NH",
    spots: "45+ Sales",
  },
  {
    id: 2,
    title: "Concord Community Sale",
    date: "June 7-8, 2026",
    location: "Downtown Concord",
    spots: "30+ Sales",
  },
  {
    id: 3,
    title: "Portsmouth Treasure Hunt",
    date: "June 14, 2026",
    location: "Portsmouth, NH",
    spots: "25+ Sales",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Tag className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              NH<span className="text-primary">YardSale</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Find Sales
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Towns
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Tips
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-foreground">
              Log in
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              List Your Sale
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-foreground">Home</a>
              <a href="#" className="text-sm font-medium text-muted-foreground">Find Sales</a>
              <a href="#" className="text-sm font-medium text-muted-foreground">Towns</a>
              <a href="#" className="text-sm font-medium text-muted-foreground">Tips</a>
              <hr className="border-border" />
              <Button variant="ghost" className="justify-start text-foreground">Log in</Button>
              <Button className="bg-primary text-primary-foreground">List Your Sale</Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  <span>Find treasures near you</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl text-balance">
                  Discover Yard Sales Across New Hampshire
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Your one-stop destination for finding local yard sales, garage sales, and estate sales. Uncover hidden gems in your neighborhood.
                </p>

                {/* Search Box */}
                <Card className="mt-4 border-border shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end">
                      <div className="flex-1">
                        <label className="mb-2 block text-sm font-medium text-foreground">
                          Town
                        </label>
                        <Select value={selectedTown} onValueChange={setSelectedTown}>
                          <SelectTrigger className="w-full bg-background border-border">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <SelectValue placeholder="Select town" />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            {towns.map((town) => (
                              <SelectItem key={town} value={town.toLowerCase()}>
                                {town}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1">
                        <label className="mb-2 block text-sm font-medium text-foreground">
                          When
                        </label>
                        <Select value={selectedDate} onValueChange={setSelectedDate}>
                          <SelectTrigger className="w-full bg-background border-border">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <SelectValue placeholder="Pick a date" />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            {dates.map((date) => (
                              <SelectItem key={date} value={date.toLowerCase()}>
                                {date}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6">
                        <Search className="mr-2 h-4 w-4" />
                        Search Sales
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <div className="flex gap-8 mt-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Active Sales</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">150+</p>
                    <p className="text-sm text-muted-foreground">Towns</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10k+</p>
                    <p className="text-sm text-muted-foreground">Happy Shoppers</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative hidden lg:block">
                <div className="aspect-square rounded-2xl bg-muted overflow-hidden border border-border shadow-xl">
                  <div className="relative h-full w-full bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=600&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border">
                        <p className="text-lg font-semibold text-foreground mb-2">Weekend Sales</p>
                        <div className="flex items-center gap-2 text-primary">
                          <MapPin className="h-5 w-5" />
                          <span className="text-2xl font-bold">47</span>
                          <span className="text-muted-foreground">sales near you</span>
                        </div>
                      </div>
                    </div>
                    {/* Map pins */}
                    <div className="absolute top-1/4 left-1/3 h-4 w-4 rounded-full bg-primary shadow-lg animate-pulse" />
                    <div className="absolute top-1/3 right-1/4 h-4 w-4 rounded-full bg-secondary shadow-lg animate-pulse" />
                    <div className="absolute bottom-1/3 left-1/2 h-4 w-4 rounded-full bg-primary shadow-lg animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/3 h-4 w-4 rounded-full bg-secondary shadow-lg animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Upcoming Town-Wide Sales
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Don't miss these popular community events
                </p>
              </div>
              <Button variant="outline" className="w-fit border-border text-foreground hover:bg-muted">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingSales.map((sale) => (
                <Card key={sale.id} className="group border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                      <Clock className="h-3 w-3" />
                      {sale.date}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {sale.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {sale.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {sale.spots}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Cards Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* List Your Sale CTA */}
              <Card className="relative overflow-hidden bg-primary border-none">
                <CardContent className="relative z-10 p-8 lg:p-10">
                  <h3 className="mb-3 text-2xl font-bold text-primary-foreground">
                    List Your Yard Sale
                  </h3>
                  <p className="mb-6 text-primary-foreground/90 leading-relaxed">
                    Reach thousands of local treasure hunters. Get your sale on the map and attract more visitors.
                  </p>
                  <Button className="bg-card text-primary hover:bg-card/90">
                    Get Listed for $3
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
                <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-primary-foreground/10" />
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary-foreground/10" />
              </Card>

              {/* Tips CTA */}
              <Card className="relative overflow-hidden bg-secondary border-none">
                <CardContent className="relative z-10 p-8 lg:p-10">
                  <h3 className="mb-3 text-2xl font-bold text-secondary-foreground">
                    Treasure Hunting Tips
                  </h3>
                  <p className="mb-6 text-secondary-foreground/90 leading-relaxed">
                    Learn the best strategies for finding amazing deals and hidden gems at local yard sales.
                  </p>
                  <Button className="bg-card text-secondary hover:bg-card/90">
                    Read Our Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
                <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-secondary-foreground/10" />
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-secondary-foreground/10" />
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">
                Featured Sales of the Week
              </h2>
              <p className="mt-2 text-muted-foreground">
                Browse popular categories and find what you're looking for
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredSales.map((sale) => (
                <Card key={sale.id} className="group overflow-hidden border-border hover:shadow-lg transition-all cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={sale.image}
                      alt={sale.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {sale.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sale.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-background lg:text-4xl text-balance">
              Ready to Find Your Next Treasure?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-background/80 leading-relaxed">
              Join thousands of New Hampshire residents discovering amazing deals at local yard sales every weekend.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Browse Sales Near You
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                List Your Sale
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Tag className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">
                  NH<span className="text-primary">YardSale</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting New Hampshire communities through local yard sales since 2020.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Find Sales</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">List Your Sale</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Town-Wide Events</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Yard Sale Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Towns</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Hopkinton</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Concord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Manchester</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portsmouth</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 NHYardSale.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
