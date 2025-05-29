
import { useState } from 'react';
import { Search, Users, Calendar, MapPin, Star, MessageCircle, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UniversityGraduates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const graduates = [
    {
      id: 1,
      name: "سارة بن علي",
      specialization: "هندسة المعلوماتية",
      university: "جامعة الجزائر 1",
      graduationYear: "2023",
      skills: ["React", "Python", "Machine Learning", "UI/UX Design"],
      experience: "متوسط",
      lookingFor: "مشاريع تطوير ويب وذكاء اصطناعي",
      location: "الجزائر العاصمة",
      projectsCompleted: 5,
      rating: 4.9,
      description: "خريجة هندسة معلوماتية متحمسة للعمل في مشاريع الذكاء الاصطناعي وتطوير الويب. لدي خبرة في تطوير عدة مشاريع جامعية وشخصية.",
      portfolio: "github.com/sara-benali",
      status: "متاحة للعمل"
    },
    {
      id: 2,
      name: "محمد قدور",
      specialization: "هندسة الطيران",
      university: "جامعة سطيف 1",
      graduationYear: "2023",
      skills: ["CATIA", "MATLAB", "CFD Analysis", "3D Modeling"],
      experience: "مبتدئ",
      lookingFor: "مشاريع تصميم وتطوير طائرات مسيرة",
      location: "سطيف",
      projectsCompleted: 3,
      rating: 4.7,
      description: "مهندس طيران حديث التخرج مع شغف بالطائرات المسيرة والتقنيات الجوية المتقدمة. أبحث عن فرص لتطبيق معرفتي النظرية في مشاريع عملية.",
      portfolio: "linkedin.com/in/mohammed-kaddour",
      status: "يبحث عن فريق"
    },
    {
      id: 3,
      name: "أمينة بوزيد",
      specialization: "طب الأسنان",
      university: "جامعة وهران 1",
      graduationYear: "2022",
      skills: ["Digital Dentistry", "3D Printing", "Patient Care", "Oral Surgery"],
      experience: "متقدم",
      lookingFor: "مشاريع تطوير تقنيات طب الأسنان الرقمي",
      location: "وهران",
      projectsCompleted: 8,
      rating: 5.0,
      description: "طبيبة أسنان متخصصة في التقنيات الرقمية الحديثة. أسعى لتطوير حلول تقنية تحسن من جودة العلاج وتجربة المرضى.",
      portfolio: "dr-amina-bouzid.com",
      status: "متاحة للتعاون"
    },
    {
      id: 4,
      name: "يوسف مرادي",
      specialization: "إدارة الأعمال",
      university: "جامعة قسنطينة 2",
      graduationYear: "2023",
      skills: ["Business Strategy", "Digital Marketing", "Data Analysis", "Project Management"],
      experience: "متوسط",
      lookingFor: "مشاريع ريادة الأعمال والتسويق الرقمي",
      location: "قسنطينة",
      projectsCompleted: 6,
      rating: 4.8,
      description: "خريج إدارة أعمال مع تخصص في التسويق الرقمي وريادة الأعمال. أملك خبرة في إدارة عدة مشاريع تجارية صغيرة.",
      portfolio: "youssef-mradi-portfolio.com",
      status: "مفتوح للفرص"
    }
  ];

  const filteredGraduates = graduates.filter(graduate =>
    graduate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    graduate.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    graduate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50" dir="rtl">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            خريجو الجامعات المميزون
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تواصل مع خريجين متميزين من مختلف التخصصات وابني فريق أحلامك لمشروعك القادم
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              placeholder="ابحث عن خريجين حسب التخصص أو المهارات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 text-lg pr-12 pl-6 rounded-xl border-2 border-gray-200 focus:border-green-500"
            />
            <Search className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
          </div>
        </div>

        {/* Graduates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGraduates.map((graduate) => (
            <Card key={graduate.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {graduate.status}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{graduate.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {graduate.name}
                </CardTitle>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <p className="text-sm text-blue-600 font-medium">{graduate.specialization}</p>
                  </div>
                  <p className="text-xs text-gray-500">{graduate.university}</p>
                  <p className="text-xs text-gray-500">تخرج: {graduate.graduationYear}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-700 leading-relaxed">
                  {graduate.description}
                </CardDescription>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">المهارات:</p>
                  <div className="flex flex-wrap gap-1">
                    {graduate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">يبحث عن:</p>
                  <p className="text-sm text-gray-600">{graduate.lookingFor}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">مستوى الخبرة</p>
                    <p className="font-medium">{graduate.experience}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">المشاريع المكتملة</p>
                    <p className="font-medium">{graduate.projectsCompleted}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{graduate.location}</span>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    عرض الملف
                  </Button>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
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

export default UniversityGraduates;
