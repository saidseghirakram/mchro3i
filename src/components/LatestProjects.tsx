
import { Users, ArrowUp, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const LatestProjects = () => {
  const projects = [
    {
      id: 1,
      title: "منصة التعليم الذكي",
      description: "تطبيق ويب لتعليم البرمجة باستخدام الذكاء الاصطناعي",
      owner: "أحمد بن علي",
      specialty: "هندسة البرمجيات",
      location: "الجزائر العاصمة",
      tags: ["React", "Python", "AI"],
      followers: 45,
      avatar: "/placeholder.svg",
      status: "يبحث عن شركاء",
      progress: 60
    },
    {
      id: 2,
      title: "تطبيق إدارة المزارع",
      description: "حل رقمي لمساعدة المزارعين في تتبع المحاصيل والموارد",
      owner: "فاطمة زهراء",
      specialty: "الهندسة الزراعية",
      location: "سطيف",
      tags: ["IoT", "Agriculture", "Mobile"],
      followers: 32,
      avatar: "/placeholder.svg",
      status: "قيد التطوير",
      progress: 75
    },
    {
      id: 3,
      title: "منصة التجارة المحلية",
      description: "ربط المنتجين المحليين بالمستهلكين مباشرة",
      owner: "محمد الطاهر",
      specialty: "إدارة الأعمال",
      location: "وهران",
      tags: ["E-commerce", "React", "Node.js"],
      followers: 67,
      avatar: "/placeholder.svg",
      status: "يبحث عن تمويل",
      progress: 90
    },
    {
      id: 4,
      title: "نظام إدارة المكتبات",
      description: "نظام شامل لإدارة المكتبات الجامعية والعامة",
      owner: "سارة بوعلام",
      specialty: "علوم الكمبيوتر",
      location: "قسنطينة",
      tags: ["Java", "Database", "Web"],
      followers: 28,
      avatar: "/placeholder.svg",
      status: "مكتمل",
      progress: 100
    },
    {
      id: 5,
      title: "تطبيق الصحة النفسية",
      description: "منصة لتقديم الدعم النفسي والاستشارات عبر الإنترنت",
      owner: "يوسف قادري",
      specialty: "علم النفس",
      location: "تلمسان",
      tags: ["Psychology", "Mobile", "AI"],
      followers: 41,
      avatar: "/placeholder.svg",
      status: "فكرة",
      progress: 25
    },
    {
      id: 6,
      title: "منصة التوظيف للخريجين",
      description: "ربط الخريجين الجدد بفرص العمل المناسبة",
      owner: "ليلى بن صالح",
      specialty: "الموارد البشرية",
      location: "عنابة",
      tags: ["HR", "React", "AI Matching"],
      followers: 55,
      avatar: "/placeholder.svg",
      status: "يبحث عن مطورين",
      progress: 40
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مكتمل": return "bg-green-100 text-green-800";
      case "قيد التطوير": return "bg-blue-100 text-blue-800";
      case "يبحث عن تمويل": return "bg-purple-100 text-purple-800";
      case "يبحث عن شركاء": return "bg-orange-100 text-orange-800";
      case "يبحث عن مطورين": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            أحدث المشاريع
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف المشاريع الجديدة والمثيرة من أعضائنا وانضم إليها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`${getStatusColor(project.status)} font-medium`}>
                    {project.status}
                  </Badge>
                  <div className="text-sm text-gray-500">{project.progress}%</div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Owner Info */}
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={project.avatar} />
                    <AvatarFallback>{project.owner.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900">{project.owner}</div>
                    <div className="text-xs text-gray-500">{project.specialty}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="text-sm text-gray-600 mb-4">📍 {project.location}</div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 ml-1" />
                    {project.followers} متابع
                  </div>
                  <Button size="sm" variant="outline" className="hover:bg-blue-50 hover:border-blue-500">
                    عرض التفاصيل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-3 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
          >
            عرض جميع المشاريع
            <ArrowUp className="mr-2 h-5 w-5 rotate-45" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
