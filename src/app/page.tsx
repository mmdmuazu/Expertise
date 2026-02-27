import Link from "next/link";
import { BookOpen, Users, Lightbulb, TrendingUp } from "lucide-react";

export default function HomePage() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Skill Development & Employability",
      description:
        "Digital skills, vocational training, soft skills development, and internship opportunities to equip youth with marketable competencies.",
      color: "from-primary to-teal",
      benefits: [
        "Digital Skills",
        "Vocational Training",
        "Soft Skills",
        "Internships",
      ],
    },
    {
      icon: Users,
      title: "Advocacy & Awareness",
      description:
        "Empowerment campaigns on gender equality, mental health, anti-drug initiatives, and youth rights awareness.",
      color: "from-accent to-gold",
      benefits: [
        "Gender Equality",
        "Mental Health",
        "Anti-Drug Campaigns",
        "Youth Rights",
      ],
    },
    {
      icon: TrendingUp,
      title: "Leadership & Civic Engagement",
      description:
        "Youth leadership academy, school clubs, volunteer mobilization, and community service programs.",
      color: "from-teal to-primary",
      benefits: [
        "Leadership Academy",
        "School Clubs",
        "Volunteering",
        "Community Service",
      ],
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship & Innovation",
      description:
        "Startup bootcamps, ideation workshops, startup grants, and mentorship for innovative youth entrepreneurs.",
      color: "from-gold to-accent",
      benefits: [
        "Startup Bootcamps",
        "Ideation Workshops",
        "Grants",
        "Mentorship",
      ],
    },
  ];

  const stats = [
    { number: "50k", label: "Youth Target", icon: "👥" },
    { number: "5", label: "States Covered", icon: "🗺️" },
    { number: "200", label: "School Clubs", icon: "🏫" },
    { number: "1M+", label: "Awareness Reach", icon: "📢" },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Empowering Northern Nigeria’s Youth to Lead, Innovate, and Thrive
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We equip young people aged 14–30 with practical skills, leadership
            pathways, and inclusive opportunities that drive economic
            empowerment and social transformation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/marketing/get-involved"
              className="btn-primary inline-block"
            >
              Partner With Us
            </Link>
            <Link href="/marketing/partner" className="btn-accent inline-block">
              Support a Program
            </Link>
            <Link
              href="/marketing/volunteer"
              className="btn-secondary inline-block"
            >
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-200">
          <div className="card p-6 text-left">
            <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To build a generation of empowered and self-reliant youths who
              contribute meaningfully to Nigeria's development.
            </p>
          </div>
          <div className="card p-6 text-left">
            <h3 className="text-xl font-bold text-accent mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To equip young people with relevant skills, knowledge, and
              opportunities through training, advocacy, and community
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Impact (2026–2028 goals)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <p className="text-2xl font-extrabold text-primary">50,000</p>
              <p className="text-gray-600">Youth Target</p>
            </div>
            <div className="card p-6">
              <p className="text-2xl font-extrabold text-primary">5</p>
              <p className="text-gray-600">Northern States</p>
            </div>
            <div className="card p-6">
              <p className="text-2xl font-extrabold text-primary">4</p>
              <p className="text-gray-600">Strategic Pillars</p>
            </div>
            <div className="card p-6">
              <p className="text-2xl font-extrabold text-primary">1M+</p>
              <p className="text-gray-600">Advocacy Reach Goal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Who We Serve
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Secondary school students",
              "Unemployed & underemployed youth",
              "School dropouts",
              "Girls & young women",
              "Persons with disabilities",
              "Vulnerable and at-risk youth",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Skills Development",
              "Entrepreneurship Support",
              "Advocacy & Inclusion",
              "Leadership Development",
              "Community Engagement",
            ].map((item) => (
              <div key={item} className="card p-6">
                <p className="text-gray-700">✔ {item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            This integrated model ensures economic empowerment and social
            change.
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="card p-6 flex items-start gap-4 hover:shadow-accent/30 transition"
                >
                  <Icon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                    <p className="text-gray-700 text-sm">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/marketing/programs"
              className="btn-primary inline-block"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Four Pillars
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to transform lives and build
              community resilience
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  className="card p-8 group hover:shadow-accent/30 hover:border-accent/50 transition-all hover:scale-105"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${pillar.color} mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pillar.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact Scale
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic objectives for 2025–2027 across Northern Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className="card p-8 text-center group hover:shadow-accent/30 hover:border-accent/50"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl rounded-lg bg-gradient-to-br from-primary to-teal">
                  {stat.icon}
                </div>
                <p className="text-5xl font-extrabold text-gradient-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Empowerment",
              "Integrity",
              "Inclusiveness",
              "Innovation",
              "Community",
            ].map((value, idx) => (
              <div
                key={idx}
                className="card p-6 hover:bg-gradient-to-br hover:from-primary/10"
              >
                <p className="text-xl font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Northern Nigeria
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Expertise Hub focuses on five key states, reaching marginalized
                youth with tailored programs:
              </p>
              <div className="space-y-3">
                {["Bauchi", "Kano", "Gombe", "Kaduna", "Plateau"].map(
                  (state, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-gold" />
                      <span className="text-gray-700 font-semibold">
                        {state}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="card p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Target Beneficiaries
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Teenagers (14–19)</li>
                <li>✓ Young Adults (20–30)</li>
                <li>✓ Girls & Young Women</li>
                <li>✓ School Dropouts</li>
                <li>✓ Marginalized & Vulnerable Groups</li>
                <li>✓ Persons with Disabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Our Theory of Change
          </h2>

          <div className="space-y-6">
            <div className="card p-8 border-l-4 border-accent">
              <p className="text-xl text-gray-700 font-semibold">
                If we empower youths with{" "}
                <span className="text-primary font-bold">skills</span>,{" "}
                <span className="text-accent font-bold">awareness</span>, and{" "}
                <span className="text-teal font-bold">mentorship</span>
              </p>
            </div>

            <div className="text-4xl text-primary font-bold">↓</div>

            <div className="card p-8 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent">
              <p className="text-xl text-gray-700 font-semibold">
                Then they will gain{" "}
                <span className="text-accent font-bold">
                  livelihood opportunities
                </span>
                , avoid{" "}
                <span className="text-primary font-bold">
                  harmful practices
                </span>
                , and contribute to{" "}
                <span className="text-teal font-bold">
                  national development
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-teal/10 -z-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-accent/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Ready to Make a{" "}
            <span className="text-gradient-warm">Real Impact</span>?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Expertise Hub and be part of a movement transforming lives and
            building a brighter future for Northern Nigeria's youth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/marketing/get-involved"
              className="btn-accent inline-block text-lg"
            >
              Join the Movement
            </Link>
            <Link
              href="/marketing/about"
              className="btn-primary inline-block text-lg"
            >
              Learn More About Us
            </Link>
          </div>

          <p className="text-sm text-gray-500 pt-8">
            Together, we're building the next generation of informed, skilled,
            and globally competitive youth.
          </p>
        </div>
      </section>
    </main>
  );
}
