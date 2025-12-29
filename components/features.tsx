import { CheckCircle, Shield, Clock, Navigation } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "أسطول حديث ومجهز",
    description: "معدات حديثة وموثوقة مع أحدث معايير السلامة والأمان",
  },
  {
    icon: Shield,
    title: "موثوقية عالية",
    description: "خدمة موثوقة وآمنة للعملاء من جميع القطاعات التجارية والصناعية",
  },
  {
    icon: Clock,
    title: "التسليم في الموعد",
    description: "نضمن التسليم في الوقت المحدد مع متابعة كاملة للشحنات",
  },
  {
    icon: Navigation,
    title: "تتبع بنظام GPS",
    description: "جميع مركباتنا مجهزة بأنظمة GPS للتتبع الفوري والمراقبة المستمرة",
  },
]

export default function Features() {
  return (
    <section id="services" className="py-24 sm:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">لماذا تختار السويدي؟</h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            خدمات نقل متكاملة بأعلى معايير الأمان والمهنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-start p-8 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300"
              >
                <Icon className="w-10 h-10 text-yellow-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
