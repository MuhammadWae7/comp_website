import Link from "next/link"
import { Truck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-8 w-fit">
              <Truck className="w-6 h-6 text-yellow-600" />
              <span className="text-base font-semibold text-yellow-600">الحل الموثوق للنقل الثقيل</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              نقل ثقيل <span className="text-yellow-600">موثوق وآمن</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-light">
              شركة السويدي للنقل البري متخصصة في نقل المعدات الثقيلة والبضائع بأسطول حديث ومجهز بأحدث معايير الأمان.
              فريقنا المحترف يضمن خدمات دقيقة وموثوقة لجميع عملائنا.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="#services"
                className="inline-block px-10 py-4 border-2 border-gray-300 text-gray-900 text-lg font-semibold rounded-lg hover:border-gray-400 transition-colors text-center"
              >
                تعرف على الخدمات
              </Link>
            </div>
          </div>

          <div className="relative h-96 sm:h-[500px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/mercedes-benz-heavy-duty-truck-cargo-transport.jpg"
              alt="شاحنة Mercedes النقل الثقيل"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
