
import { Check, X, Crown, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/components/AuthContext';
import { useNavigate } from 'react-router-dom';

const PricingPlans = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePlanSelection = (planType: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    if (planType === 'free') {
      navigate('/add-project');
    } else {
      // For paid plans, we'll just show a message for now
      alert('الباقات المدفوعة ستكون متاحة قريباً!');
    }
  };

  const plans = [
    {
      name: "الباقة المجانية",
      subtitle: "Starter",
      price: "مجاني",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      buttonColor: "bg-green-600 hover:bg-green-700",
      icon: Star,
      iconColor: "text-green-600",
      planType: "free",
      description: "مثالي للطلاب الجدد الذين يودون تجربة المنصة ونشر مشروع واحد",
      features: [
        { text: "إنشاء حساب شخصي", included: true },
        { text: "إنشاء مشروع واحد فقط", included: true },
        { text: "إمكانية التقديم على مشاريع موجودة", included: true },
        { text: "التواصل مع مستشار", included: false },
        { text: "أولوية في الظهور", included: false },
        { text: "تحليلات للمشروع", included: false },
        { text: "إرسال إشعارات للمساهمين", included: false }
      ]
    },
    {
      name: "باقة المحترف",
      subtitle: "Pro",
      price: "2,500 دج/شهر",
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      icon: Zap,
      iconColor: "text-blue-600",
      popular: true,
      planType: "pro",
      description: "مثالي للخريجين أو المطورين الذين يبحثون عن شراكات فعلية",
      features: [
        { text: "إنشاء حتى 5 مشاريع", included: true },
        { text: "إرسال طلبات مباشرة للمساهمين", included: true },
        { text: "الوصول إلى مستشار عام (مكالمات / رسائل)", included: true },
        { text: "ظهور أعلى في نتائج البحث", included: true },
        { text: "ملف شخصي احترافي + تقييمات", included: true },
        { text: "أدوات تحليلية بسيطة للمشروع", included: true },
        { text: "دورات مميزة", included: false },
        { text: "حملات إعلانية داخلية", included: false }
      ]
    },
    {
      name: "باقة الريادي",
      subtitle: "Entrepreneur",
      price: "7,500 دج/شهر",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      icon: Crown,
      iconColor: "text-purple-600",
      planType: "entrepreneur",
      description: "مثالي لأصحاب الأفكار الجادة أو الشركات الناشئة الباحثين عن تطوير فعلي",
      features: [
        { text: "عدد غير محدود من المشاريع", included: true },
        { text: "وصول مباشر إلى مستشار متخصص", included: true },
        { text: "إمكانية عمل حملات داخلية للمشروع", included: true },
        { text: "إرسال إشعارات مخصصة للمستخدمين", included: true },
        { text: "تحليلات متقدمة", included: true },
        { text: "ظهور دائم في الصفحة الرئيسية", included: true },
        { text: "دورات حصرية ومميزة", included: true },
        { text: "تقارير PDF شهرية", included: true },
        { text: "دعم مخصص على واتساب أو بريد", included: true }
      ]
    }
  ];

  const additionalServices = [
    { name: "جلسة استشارية مع خبير", price: "999 دج", duration: "ساعة واحدة" },
    { name: "إعلان مميز للمشروع", price: "1,499 دج", duration: "لمدة أسبوع" },
    { name: "تحليل جدوى سريع", price: "2,499 دج", duration: "تحليل شامل" }
  ];

  const examples = [
    { name: "أحمد", role: "طالب سنة أخيرة", plan: "الباقة المجانية", purpose: "عرض فكرة مشروع تخرج" },
    { name: "أسماء", role: "مطورة ومصممة UI/UX", plan: "باقة المحترف", purpose: "الدخول في مشاريع تخصصها" },
    { name: "ياسين", role: "صاحب ورشة إلكترونيات", plan: "باقة الريادي", purpose: "عرض مشروعه وتوظيف مطورين" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خطط الأسعار
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر الباقة التي تناسب احتياجاتك وحقق أهدافك في عالم ريادة الأعمال
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card key={index} className={`${plan.bgColor} ${plan.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      الأكثر شعبية
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mx-auto">
                    <IconComponent className={`h-8 w-8 ${plan.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="text-sm text-gray-500 mb-2">{plan.subtitle}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`${plan.buttonColor} text-white w-full`}
                    onClick={() => handlePlanSelection(plan.planType)}
                  >
                    {plan.price === "مجاني" ? "ابدأ مجاناً" : "اختر هذه الباقة"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">خدمات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <p className="text-sm text-gray-600">{service.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">أمثلة حقيقية</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {example.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{example.name}</h4>
                      <p className="text-sm text-gray-600">{example.role}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-blue-600">{example.plan}</span>
                    <p className="text-gray-600 mt-1">{example.purpose}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
