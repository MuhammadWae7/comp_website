export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 sm:py-40 bg-gradient-to-r from-blue-900 to-blue-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">هل تريد نقل شحنتك معنا؟</h2>
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          تواصل مع شركة السويدي للنقل البري اليوم واستمتع بخدمة فائقة الجودة مع أنظمة تتبع GPS متقدمة
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:elsewedyforlandtransport@gmail.com"
            className="inline-block px-10 py-4 bg-yellow-500 text-blue-900 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
          >
            راسلنا عبر البريد
          </a>
          <a
            href="tel:+201000054371"
            className="inline-block px-10 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            01000054371
          </a>
        </div>
      </div>
    </section>
  )
}
