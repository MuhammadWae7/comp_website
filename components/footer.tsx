import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">شركة السويدي</h3>
            <p className="text-base leading-relaxed font-light">
              متخصصة في خدمات النقل الثقيل والشحن بأسطول حديث مجهز بنظام GPS
              وفريق محترف يعمل على مدار السنة.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">الخدمات</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors font-light"
                >
                  نقل المعدات الثقيلة
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors font-light"
                >
                  شحن البضائع
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="hover:text-white transition-colors font-light"
                >
                  أنواع المركبات
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors font-light"
                >
                  خدمات التتبع بـ GPS
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">الشركة</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors font-light"
                >
                  عن الشركة
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="hover:text-white transition-colors font-light"
                >
                  أسطولنا
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors font-light"
                >
                  معايير الأمان
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors font-light"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">التواصل</h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500" />
                <a
                  href="mailto:elsewedyforlandtransport@gmail.com?subject=استفسار&body=مرحبا"
                  className="hover:text-white transition-colors font-light break-all"
                >
                  elsewedyforlandtransport@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500" />
                <a
                  href="tel:+201000054371"
                  className="hover:text-white transition-colors font-light"
                >
                  01000054371
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500" />
                <span className="font-light">مصر</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900 pt-10">
          <p className="text-base font-light text-center">
            © 2025 شركة السويدي للنقل البري. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
