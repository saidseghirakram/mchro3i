
import { Users, BookOpen, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TargetUsers = () => {
  const userTypes = [
    {
      icon: BookOpen,
      title: "أصحاب مشاريع التخرج",
      description: "ابحث عن داعمين، أو طوّر مشروعك مع مختصين",
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      link: "/graduation-projects"
    },
    {
      icon: Users,
      title: "خريجو الجامعات", 
      description: "انضم إلى مشاريع تناسب تخصصك أو ابدأ مشروعك الخاص",
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      link: "/university-graduates"
    },
    {
      icon: Briefcase,
      title: "حاملو شهادات التكوين المهني",
      description: "اعرض مهاراتك وابحث عن شركاء أو فرص تطوير",
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      link: "/vocational-graduates"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            من يمكنه الاستفادة من منصتنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            سواء كنت طالباً أو خريجاً أو مهنياً، لدينا المكان المناسب لك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => {
            const IconComponent = userType.icon;
            return (
              <Card key={index} className={`${userType.bgColor} border-none hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mx-auto">
                    <IconComponent className={`h-8 w-8 ${userType.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {userType.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-700 mb-6 leading-relaxed">
                    {userType.description}
                  </CardDescription>
                  <Link to={userType.link}>
                    <Button className={`${userType.buttonColor} text-white w-full`}>
                      ابدأ الآن
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;
