const vehicles = [
  {
    name: "شاحنات النقل الثقيل",
    description:
      "متخصصة في نقل الآلات والمعدات الضخمة والبضائع الثقيلة جداً. تتحمل أوزان تتجاوز 40 طن مع أنظمة فرامل احترافية وتعليق قوي. جميع المركبات مزودة بنظام GPS متقدم للتتبع الفوري والمراقبة المستمرة.",
    image: "truck.jpeg",
  },
  {
    name: "مركبات الجامبو",
    description:
      "شاحنات عملاقة بسعة تحميل استثنائية لنقل الحمولات الفائقة والمنتجات الضخمة. مجهزة بأنظمة تثبيت عالية الجودة وهياكل معزز للحمل الإضافي. كل مركبة تتمتع بنظام GPS للتتبع والمراقبة الفورية 24/7.",
    image: "jumbo.jpeg",
  },
  {
    name: "مركبات الدبابة",
    description:
      "منصات نقل قوية متخصصة في نقل المنتجات الضخمة والمعدات الثقيلة على عجل أو سكك معدنية. تصميم قوي يسمح بنقل أوزان هائلة مع استقرار عالي. معزز بنظام GPS متقدم للتتبع والمراقبة المستمرة طوال الرحلة.",
    image: "dabbaba.jpeg",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 sm:py-40 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            أسطولنا الحديث
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            نمتلك أسطول من المركبات الحديثة والموثوقة المجهزة بأحدث التقنيات
            الأمنية وأنظمة GPS المتقدمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Vehicle Image */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={`/.jpg?height=280&width=400&query=${vehicle.image}`}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {vehicle.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light flex-grow">
                  {vehicle.description}
                </p>

                {/* Egyptian License Plate */}
                {/* <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-4 mb-0 border-2 border-gray-800 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white font-bold text-xl tracking-widest">{vehicle.plate}</span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
