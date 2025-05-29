
import { Mail, Users, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">م</span>
              </div>
              <span className="text-xl font-bold">مشروعي</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              منصة تجمع بين أصحاب الأفكار والمهارات لبناء مستقبل أفضل من خلال التعاون والإبداع.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الصفحة الرئيسية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">تصفّح المشاريع</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الدورات التدريبية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المنتدى المجتمعي</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">الدعم</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">contact@mashroui.dz</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">انضم إلى مجتمعنا</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">مركز التعلم</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">تابعنا على</h4>
              <div className="flex space-x-reverse space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <span className="text-sm font-bold">ف</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <span className="text-sm font-bold">ل</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600">
                    <span className="text-sm font-bold">إ</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 مشروعي. جميع الحقوق محفوظة.
            </div>
            <div className="flex space-x-reverse space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                صُنع بـ ❤️ في الجزائر
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
