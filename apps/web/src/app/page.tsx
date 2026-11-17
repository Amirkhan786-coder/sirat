"use client";

import { useState } from "react";
import {
  Home, Clock3, BookOpen, BookMarked, HandHeart, GraduationCap,
  Compass, MapPin, Calculator, CalendarDays, Moon, Search, Bell,
  Globe2, ChevronDown, RefreshCw, LocateFixed, Sun, Sunrise,
  Sunset, ArrowRight, BookOpenText, Menu, X, Settings, UserRound,
  Sparkles, Landmark, Users, HeartHandshake, ShieldCheck, CircleHelp,
  CalendarCheck, Star, Check, Plus, Minus, Navigation, BookText,
  Gift, LogOut, ChevronRight
} from "lucide-react";

const navigation = [
  { heading: "OVERVIEW", items: [
    { name: "Dashboard", icon: Home, href: "#dashboard" },
    { name: "Prayer Times", icon: Clock3, href: "#prayer-times" },
  ]},
  { heading: "ISLAMIC KNOWLEDGE", items: [
    { name: "Quran", icon: BookOpen, href: "#continue-reading" },
    { name: "Hadith", icon: BookMarked, href: "#hadith" },
    { name: "Daily Duas", icon: HandHeart, href: "#daily-dua" },
    { name: "Islamic Learning", icon: GraduationCap, href: "#learning" },
  ]},
  { heading: "TOOLS", items: [
    { name: "Qibla Finder", icon: Compass, href: "#qibla" },
    { name: "Masjid Finder", icon: MapPin, href: "#masjid" },
    { name: "Zakat Calculator", icon: Calculator, href: "#zakat" },
    { name: "Hijri Calendar", icon: CalendarDays, href: "#calendar" },
    { name: "Ramadan", icon: Moon, href: "#ramadan" },
  ]},
  { heading: "COMMUNITY", items: [
    { name: "Halal Discovery", icon: ShieldCheck, href: "#halal" },
    { name: "Hajj & Umrah", icon: Landmark, href: "#hajj" },
    { name: "Community", icon: Users, href: "#community" },
    { name: "Donations", icon: HeartHandshake, href: "#donations" },
  ]},
  { heading: "ACCOUNT", items: [
    { name: "My Profile", icon: UserRound, href: "#profile" },
    { name: "Settings", icon: Settings, href: "#settings" },
    { name: "Help & Support", icon: CircleHelp, href: "#support" },
  ]},
];

const prayers = [
  { name: "Fajr", icon: Sunrise },
  { name: "Sunrise", icon: Sun },
  { name: "Dhuhr", icon: Sun },
  { name: "Asr", icon: Sun },
  { name: "Maghrib", icon: Sunset },
  { name: "Isha", icon: Moon },
];

const quickLinks = [
  { name: "Quran", sub: "Read & Learn", icon: BookOpen, href: "#continue-reading" },
  { name: "Hadith", sub: "Wisdom for Life", icon: BookMarked, href: "#hadith" },
  { name: "Duas", sub: "Ask & Receive", icon: HandHeart, href: "#daily-dua" },
  { name: "Qibla", sub: "Find Direction", icon: Compass, href: "#qibla" },
  { name: "Masjid", sub: "Find Nearby", icon: Landmark, href: "#masjid" },
  { name: "Zakat", sub: "Calculate Easily", icon: Calculator, href: "#zakat" },
];

const dailyPrayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

export default function HomePage() {
  const [location, setLocation] = useState("Location not connected");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(2);
  const [completedPrayers, setCompletedPrayers] = useState<string[]>([]);
  const [pagesRead, setPagesRead] = useState(1);
  const [joinedEvent, setJoinedEvent] = useState(false);

  function getLocation() {
    if (!navigator.geolocation) {
      setLocation("Geolocation is not supported");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation(`${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`);
        setLoading(false);
      },
      () => {
        setLocation("Location permission not granted");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  }

  function togglePrayer(name: string) {
    setCompletedPrayers((current) =>
      current.includes(name)
        ? current.filter((prayer) => prayer !== name)
        : [...current, name]
    );
  }

  const worshipPercent = Math.round((completedPrayers.length / 5) * 100);
  const readingPercent = Math.round((pagesRead / 30) * 100);

  return (
    <main className="sirat-shell">
      <aside className={`sirat-sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-emblem">
            <svg className="sirat-logo-svg" viewBox="0 0 180 150" role="img" aria-label="Sirat crescent and mosque logo">
              <defs>
                <linearGradient id="siratGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff0a8" />
                  <stop offset="42%" stopColor="#eac45c" />
                  <stop offset="100%" stopColor="#b98728" />
                </linearGradient>
                <linearGradient id="siratMosqueGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffe99a" />
                  <stop offset="100%" stopColor="#d4a63e" />
                </linearGradient>
              </defs>

              {/* Elegant slim crescent */}
              <path
                d="M76 8 C35 10 9 42 13 79 C17 119 53 143 88 132 C57 137 29 111 27 77 C25 43 45 17 76 8Z"
                fill="url(#siratGold)"
              />
              <path
                d="M69 14 C40 22 23 49 27 79"
                fill="none"
                stroke="#fff1b7"
                strokeWidth="1.2"
                opacity=".8"
              />

              {/* Stars */}
              <path d="M112 12 L115 21 L124 24 L115 27 L112 36 L109 27 L100 24 L109 21Z" fill="url(#siratGold)" />
              <circle cx="91" cy="35" r="2" fill="#f5d77d" />
              <circle cx="135" cy="43" r="1.8" fill="#f5d77d" />

              {/* Mosque silhouette inside crescent */}
              <g fill="url(#siratMosqueGold)" stroke="#f5d77d" strokeWidth=".7">
                {/* Left minaret */}
                <path d="M55 92 L55 54 L59 47 L63 54 L63 92Z" />
                <path d="M53 55 L59 43 L65 55Z" />
                <path d="M56 66 H62 M56 78 H62" fill="none" stroke="#805d20" strokeWidth="1" />

                {/* Right minaret */}
                <path d="M137 92 L137 49 L141 41 L145 49 L145 92Z" />
                <path d="M135 50 L141 37 L147 50Z" />
                <path d="M138 62 H144 M138 76 H144" fill="none" stroke="#805d20" strokeWidth="1" />

                {/* Small side dome */}
                <path d="M65 91 Q75 66 85 91Z" />
                <path d="M74 69 L74 63 M74 63 L71 59 M74 63 L77 59" fill="none" stroke="#eac45c" strokeWidth="1.4" />

                {/* Main dome */}
                <path d="M81 91 Q102 39 123 91Z" />
                <path d="M102 43 L102 34 M102 34 L98 29 M102 34 L106 29" fill="none" stroke="#eac45c" strokeWidth="1.6" />

                {/* Main prayer hall */}
                <path d="M66 91 H133 V112 H66Z" />
                <path d="M61 91 H138 L133 85 H66Z" />

                {/* Door and windows */}
                <path d="M94 112 V96 Q102 85 110 96 V112Z" fill="#174d36" stroke="#e9c45d" />
                <path d="M74 101 V94 Q79 87 84 94 V101Z M117 101 V94 Q122 87 127 94 V101Z" fill="#174d36" stroke="#e9c45d" />
                <path d="M59 113 H147" fill="none" stroke="#ffe69a" strokeWidth="2" />
                <path d="M51 117 H153" fill="none" stroke="#d8ad4e" strokeWidth="1.5" />
              </g>

              {/* Fine ornamental baseline */}
              <path d="M42 124 Q90 132 157 124" fill="none" stroke="#e7c15a" strokeWidth="1.2" opacity=".9" />
            </svg>
          </div>          <div className="brand-name">SIRAT</div>
          <div className="brand-tagline">Your Islamic Life, Connected</div>
          <div className="brand-divider"><span>✧</span></div>
        </div>

        <nav className="side-navigation">
          {navigation.map((group) => (
            <div className="nav-group" key={group.heading}>
              <div className="nav-heading">{group.heading}</div>
              {group.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`nav-link ${group.heading === "OVERVIEW" && index === 0 ? "nav-active" : ""}`}
                  >
                    <Icon size={20} strokeWidth={2.4} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">A JOURNEY OF FAITH</div>
      </aside>

      {menuOpen && <button className="mobile-overlay" onClick={() => setMenuOpen(false)} aria-label="Close menu" />}

      <div className="sirat-main">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className="greeting-seal">۞</div>
          <div className="greeting">
            <h2>Assalamu Alaikum!</h2>
            <p>May Allah accept our deeds and make us better.</p>
          </div>
          <div className="top-actions">
            <button className="top-location" onClick={getLocation} disabled={loading}>
              <MapPin size={17} />
              <span>{loading ? "Locating..." : location === "Location not connected" ? "Set Location" : location}</span>
              <RefreshCw size={15} />
            </button>
            <div className="top-date"><CalendarDays size={19} /><span>Local date<br/><small>Hijri date after calendar integration</small></span></div>
            <div className="language-wrap">
              <Globe2 size={18} />
              <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Select language">
                <option>English</option><option>Arabic</option><option>Urdu</option><option>Hindi</option>
              </select>
              <ChevronDown size={15} />
            </div>
            <button className="top-icon" aria-label="Search"><Search /></button>
            <button className="top-icon notification-button" aria-label="Notifications" onClick={() => setNotifications(0)}>
              <Bell />
              {notifications > 0 && <span className="notification-count">{notifications}</span>}
            </button>
            <button className="profile-button" aria-label="Profile">A</button>
          </div>
        </header>

        <div className="dashboard-content" id="dashboard">
          <div className="welcome-row">
            <div>
              <h1>Welcome to Sirat</h1>
              <p>Your Islamic life, connected.</p>
            </div>
            <div className="date-preview"><CalendarDays size={16} /> Your local date will appear here</div>
          </div>

          <section className="location-panel">
            <div className="location-left">
              <div className="location-pin"><MapPin size={27} fill="currentColor" /></div>
              <div>
                <h3>Current Location</h3>
                <strong>{location}</strong>
                <p>{location.includes("not connected") || location.includes("not granted") ? "Preview mode · GPS integration ready for API" : "GPS location detected · Prayer API pending"}</p>
              </div>
            </div>
            <div className="location-actions">
              <button className="outline-button" onClick={getLocation} disabled={loading}>
                <LocateFixed size={16} /> {loading ? "Locating..." : "Change Location"}
              </button>
              <button className="refresh-button" onClick={getLocation} aria-label="Refresh location" disabled={loading}><RefreshCw size={19} /></button>
            </div>
          </section>

          <section className="prayer-panel" id="prayer-times">
            <div className="prayer-moon">☾</div>
            <div className="prayer-mosque-silhouette" />
            <div className="prayer-panel-top">
              <div>
                <span className="section-pill">DAILY PRAYER SCHEDULE</span>
                <h2>Prayer Times</h2>
              </div>
              <div className="local-date"><CalendarDays size={16} /> Local date · Awaiting data</div>
            </div>
            <div className="prayer-layout">
              <div className="next-prayer-card">
                <span>NEXT PRAYER</span>
                <strong>—</strong>
                <div className="next-time"><Clock3 size={24} /> --:--:--</div>
                <p>Countdown will appear when prayer data is connected</p>
              </div>
              <div className="prayer-list">
                {prayers.map((prayer) => {
                  const Icon = prayer.icon;
                  return (
                    <div className="prayer-item" key={prayer.name}>
                      <Icon size={29} strokeWidth={2.3} />
                      <h3>{prayer.name}</h3>
                      <strong>--:--</strong>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="prayer-note">Verified local prayer timings will appear after location and prayer-time integration.</p>
          </section>

          <section className="quick-section">
            <div className="section-heading"><h2>Quick Access</h2><a href="#all-features">View all <ArrowRight size={16} /></a></div>
            <div className="quick-grid">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a href={item.href} className="quick-card" key={item.name}>
                    <Icon size={27} strokeWidth={2.7} />
                    <strong>{item.name}</strong><span>{item.sub}</span>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="feature-banners" id="all-features">
            <a href="#ayah" className="feature-banner banner-green">
              <BookOpenText size={34} strokeWidth={1.8} />
              <div><h3>Ayah of the Day</h3><p>Read the divine message</p></div>
              <span className="banner-arrow"><ArrowRight size={21} /></span>
            </a>
            <a href="#daily-dua" className="feature-banner banner-gold">
              <HandHeart size={43} />
              <div><h3>Daily Dua</h3><p>Strengthen your faith</p></div>
              <span className="banner-arrow"><ArrowRight size={21} /></span>
            </a>
            <a href="#continue-reading" className="feature-banner banner-green">
              <BookOpen size={43} />
              <div><h3>Continue Reading</h3><p>Your Quran journey</p></div>
              <span className="banner-arrow"><ArrowRight size={21} /></span>
            </a>
          </section>

          <section className="content-grid-three">
            <article className="info-card" id="masjid">
              <div className="info-card-heading"><span><MapPin size={20}/> Nearby Masjid</span><a href="#masjid">View All <ArrowRight size={15}/></a></div>
              <div className="masjid-content">
                <div className="masjid-placeholder"><Landmark size={44}/><span>MASJID</span></div>
                <div className="masjid-details">
                  <h3>Find your nearest Masjid</h3>
                  <p>Distance and open status require your location.</p>
                  <button className="small-green-button" onClick={getLocation}><Navigation size={14}/> Get Directions</button>
                </div>
              </div>
              <p className="card-footnote">Live nearby mosque data will be connected to the Masjid Finder.</p>
            </article>

            <article className="info-card" id="calendar">
              <div className="info-card-heading"><span><CalendarDays size={20}/> Islamic Calendar</span><a href="#calendar">View Calendar <ArrowRight size={15}/></a></div>
              <div className="calendar-content">
                <div className="hijri-date-placeholder"><CalendarDays size={30}/><strong>Hijri</strong><span>Date pending</span></div>
                <div><h3>Islamic Date</h3><p>Hijri date will be calculated using the selected calendar method.</p><p className="event-label">Next Event: <strong>Awaiting calendar data</strong></p></div>
              </div>
            </article>

            <article className="info-card" id="community">
              <div className="info-card-heading"><span><Users size={20}/> Community</span><a href="#community">View All <ArrowRight size={15}/></a></div>
              <div className="community-content">
                <div className="community-art"><Users size={42}/><HeartHandshake size={24}/></div>
                <div><h3>Islamic Community</h3><p>Discover learning circles and local events.</p><button className="small-green-button" onClick={() => setJoinedEvent(!joinedEvent)}>{joinedEvent ? <Check size={14}/> : <Users size={14}/>} {joinedEvent ? "Interest Saved" : "Explore Events"}</button></div>
              </div>
              <p className="card-footnote">Event listings will appear when the community service is connected.</p>
            </article>
          </section>

          <section className="content-grid-three second-content-row">
            <article className="detail-card" id="ayah">
              <div className="detail-card-title"><BookOpenText size={21}/> Ayah of the Day</div>
              <div className="arabic-text" dir="rtl">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
              <p className="translation">“Indeed, with hardship comes ease.”</p>
              <p className="reference">— Surah Ash-Sharh (94:6)</p>
              <a href="#quran" className="text-action">Read Full Tafsir <ArrowRight size={15}/></a>
            </article>

            <article className="detail-card" id="daily-dua">
              <div className="detail-card-title"><HandHeart size={21}/> Daily Dua</div>
              <div className="arabic-text" dir="rtl">رَبِّ زِدْنِي عِلْمًا</div>
              <p className="translation">“My Lord, increase me in knowledge.”</p>
              <p className="reference">— Surah Taha (20:114)</p>
              <a href="#duas" className="text-action">Learn More <ArrowRight size={15}/></a>
            </article>

            <article className="detail-card reading-card" id="continue-reading">
              <div className="detail-card-title"><BookOpen size={21}/> Continue Reading</div>
              <div className="reading-content">
                <div className="quran-cover"><BookOpenText size={34} strokeWidth={1.8} /><span>AL QURAN</span></div>
                <div className="reading-info">
                  <h3>Continue your Quran journey</h3>
                  <p>Track your reading progress</p>
                  <div className="progress-track"><span style={{width: `${readingPercent}%`}}/></div>
                  <small>{pagesRead} / 30 pages · {readingPercent}%</small>
                  <div className="reading-controls">
                    <button onClick={() => setPagesRead(Math.max(0, pagesRead - 1))} aria-label="Decrease pages"><Minus size={14}/></button>
                    <button onClick={() => setPagesRead(Math.min(30, pagesRead + 1))} aria-label="Increase pages"><Plus size={14}/></button>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="progress-strip">
            <div className="worship-progress">
              <div className="progress-ring" style={{"--progress": `${worshipPercent}%`} as React.CSSProperties}>
                <span>{worshipPercent}%</span>
              </div>
              <div className="worship-info">
                <h3>Your Daily Worship Progress</h3>
                <p>{completedPrayers.length} of 5 Daily Prayers Completed</p>
                <div className="prayer-checklist">
                  {dailyPrayers.map((prayer) => (
                    <button key={prayer} className={completedPrayers.includes(prayer) ? "prayer-check checked" : "prayer-check"} onClick={() => togglePrayer(prayer)}>
                      {completedPrayers.includes(prayer) ? <Check size={12}/> : <Plus size={12}/>} {prayer}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="reading-progress-mini">
              <Star size={29} className="gold-star"/>
              <div><h3>Quran Reading</h3><p>{pagesRead} / 30 Pages</p><div className="mini-track"><span style={{width: `${readingPercent}%`}}/></div></div>
            </div>
            <div className="donation-mini" id="donations">
              <HandHeart size={32}/>
              <div><h3>Make a Difference</h3><p>Support a better Ummah</p></div>
              <a href="#donations" className="donate-button">Donate Now <ArrowRight size={14}/></a>
            </div>
          </section>

          <section className="extra-features" id="more-features">
            <div className="section-heading"><h2>More from Sirat</h2><span>YOUR FAITH, YOUR JOURNEY</span></div>
            <div className="extra-grid">
              <a href="#qibla" className="extra-card" id="qibla"><Compass/><strong>Qibla Finder</strong><span>Find the direction of Qibla</span></a>
              <a href="#zakat" className="extra-card" id="zakat"><Calculator/><strong>Zakat Calculator</strong><span>Plan your annual Zakat</span></a>
              <a href="#hadith" className="extra-card" id="hadith"><BookMarked/><strong>Hadith Library</strong><span>Explore authentic narrations</span></a>
              <a href="#learning" className="extra-card" id="learning"><GraduationCap/><strong>Islamic Learning</strong><span>Courses and learning paths</span></a>
              <a href="#halal" className="extra-card" id="halal"><ShieldCheck/><strong>Halal Discovery</strong><span>Explore halal services</span></a>
              <a href="#hajj" className="extra-card" id="hajj"><Landmark/><strong>Hajj & Umrah</strong><span>Guides and preparation</span></a>
              <a href="#ramadan" className="extra-card" id="ramadan"><Moon/><strong>Ramadan</strong><span>Fasting and Ramadan tools</span></a>
              <a href="#support" className="extra-card" id="support"><CircleHelp/><strong>Help & Support</strong><span>Get help with Sirat</span></a>
            </div>
          </section>

          <footer className="dashboard-footer">© 2026 SIRAT · YOUR ISLAMIC LIFE, CONNECTED</footer>
        </div>

        <nav className="mobile-bottom-nav">
          <a href="#dashboard"><Home/><span>Home</span></a>
          <a href="#prayer-times"><Clock3/><span>Prayer</span></a>
          <a href="#continue-reading"><BookOpen/><span>Quran</span></a>
          <a href="#community"><Users/><span>Community</span></a>
          <a href="#more-features"><Menu/><span>More</span></a>
        </nav>
      </div>
    </main>
  );
}


