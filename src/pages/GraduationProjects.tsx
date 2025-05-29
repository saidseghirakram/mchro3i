
import { useState } from 'react';
import { Search, Users, Calendar, MapPin, Star, MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GraduationProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "تطبيق إدارة المستشفيات الذكي",
      owner: "أحمد بن محمد",
      university: "جامعة الجزائر 1",
      specialization: "هندسة البرمجيات",
      description: "نظام متكامل لإدارة المستشفيات باستخدام الذكاء الاصطناعي لتحسين جودة الخدمات الطبية",
      skills: ["React", "Node.js", "AI", "قواعد البيانات"],
      lookingFor: ["مطور واجهات", "مختص قواعد بيانات", "مصمم UI/UX"],
      location: "الجزائر العاصمة",
      likes: 24,
      comments: 8,
      rating: 4.8,
      status: "يبحث عن فريق",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "منصة التعليم الإلكتروني للأطفال",
      owner: "فاطمة العربي",
      university: "جامعة وهران للعلوم والتكنولوجيا",
      specialization: "علوم الحاسوب",
      description: "منصة تفاعلية لتعليم الأطفال المواد الأساسية بطريقة ممتعة وتفاعلية",
      skills: ["Flutter", "Firebase", "UI Design", "تطوير الألعاب"],
      lookingFor: ["مطور موبايل", "مصمم شخصيات", "خبير تعليمي"],
      location: "وهران",
      likes: 35,
      comments: 12,
      rating: 4.9,
      status: "في مرحلة النموذج الأولي",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "نظام إدارة النفايات الذكي",
      owner: "كريم بوعلام",
      university: "جامعة قسنطينة 2",
      specialization: "هندسة البيئة",
      description: "حل تقني لتحسين جمع ومعالجة النفايات في المدن باستخدام IoT والذكاء الاصطناعي",
      skills: ["IoT", "Python", "Machine Learning", "Arduino"],
      lookingFor: ["مهندس إلكترونيات", "مطور Python", "خبير بيئي"],
      location: "قسنطينة",
      likes: 18,
      comments: 6,
      rating: 4.6,
      status: "يبحث عن تمويل",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "تطبيق الزراعة الذكية",
      owner: "ليلى مرزوق",
      university: "المدرسة العليا للفلاحة",
      specialization: "الهندسة الزراعية",
      description: "تطبيق يساعد المزارعين على مراقبة محاصيلهم وتحسين الإنتاجية باستخدام البيانات",
      skills: ["Mobile Development", "Data Analysis", "Agriculture", "Sensors"],
      lookingFor: ["مطور تطبيقات", "مهندس أجهزة استشعار", "خبير زراعي"],
      location: "سطيف",
      likes: 29,
      comments: 10,
      rating: 4.7,
      status: "قيد التطوير",
      image: "/placeholder.svg"
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" dir="rtl">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            مشاريع التخرج المميزة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مشاريع التخرج الابتكارية وانضم إلى فرق تطوير مشاريع حقيقية تحدث فرقاً في المجتمع
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              placeholder="ابحث في مشاريع التخرج..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 text-lg pr-12 pl-6 rounded-xl border-2 border-gray-200 focus:border-blue-500"
            />
            <Search className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {project.status}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{project.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 font-medium">{project.owner}</p>
                  <p className="text-xs text-gray-500">{project.university}</p>
                  <p className="text-xs text-blue-600 font-medium">{project.specialization}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-700 leading-relaxed">
                  {project.description}
                </CardDescription>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">المهارات المطلوبة:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">يبحث عن:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.lookingFor.map((role) => (
                      <Badge key={role} className="text-xs bg-green-100 text-green-700 hover:bg-green-200">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{project.comments}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  انضم للمشروع
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GraduationProjects;
