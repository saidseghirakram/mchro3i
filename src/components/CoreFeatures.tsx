
import { Users, BookOpen, Briefcase, Search, ArrowUp, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CoreFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "ملفات تعريف شاملة",
      description: "أنشئ ملفك التعريفي مع مؤهلاتك، مهاراتك، ونوع المشروع الذي تبحث عنه",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Briefcase,
      title: "نشر المشاريع",
      description: "انشر فكرة مشروعك واجذب المساهمين والشركاء المناسبين",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Search,
      title: "مطابقة ذكية",
      description: "خوارزمية متطورة تربطك بالأشخاص والمشاريع المناسبة لاهتماماتك",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Mail,
      title: "منتدى مجتمعي",
      description: "تبادل الأسئلة، النصائح، الموارد، وفرص التمويل والتكوين",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: BookOpen,
      title: "دورات تطبيقية",
      description: "دروس في إعداد دراسة الجدوى، التسويق الرقمي، البرمجة وريادة الأعمال",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: ArrowUp,
      title: "متابعة التقدم",
      description: "تتبع تطور مشاريعك واحصل على تحديثات دورية حول الفرص الجديدة",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خدماتنا الأساسية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة شاملة من الأدوات والخدمات لمساعدتك في بناء وتطوير مشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border-none hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mb-4 mx-auto`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              جاهز لبدء رحلتك؟
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              انضم إلى مجتمعنا المتنامي من المبدعين والمطورين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                أنشئ حسابك مجاناً
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                تعرف على المزيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
