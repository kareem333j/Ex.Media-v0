"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin, Target, Share2, Palette, Camera, Users } from "lucide-react"
import Image from "next/image"


export default function ExMediaLanding() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const socialRef = useRef<HTMLElement>(null)
  const locationRef = useRef<HTMLElement>(null)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const sections = [aboutRef.current, servicesRef.current, socialRef.current, locationRef.current]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const content = {
    en: {
      nav: { logo: "EX.MEDIA", lang: "العربية" },
      hero: {
        title: "EX.MEDIA",
        subtitle: "Creative Impact, Real Reach",
        description: "Helping your brand shine and connect with the right audience everywhere",
        cta: "Explore Our Work",
      },
      about: {
        title: "About Us",
        description:
          "We are EX.MEDIA, a comprehensive marketing solutions company that helps brands and content creators reach the largest possible audience in the best way. With our network of the biggest social media pages, we give you the opportunity to showcase your ads or content to a massive and diverse audience for real growth and engagement.",
        features: ["Campaign Management", "Content Distribution", "Professional Design", "Creator Support"],
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive solutions to elevate your brand",
        items: [
          {
            icon: Target,
            title: "Campaign Management",
            description: "Strategic advertising campaigns designed to maximize your return on investment",
            gradient: "from-blue-500 to-cyan-500",
          },
          {
            icon: Share2,
            title: "Content Distribution",
            description: "Reach massive audiences through our powerful and influential social media pages",
            gradient: "from-purple-500 to-pink-500",
          },
          {
            icon: Palette,
            title: "Professional Design",
            description: "Creative graphic design team delivering attractive visual content that makes you stand out",
            gradient: "from-orange-500 to-red-500",
          },
          {
            icon: Camera,
            title: "Photography Studio",
            description: "Fully equipped studio space for high-quality video production and content creation",
            gradient: "from-green-500 to-teal-500",
          },
          {
            icon: Users,
            title: "Creator Support",
            description:
              "Complete support for new content creators with promotion and advertising until your work reaches the right audience",
            gradient: "from-yellow-500 to-orange-500",
          },
        ],
      },
      social: {
        title: "Pages You Can Advertise On",
        subtitle:
          "We own the largest pages in the Middle East that guarantee your content reaches millions of followers and achieves exceptional reach",
        platforms: [
          {
            name: "Ex.",
            profileImage: "/images/ex-page.jpg",
            url: "https://www.facebook.com/Ex.fans?mibextid=LQQJ4d",
          },
          {
            name: "Outside",
            profileImage: "/images/outside-page.jpg",
            url: "https://www.facebook.com/outside.Officiall?mibextid=LQQJ4d",
          },
          {
            name: "Red Flags",
            profileImage: "/images/red-flags-page.jpg",
            url: "https://www.facebook.com/people/Red-Flags/100092268167066/?mibextid=LQQJ4d",
          },
          {
            name: "𝘉𝘶𝘵𝘵𝘦𝘳𝘧𝘭𝘺",
            profileImage: "/images/butterfly-page.jpg",
            url: "https://www.facebook.com/0Butterfly00?mibextid=LQQJ4d",
          },
          {
            name: "X Memes",
            profileImage: "/images/x-memes-page.jpg",
            url: "https://www.facebook.com/Xmemes.officiall?mibextid=LQQJ4d",
          },
          {
            name: "Repost",
            profileImage: "/images/repost-page.jpg",
            url: "https://www.facebook.com/people/Repost/61551477668176/?mibextid=wwXIfr&rdid=Nt86BozfYRy1ddHq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12EeuN7r9zV%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "Toxic",
            profileImage: "/images/toxic-page.jpg",
            url: "https://www.facebook.com/0Toxic0?mibextid=LQQJ4d",
          },
          {
            name: "C r e a t i v e",
            profileImage: "/images/creative1-page.jpg",
            url: "https://www.facebook.com/creativeMems01?mibextid=LQQJ4d",
          },
          {
            name: "IQ",
            profileImage: "/images/iq-page.jpg",
            url: "https://www.facebook.com/IQMEMES0",
          },
          {
            name: "Creative",
            profileImage: "/images/creative2-page.jpg",
            url: "https://www.facebook.com/CREATIVEMEMES02?mibextid=LQQJ4d",
          },
          {
            name: "Nostalgia",
            profileImage: "/images/nostalgia-page.jpg",
            url: "https://www.facebook.com/0NOSTALGIA?mibextid=LQQJ4d",
          },
          {
            name: "Ok",
            profileImage: "/images/ok-page.jpg",
            url: "https://www.facebook.com/people/Ok/100052543372352/?mibextid=LQQJ4d",
          },
          {
            name: "Trust issues",
            profileImage: "/images/trust-issues-page.jpg",
            url: "https://www.facebook.com/Trust.issues0?mibextid=LQQJ4d",
          },
          {
            name: "El-kholasa - الخلاصه",
            profileImage: "/images/el-kholasa-page.jpg",
            url: "https://www.facebook.com/Elkholasa?mibextid=wwXIfr&rdid=Qg9DMduq6hVdxrti&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BQqxiQ4hV%2F%3Fmibextid%3DwwXIfr#",
          },
          {
            name: "Skip",
            profileImage: "/images/skip-page.jpg",
            url: "https://www.facebook.com/SKIB11?mibextid=wwXIfr&rdid=MAlK3DRERQMxz0nz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16uNqeVtT6%2F%3Fmibextid%3DwwXIfr#",
          },
          {
            name: "𝘙𝘪𝘣𝘣𝘰𝘯",
            profileImage: "/images/ribbon-page.jpg",
            url: "https://www.facebook.com/people/%F0%9D%98%99%F0%9D%98%AA%F0%9D%98%A3%F0%9D%98%A3%F0%9D%98%B0%F0%9D%98%AF/61559081243353/?mibextid=wwXIfr&rdid=08Qr3VI4fhvku0OO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RVKELhAjh%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "𝑅𝑒",
            profileImage: "/images/re-page.jpg",
            url: "https://www.facebook.com/ReRe.commm?mibextid=wwXIfr&rdid=lea1mCcnrNjKQYgm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16ueZqtptn%2F%3Fmibextid%3DwwXIfr#",
          },
          {
            name: "Your destiny",
            profileImage: "/images/your-destiny-page.jpg",
            url: "https://www.facebook.com/people/Your-destiny/100083630015002/?mibextid=wwXIfr&rdid=G8fgoDKuCAg3mASP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JT1ff7KrJ%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "Green Flags",
            profileImage: "/images/green-flags-page.jpg",
            url: "https://www.facebook.com/people/Green-Flags/100093382687636/?mibextid=wwXIfr&rdid=1cW405tVr8fyTWzS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16r2TDk7gF%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "𝖮𝖻𝗌𝖾𝗌𝗌𝖾𝖽",
            profileImage: "/images/obsessed-page.jpg",
            url: "https://www.facebook.com/Obsessedz0?mibextid=LQQJ4d",
          },
          {
            name: "Vatrina",
            profileImage: "/images/vatrina-page.jpg",
            url: "https://www.facebook.com/Vatrina.plus?mibextid=LQQJ4d",
          },
          {
            name: "True Memes",
            profileImage: "/images/true-memes-page.jpg",
            url: "https://www.facebook.com/TrueMemes0?mibextid=LQQJ4d",
          },
          {
            name: "Puzzle",
            profileImage: "/images/puzzle-page.jpg",
            url: "https://www.facebook.com/Puzzle2020?mibextid=LQQJ4d",
          },
          {
            name: "𝗉𝗈𝗂𝗇𝗍",
            profileImage: "/images/point-page.jpg",
            url: "https://www.facebook.com/share/1Eey42YZiL/?mibextid=wwXIfr",
          },
          {
            name: "Us.",
            profileImage: "/images/us-page.jpg",
            url: "https://www.facebook.com/share/1J5bW3tXgD/?mibextid=wwXIfr",
          },
          {
            name: "𝘜𝘴",
            profileImage: "/images/us2-page.jpg",
            url: "https://www.facebook.com/share/19RvwuRjJS/?mibextid=wwXIfr",
          },
        ],
      },
      location: {
        title: "Our Location",
        address: "Al Andalus, the 5th Settlement",
      },
    },
    ar: {
      nav: { logo: "اكس ميديا", lang: "English" },
      hero: {
        title: "اكس ميديا",
        subtitle: "إبداع مؤثر.. وصول حقيقي",
        description: "بنساعدك توصل لجمهور أوسع وتحقق نجاح ملموس من خلال حلول تسويقية متكاملة",
        cta: "استكشف أعمالنا",
      },
      about: {
        title: "عنّا",
        description:
          "شركة اكس ميديا بنقدّم حلول تسويقية متكاملة تساعد البراند أو صانع المحتوى يوصل لأكبر عدد من الناس بأفضل صورة. معانا أكبر الصفحات على السوشيال ميديا، وده بيدّينا فرصة نعرض إعلاناتك أو محتواك قدام جمهور ضخم ومتنوع علشان تكسب انتشار حقيقي.",
        features: ["إدارة الحملات", "توزيع المحتوى", "التصميم المهني", "دعم المبدعين"],
      },
      services: {
        title: "خدماتنا",
        subtitle: "حلول شاملة لرفع مستوى علامتك التجارية",
        items: [
          {
            icon: Target,
            title: "إدارة الحملات",
            description: "حملات إعلانية استراتيجية مصممة لتحقيق أقصى عائد على الاستثمار",
            gradient: "from-blue-500 to-cyan-500",
          },
          {
            icon: Share2,
            title: "توزيع المحتوى",
            description: "الوصول إلى جماهير ضخمة من خلال صفحاتنا القوية والمؤثرة على وسائل التواصل الاجتماعي",
            gradient: "from-purple-500 to-pink-500",
          },
          {
            icon: Palette,
            title: "التصميم المهني",
            description: "فريق تصميم جرافيكي إبداعي يقدم محتوى بصري جذاب يجعلك تتميز",
            gradient: "from-orange-500 to-red-500",
          },
          {
            icon: Camera,
            title: "استوديو التصوير",
            description: "مساحة استوديو مجهزة بالكامل لإنتاج الفيديو عالي الجودة وإنشاء المحتوى",
            gradient: "from-green-500 to-teal-500",
          },
          {
            icon: Users,
            title: "دعم المبدعين",
            description: "دعم كامل لمنشئي المحتوى الجدد مع الترويج والإعلان حتى يصل عملك إلى الجمهور المناسب",
            gradient: "from-yellow-500 to-orange-500",
          },
        ],
      },
      social: {
        title: "صفحاتنا التي يمكنك الإعلان بها",
        subtitle: "نمتلك أضخم الصفحات في الشرق الأوسط التي تضمن وصول محتواك لملايين المتابعين وتحقق انتشاراً استثنائياً",
        platforms: [
          {
            name: "Ex.",
            profileImage: "/images/ex-page.jpg",
            url: "https://www.facebook.com/Ex.fans?mibextid=LQQJ4d",
          },
          {
            name: "Outside",
            profileImage: "/images/outside-page.jpg",
            url: "https://www.facebook.com/outside.Officiall?mibextid=LQQJ4d",
          },
          {
            name: "Red Flags",
            profileImage: "/images/red-flags-page.jpg",
            url: "https://www.facebook.com/people/Red-Flags/100092268167066/?mibextid=LQQJ4d",
          },
          {
            name: "𝘉𝘶𝘵𝘵𝘦𝘳𝘧𝘭𝘺",
            profileImage: "/images/butterfly-page.jpg",
            url: "https://www.facebook.com/0Butterfly00?mibextid=LQQJ4d",
          },
          {
            name: "X Memes",
            profileImage: "/images/x-memes-page.jpg",
            url: "https://www.facebook.com/Xmemes.officiall?mibextid=LQQJ4d",
          },
          {
            name: "Repost",
            profileImage: "/images/repost-page.jpg",
            url: "https://www.facebook.com/people/Repost/61551477668176/?mibextid=wwXIfr&rdid=Nt86BozfYRy1ddHq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12EeuN7r9zV%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "Toxic",
            profileImage: "/images/toxic-page.jpg",
            url: "https://www.facebook.com/0Toxic0?mibextid=LQQJ4d",
          },
          {
            name: "C r e a t i v e",
            profileImage: "/images/creative1-page.jpg",
            url: "https://www.facebook.com/creativeMems01?mibextid=LQQJ4d",
          },
          {
            name: "IQ",
            profileImage: "/images/iq-page.jpg",
            url: "https://www.facebook.com/IQMEMES0",
          },
          {
            name: "Creative",
            profileImage: "/images/creative2-page.jpg",
            url: "https://www.facebook.com/CREATIVEMEMES02?mibextid=LQQJ4d",
          },
          {
            name: "Nostalgia",
            profileImage: "/images/nostalgia-page.jpg",
            url: "https://www.facebook.com/0NOSTALGIA?mibextid=LQQJ4d",
          },
          {
            name: "Ok",
            profileImage: "/images/ok-page.jpg",
            url: "https://www.facebook.com/people/Ok/100052543372352/?mibextid=LQQJ4d",
          },
          {
            name: "Trust issues",
            profileImage: "/images/trust-issues-page.jpg",
            url: "https://www.facebook.com/Trust.issues0?mibextid=LQQJ4d",
          },
          {
            name: "الخلاصه - El-kholasa",
            profileImage: "/images/el-kholasa-page.jpg",
            url: "https://www.facebook.com/Elkholasa?mibextid=wwXIfr&rdid=Qg9DMduq6hVdxrti&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BQqxiQ4hV%2F%3Fmibextid%3DwwXIfr#",
          },
          {
            name: "Skip",
            profileImage: "/images/skip-page.jpg",
            url: "https://www.facebook.com/SKIB11?mibextid=wwXIfr&rdid=MAlK3DRERQMxz0nz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16uNqeVtT6%2F%3Fmibextid%3DwwXIfr#",
          },
          {
            name: "𝘙𝘪𝘣𝘣𝘰𝘯",
            profileImage: "/images/ribbon-page.jpg",
            url: "https://www.facebook.com/people/%F0%9D%98%99%F0%9D%98%AA%F0%9D%98%A3%F0%9D%98%A3%F0%9D%98%B0%F0%9D%98%AF/61559081243353/?mibextid=wwXIfr&rdid=08Qr3VI4fhvku0OO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RVKELhAjh%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "𝑅𝑒",
            profileImage: "/images/re-page.jpg",
            url: "https://www.facebook.com/ReRe.commm?mibextid=wwXIfr&rdid=lea1mCcnrNjKQYgm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16ueZqtptn%2F%3Fmibextid%3DwwXIfr#",
          },
          {
            name: "Your destiny",
            profileImage: "/images/your-destiny-page.jpg",
            url: "https://www.facebook.com/people/Your-destiny/100083630015002/?mibextid=wwXIfr&rdid=G8fgoDKuCAg3mASP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JT1ff7KrJ%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "Green Flags",
            profileImage: "/images/green-flags-page.jpg",
            url: "https://www.facebook.com/people/Green-Flags/100093382687636/?mibextid=wwXIfr&rdid=1cW405tVr8fyTWzS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16r2TDk7gF%2F%3Fmibextid%3DwwXIfr",
          },
          {
            name: "𝖮𝖻𝗌𝖾𝗌𝗌𝖾𝖽",
            profileImage: "/images/obsessed-page.jpg",
            url: "https://www.facebook.com/Obsessedz0?mibextid=LQQJ4d",
          },
          {
            name: "Vatrina",
            profileImage: "/images/vatrina-page.jpg",
            url: "https://www.facebook.com/Vatrina.plus?mibextid=LQQJ4d",
          },
          {
            name: "True Memes",
            profileImage: "/images/true-memes-page.jpg",
            url: "https://www.facebook.com/TrueMemes0?mibextid=LQQJ4d",
          },
          {
            name: "Puzzle",
            profileImage: "/images/puzzle-page.jpg",
            url: "https://www.facebook.com/Puzzle2020?mibextid=LQQJ4d",
          },
          {
            name: "𝗉𝗈𝗂𝗇𝗍",
            profileImage: "/images/point-page.jpg",
            url: "https://www.facebook.com/share/1Eey42YZiL/?mibextid=wwXIfr",
          },
          {
            name: "Us.",
            profileImage: "/images/us-page.jpg",
            url: "https://www.facebook.com/share/1J5bW3tXgD/?mibextid=wwXIfr",
          },
          {
            name: "𝘜𝘴",
            profileImage: "/images/us2-page.jpg",
            url: "https://www.facebook.com/share/19RvwuRjJS/?mibextid=wwXIfr",
          },
        ],
      },
      location: {
        title: "موقعنا",
        address: "الأندلس، التجمع الخامس",
      },
    },
  }

  const currentContent = content[language]

  const heroExitProgress = Math.min(scrollY / 400, 1)
  const heroSinkTransform = `translateY(${heroExitProgress * 100}px) scale(${1 - heroExitProgress * 0.3})`
  const heroOpacity = 1 - heroExitProgress * 0.8

  return (
    <div className={`min-h-screen bg-background text-foreground ${language === "ar" ? "rtl font-arabic" : "ltr"}`}>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? "bg-background/90 backdrop-blur-xl shadow-2xl border-b border-primary/20" : "bg-transparent"
          }`}
      >
        <div
          className={`container px-6 py-4 flex items-center ${language === "ar" ? "justify-between flex-row-reverse" : "justify-between"}`}
        >
          <h1
            className={`text-2xl font-bold tracking-wider hover:scale-105 transition-transform duration-300 ${language === "ar" ? "font-arabic" : ""}`}
          >
            {language === "ar" ? (
              <span className="text-primary">اكس.ميديا</span>
            ) : (
              <span className="text-primary">{currentContent.nav.logo}</span>
            )}
          </h1>
          <Button
            variant="outline"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className={`border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 ${language === "ar" ? "font-arabic" : ""}`}
          >
            <Globe className="w-4 h-4 mr-2" />
            {currentContent.nav.lang}
          </Button>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "15%",
              left: "10%",
              transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
            }}
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.645-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>

          {/* Facebook Icon - keeping correct */}
          <div
            className="absolute w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "25%",
              right: "10%",
              transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.1}deg)`,
              animationDelay: "1s",
            }}
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.812 24 18.062 24 12.073z" />
            </svg>
          </div>

          <div
            className="absolute w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "60%",
              left: "5%",
              transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.15}deg)`,
              animationDelay: "2s",
            }}
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>

          <div
            className="absolute w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "70%",
              right: "8%",
              transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.12}deg)`,
              animationDelay: "3s",
            }}
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>

          <div
            className="absolute w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "40%",
              right: "3%",
              transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * 0.08}deg)`,
              animationDelay: "4s",
            }}
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>

          <div
            className="absolute w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "35%",
              left: "15%",
              transform: `translateY(${scrollY * -0.22}px) rotate(${scrollY * 0.18}deg)`,
              animationDelay: "5s",
            }}
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </div>

          <div
            className="absolute w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl hidden md:flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "80%",
              left: "75%",
              transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * -0.2}deg)`,
              animationDelay: "6s",
            }}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
            </svg>
          </div>

          <div
            className="absolute w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl hidden md:flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "50%",
              right: "5%",
              transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.05}deg)`,
              animationDelay: "7s",
            }}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
          </div>

          {/* Pinterest Icon - keeping correct */}
          <div
            className="absolute w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl hidden md:flex items-center justify-center shadow-lg animate-float"
            style={{
              top: "20%",
              left: "70%",
              transform: `translateY(${scrollY * -0.18}px) rotate(${scrollY * -0.08}deg)`,
              animationDelay: "8s",
            }}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
            </svg>
          </div>
        </div>

        <div
          className="relative z-10 text-center space-y-8 px-6"
          style={{
            transform: heroSinkTransform,
            opacity: heroOpacity,
          }}
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight hover:scale-105 transition-transform duration-500 animate-fade-in">
              {language === "ar" ? (
                <span className={`font-arabic ${language === "ar" ? "font-arabic" : ""}`}>
                  <span className="relative inline-block">
                    <span className="text-yellow-400 font-extrabold tracking-wider drop-shadow-2xl">اكس</span>
                    <span className="text-yellow-400 mx-2 text-6xl md:text-8xl lg:text-9xl">.</span>
                    <span className="text-white font-extrabold tracking-wider drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      ميديا
                    </span>
                    {/* Modern glow effect */}
                    <div className="absolute inset-0 text-yellow-400 font-extrabold tracking-wider blur-sm opacity-30 animate-pulse">
                      اكس.ميديا
                    </div>
                  </span>
                </span>
              ) : (
                <>
                  <span className="text-yellow-400">EX</span>
                  <span className="text-white">.</span>
                  <span className="text-white">MED</span>
                  <span className="relative text-white">
                    <span className="text-white">I</span>
                    <span
                      className={`absolute left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-yellow-400 rounded-full `}
                    ></span>
                  </span>
                  <span className="text-white">A</span>
                </>
              )}
            </h1>
            <h2
              className={`text-xl md:text-2xl lg:text-3xl text-yellow-400 font-light animate-fade-in-delay-1 ${language === "ar" ? "font-arabic" : ""}`}
            >
              {currentContent.hero.subtitle}
            </h2>
          </div>
          <p
            className={`text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2 ${language === "ar" ? "font-arabic" : ""}`}
          >
            {currentContent.hero.description}
          </p>
          <div className="pt-8">
            <Button
              size="lg"
              className={`bg-yellow-400 text-black hover:bg-yellow-300 text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 animate-fade-in-delay-3 ${language === "ar" ? "font-arabic" : ""}`}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              {currentContent.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className={`py-20 px-6 transition-all duration-1000 ${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h2
                className={`text-4xl md:text-5xl font-bold text-primary hover:text-accent transition-colors duration-300 ${language === "ar" ? "font-arabic text-right" : ""}`}
              >
                {currentContent.about.title}
              </h2>
              <p
                className={`text-lg leading-relaxed text-muted-foreground ${language === "ar" ? "font-arabic text-right" : ""}`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {currentContent.about.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentContent.about.features.map((feature, index) => (
                  <Card
                    key={index}
                    className={`glow-on-hover hover:border-primary/50 transition-all duration-500 ${visibleSections.has("about") ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    <CardContent className="p-4 text-center">
                      <span
                        className={`font-semibold text-primary ${language === "ar" ? "font-arabic" : ""}`}
                        dir={language === "ar" ? "rtl" : "ltr"}
                      >
                        {feature}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-400 ${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="w-full h-96 rounded-lg flex items-center justify-center transition-all duration-300 border-4 border-primary/20 hover:border-primary/40 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/30">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex.jpg-CrgQaoaqR9QKHfErZYzzUNoTqjAnuN.jpeg"
                  alt="EX.MEDIA Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        ref={servicesRef}
        className={`py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden transition-all duration-1000 ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full blur-xl animate-float-horizontal"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${language === "ar" ? "font-arabic" : ""}`}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                {currentContent.services.title}
              </span>
            </h2>
            <p
              className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${language === "ar" ? "font-arabic" : ""}`}
            >
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto" dir={`${language === "ar" ? "rtl" : "ltr"}`}>
            {currentContent.services.items.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className={`group relative m-auto overflow-hidden bg-gradient-to-br from-gray-800/100 to-gray-900/100 border-gray-700/100 hover:border-yellow-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 w-full max-w-sm ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{
                    transitionDelay: `${600 + index * 150}ms`,
                  }}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce"></div>
                  </div>

                  <CardContent
                    className={`p-8 relative z-10 ${language === "ar" ? "text-right" : ""}`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <div className={`flex items-center mb-6 ${language === "ar" ? "justify-start" : ""}`}>
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3
                      className={`text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {service.description}
                    </p>

                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.gradient} opacity-20 blur-sm`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to action */}
        </div>
      </section>

      <section
        ref={socialRef}
        id="social"
        className={`py-20 px-6 bg-card transition-all duration-1000 delay-200 ${visibleSections.has("social") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary mb-4 hover:text-accent transition-colors duration-300 ${language === "ar" ? "font-arabic" : ""}`}
          >
            {currentContent.social.title}
          </h2>
          <p className={`text-lg text-muted-foreground mb-12 ${language === "ar" ? "font-arabic" : ""}`}>
            {currentContent.social.subtitle}
          </p>
          <div dir={language === "ar" ? "rtl" : "ltr"} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {currentContent.social.platforms.map((platform, index) => (
              <div
                key={index}
                className={`group cursor-pointer text-center transition-all duration-500 ${visibleSections.has("social")
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-8"
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                onClick={() => window.open(platform.url, "_blank")}
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/60 group-hover:scale-110 animate-glow-pulse">
                    <Image
                      width={50}
                      height={50}
                      src={platform.profileImage || "/placeholder.svg"}
                      alt={`${platform.name} profile`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                </div>
                <div>
                  <h3
                    dir="ltr"
                    className={`font-bold text-base group-hover:text-primary transition-colors duration-300 ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    {platform.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={locationRef}
        id="location"
        className={`py-20 flex flex-col gap-10 bg-primary/10 px-6 transition-all duration-1000 delay-400 ${visibleSections.has("location") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${visibleSections.has("location") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div dir={language === "ar" ? "rtl" : "ltr"} className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-primary animate-bounce" />
                <div>
                  <h3 className={`text-xl font-semibold ${language === "ar" ? "font-arabic" : ""}`}>{language === "ar" ? "اكس.ميديا" : "EX.MEDIA"}</h3>
                  <p className={`text-muted-foreground ${language === "ar" ? "font-arabic" : ""}`}>
                    {currentContent.location.address}
                  </p>
                </div>
              </div>
              <Card className="w-full">
                <CardContent className="p-6">
                  <h4
                    className={`font-semibold mb-2 text-primary ${language === "ar" ? "font-arabic text-right" : ""}`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {language === "ar" ? "معلومات التواصل" : "Contact Information"}
                  </h4>
                  <p
                    className={`text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer ${language === "ar" ? "font-arabic text-right" : ""}`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {language === "ar" ? "الإيميل: " : "Email: "}
                    <a href="mailto:Expointmedia@gmail.com" className="hover:underline">
                      Expointmedia@gmail.com
                    </a>
                  </p>
                  <p
                    className={`text-muted-foreground hover:text-primary transition-colors duration-300 ${language === "ar" ? "font-arabic text-right" : ""}`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {language === "ar" ? "الهاتف: " : "Phone: "}{language === "ar" ? "201000028787+" : "+20 1000028787"}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-600 ${visibleSections.has("location") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 glow-on-hover">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.763665954518!2d31.520198775551503!3d29.98622127495301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzEwLjQiTiAzMcKwMzEnMjIuMCJF!5e0!3m2!1sen!2seg!4v1756690235065!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(1.2) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EX.MEDIA Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`bg-secondary text-secondary-foreground py-12 px-6 border-t border-primary/20 ${language === "ar" ? "rtl" : ""}`}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="container mx-auto max-w-6xl">
          <div
            className={`grid md:grid-cols-3 gap-8 text-center ${language === "ar" ? "md:text-right" : "md:text-left"}`}
          >
            <div>
              <h3
                className={`text-2xl font-bold text-primary mb-2 hover:text-accent transition-colors duration-300 cursor-pointer ${language === "ar" ? "font-arabic" : ""}`}
              >
                {language === "ar" ? "اكس.ميديا" : "EX.MEDIA"}
              </h3>
              <p className={`text-sm opacity-80 m-auto ${language === "ar" ? "font-arabic" : ""}`}>
                {language === "ar"
                  ? "تحويل التجارب الرقمية من خلال حلول إعلامية مبتكرة"
                  : "Transforming digital experiences through innovative media solutions."}
              </p>
            </div>
            <div className="w-[100%] overflow-hidden m-auto">
              <h4 className={`font-semibold mb-4 text-primary ${language === "ar" ? "font-arabic" : ""}`}>
                {language === "ar" ? "معلومات التواصل" : "Contact Info"}
              </h4>
              <div dir="ltr" className={`space-y-2 m-auto overflow-hidden flex flex-col justify-center items-center ${language === "ar" ? "md:items-end" : "md:items-start"} m-0`}>
                <div
                  dir={language === "ar" ? "rtl" : "ltr"}
                  className={`flex items-center space-x-2`}
                >
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a
                    href="mailto:Expointmedia@gmail.com"
                    className={`text-sm hover:text-primary transition-colors duration-300 cursor-pointer hover:underline ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    Expointmedia@gmail.com
                  </a>
                </div>
                <div
                  dir={language === "ar" ? "rtl" : "ltr"}
                  className={`flex items-center space-x-2`}
                >
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <p
                    dir="ltr"
                    className={`text-sm hover:text-primary transition-colors duration-300 cursor-pointer hover:underline ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    +20 1000028787
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 text-primary ${language === "ar" ? "font-arabic" : ""}`}>
                {language === "ar" ? "تابعنا" : "Follow Us"}
              </h4>
              <div dir={language === "ar" ? "rtl" : "ltr"} className={`flex w-100 space-x-4 items-center justify-center ${language === "ar" ? "md:justify-start" : "md:justify-start"} `}>
                <a href="https://www.instagram.com/expointmedia?igsh=eHo5YThiM215aWtqcQ==" target="_blank" className="text-primary inline-flex hover:text-accent transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/1AA8Bdsmnm/?mibextid=wwXIfr" target="_blank" className="text-primary inline-flex hover:text-accent transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center">
            <p className={`text-sm opacity-70 ${language === "ar" ? "font-arabic" : ""}`}>
              {language === "ar" ? "© 2025 اكس.ميديا. جميع الحقوق محفوظة." : "© 2025 EX.MEDIA. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
