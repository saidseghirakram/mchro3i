
import { ArrowUp, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            اصنع مستقبلك واربط{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              مشروعك
            </span>{' '}
            مع من يشاركونك الشغف
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            منصة تجمع بين أصحاب الأفكار، خريجي الجامعات، وحاملي شهادات التكوين المهني 
            لتبادل المهارات، بناء الشراكات، وتطوير المشاريع
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 px-8 py-3 text-lg"
            >
              ابدأ الآن
              <ArrowUp className="mr-2 h-5 w-5 rotate-45" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 text-lg border-gray-300 hover:border-blue-500"
            >
              اكتشف المشاريع
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">عضو نشط</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-gray-600">مشروع نشط</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <ArrowUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">معدل النجاح</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
