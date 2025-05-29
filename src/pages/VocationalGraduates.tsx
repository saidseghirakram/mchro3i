
import { useState } from 'react';
import { Search, Users, Calendar, MapPin, Star, MessageCircle, Wrench, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VocationalGraduates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const professionals = [
    {
      id: 1,
      name: "خالد بن عمر",
      specialization: "تقني الصيانة الصناعية",
      institute: "معهد التكوين المهني - الجزائر",
      graduationYear: "2022",
      skills: ["صيانة المعدات", "اللحام", "التشخيص التقني", "كهرباء صناعية"],
      experience: "3 سنوات",
      lookingFor: "مشاريع تطوير حلول الصيانة الذكية",
      location: "الجزائر العاصمة",
      projectsCompleted: 12,
      rating: 4.8,
      description: "تقني صيانة متخصص في المعدات الصناعية مع خبرة واسعة في تشخيص وإصلاح الأعطال. أسعى لدمج التقنيات الحديثة في أعمال الصيانة.",
      certifications: ["شهادة اللحام المتقدم", "كهرباء صناعية"],
      status: "متاح للمشاريع"
    },
    {
      id: 2,
      name: "نادية حسني",
      specialization: "تقنية الطبخ والحلويات",
      institute: "معهد التكوين المهني - وهران",
      graduationYear: "2021",
      skills: ["الطبخ التقليدي", "الحلويات الشرقية", "إدارة المطابخ", "تخطيط القوائم"],
      experience: "4 سنوات",
      lookingFor: "مشاريع مطاعم ومخابز ومنصات توصيل طعام",
      location: "وهران",
      projectsCompleted: 8,
      rating: 4.9,
      description: "شيف متخصصة في الأكلات التقليدية والحلويات الشرقية. أملك خبرة في إدارة المطابخ وتطوير وصفات جديدة.",
      certifications: ["شهادة HACCP", "إدارة المطابخ"],
      status: "تبحث عن شراكة"
    },
    {
      id: 3,
      name: "عبد الرحمن مولود",
      specialization: "تقني الإلكترونيك",
      institute: "معهد التكوين المهني - قسنطينة",
      graduationYear: "2023",
      skills: ["إصلاح الهواتف", "الدوائر الإلكترونية", "برمجة المتحكمات", "أنظمة الأمان"],
      experience: "سنتان",
      lookingFor: "مشاريع تطوير أجهزة ذكية وإنترنت الأشياء",
      location: "قسنطينة",
      projectsCompleted: 6,
      rating: 4.7,
      description: "تقني إلكترونيك شاب ومبدع مع شغف بتطوير الأجهزة الذكية وحلول إنترنت الأشياء. أحب التحديات التقنية.",
      certifications: ["برمجة Arduino", "إصلاح الأجهزة المحمولة"],
      status: "مفتوح للفرص"
    },
    {
      id: 4,
      name: "فتيحة العربي",
      specialization: "تقنية الخياطة والتفصيل",
      institute: "معهد التكوين المهني - تلمسان",
      graduationYear: "2020",
      skills: ["الخياطة التقليدية", "التصميم", "التطريز", "إدارة الإنتاج"],
      experience: "5 سنوات",
      lookingFor: "مشاريع الأزياء والموضة والتجارة الإلكترونية",
      location: "تلمسان",
      projectsCompleted: 15,
      rating: 5.0,
      description: "خياطة محترفة ومصممة أزياء مع خبرة واسعة في الخياطة التقليدية والحديثة. أسعى لتطوير علامة تجارية في الموضة.",
      certifications: ["تصميم الأزياء", "إدارة الجودة"],
      status: "متاحة للتعاون"
    },
    {
      id: 5,
      name: "رضا بوشامة",
      specialization: "تقني السباكة والتدفئة",
      institute: "معهد التكوين المهني - باتنة",
      graduationYear: "2022",
      skills: ["السباكة العامة", "أنظمة التدفئة", "الطاقة الشمسية", "صيانة الشبكات"],
      experience: "3 سنوات",
      lookingFor: "مشاريع الطاقة المتجددة والحلول البيئية",
      location: "باتنة",
      projectsCompleted: 10,
      rating: 4.6,
      description: "تقني سباكة متخصص في أنظمة التدفئة والطاقة الشمسية. أهتم بالحلول البيئية والطاقة المتجددة.",
      certifications: ["تركيب الطاقة الشمسية", "أنظمة التدفئة المركزية"],
      status: "يبحث عن مشاريع"
    }
  ];

  const filteredProfessionals = professionals.filter(professional =>
    professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    professional.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    professional.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50" dir="rtl">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            حاملو شهادات التكوين المهني
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تواصل مع أصحاب المهارات العملية والخبرات التقنية المتنوعة لإنجاز مشاريعك بأعلى مستوى من الجودة
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              placeholder="ابحث عن تقنيين حسب التخصص أو المهارات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 text-lg pr-12 pl-6 rounded-xl border-2 border-gray-200 focus:border-purple-500"
            />
            <Search className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessionals.map((professional) => (
            <Card key={professional.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    {professional.status}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{professional.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {professional.name}
                </CardTitle>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-purple-600" />
                    <p className="text-sm text-purple-600 font-medium">{professional.specialization}</p>
                  </div>
                  <p className="text-xs text-gray-500">{professional.institute}</p>
                  <p className="text-xs text-gray-500">تخرج: {professional.graduationYear}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-700 leading-relaxed">
                  {professional.description}
                </CardDescription>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">المهارات التقنية:</p>
                  <div className="flex flex-wrap gap-1">
                    {professional.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">الشهادات:</p>
                  <div className="flex flex-wrap gap-1">
                    {professional.certifications.map((cert) => (
                      <Badge key={cert} className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200">
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">يبحث عن:</p>
                  <p className="text-sm text-gray-600">{professional.lookingFor}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">سنوات الخبرة</p>
                    <p className="font-medium">{professional.experience}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">المشاريع المكتملة</p>
                    <p className="font-medium">{professional.projectsCompleted}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{professional.location}</span>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    عرض الأعمال
                  </Button>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  تواصل معه
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

export default VocationalGraduates;
