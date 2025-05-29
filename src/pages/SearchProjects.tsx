
import { useState } from 'react';
import { Search, Filter, Users, Calendar, MapPin, Star, Heart, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SearchProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedLocation, setSelectedLocation] = useState('الكل');
  const [selectedType, setSelectedType] = useState('الكل');

  const categories = ["الكل", "البرمجة", "الطب", "الهندسة", "التسويق", "التصميم", "إدارة الأعمال", "الفنون", "التعليم", "الزراعة", "البيئة"];
  const locations = ["الكل", "الجزائر العاصمة", "وهران", "قسنطينة", "سطيف", "عنابة", "تلمسان", "بجاية", "باتنة", "ورقلة", "غرداية"];
  const projectTypes = ["الكل", "تطبيق ويب", "تطبيق موبايل", "مشروع تجاري", "مشروع بحثي", "مشروع تخرج", "مشروع شخصي"];

  const allProjects = [
    {
      id: 1,
      title: "متجر إلكتروني للمنتجات التقليدية الجزائرية",
      creator: "أحمد بوعزة",
      category: "التسويق",
      type: "تطبيق ويب",
      description: "منصة لبيع المنتجات التقليدية الجزائرية عبر الإنترنت مع دعم الحرفيين المحليين",
      skills: ["React", "E-commerce", "التسويق الرقمي", "UI/UX"],
      lookingFor: ["مطور واجهات", "مختص تسويق", "مصمم"],
      location: "الجزائر العاصمة",
      likes: 45,
      comments: 12,
      members: 3,
      status: "يبحث عن فريق",
      progress: 30,
      budget: "متوسط",
      duration: "6 أشهر"
    },
    {
      id: 2,
      title: "تطبيق طبي لمتابعة مرضى السكري",
      creator: "د. فاطمة محمدي",
      category: "الطب",
      type: "تطبيق موبايل",
      description: "تطبيق ذكي لمساعدة مرضى السكري في متابعة حالتهم الصحية وتذكيرهم بالأدوية",
      skills: ["Flutter", "طب", "قواعد البيانات", "UI Health"],
      lookingFor: ["مطور موبايل", "مختص تغذية", "مصمم UX"],
      location: "وهران",
      likes: 67,
      comments: 18,
      members: 2,
      status: "قيد التطوير",
      progress: 60,
      budget: "مرتفع",
      duration: "8 أشهر"
    },
    {
      id: 3,
      title: "منصة تعليمية تفاعلية للأطفال",
      creator: "ليلى بن صالح",
      category: "التعليم",
      type: "تطبيق ويب",
      description: "منصة تعليمية تستخدم الألعاب والأنشطة التفاعلية لتعليم الأطفال المواد الأساسية",
      skills: ["Vue.js", "علوم التربية", "تصميم ألعاب", "تحليل البيانات"],
      lookingFor: ["مطور ألعاب", "خبير تعليمي", "مختص تحليل"],
      location: "قسنطينة",
      likes: 38,
      comments: 9,
      members: 4,
      status: "مكتمل 80%",
      progress: 80,
      budget: "منخفض",
      duration: "4 أشهر"
    },
    {
      id: 4,
      title: "نظام إدارة المخزون الذكي",
      creator: "كريم زيتوني",
      category: "إدارة الأعمال",
      type: "تطبيق ويب",
      description: "نظام متطور لإدارة المخزون في الشركات الصغيرة والمتوسطة باستخدام الذكاء الاصطناعي",
      skills: ["Python", "AI", "إدارة", "تحليل البيانات"],
      lookingFor: ["مطور Python", "مختص AI", "محلل أعمال"],
      location: "سطيف",
      likes: 29,
      comments: 7,
      members: 2,
      status: "فكرة جديدة",
      progress: 10,
      budget: "متوسط",
      duration: "10 أشهر"
    },
    {
      id: 5,
      title: "تطبيق توصيل الطعام المحلي",
      creator: "عمر حداد",
      category: "التسويق",
      type: "تطبيق موبايل",
      description: "تطبيق لتوصيل الطعام من المطاعم المحلية مع التركيز على الأكلات التقليدية",
      skills: ["React Native", "خرائط", "دفع إلكتروني", "تسويق"],
      lookingFor: ["مطور موبايل", "مختص خرائط", "مسوق رقمي"],
      location: "عنابة",
      likes: 52,
      comments: 15,
      members: 5,
      status: "يبحث عن تمويل",
      progress: 70,
      budget: "مرتفع",
      duration: "12 شهر"
    },
    {
      id: 6,
      title: "منصة فنية لعرض الأعمال الجزائرية",
      creator: "نادية بولعراس",
      category: "الفنون",
      type: "تطبيق ويب",
      description: "معرض افتراضي للفنانين الجزائريين لعرض وبيع أعمالهم الفنية",
      skills: ["تصميم ويب", "فنون", "التصوير", "التسويق"],
      lookingFor: ["مطور ويب", "مصور", "مختص فنون"],
      location: "تلمسان",
      likes: 41,
      comments: 11,
      members: 3,
      status: "في التجريب",
      progress: 50,
      budget: "منخفض",
      duration: "5 أشهر"
    }
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'الكل' || project.category === selectedCategory;
    const matchesLocation = selectedLocation === 'الكل' || project.location === selectedLocation;
    const matchesType = selectedType === 'الكل' || project.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" dir="rtl">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ابحث عن مشروعك المثالي
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف مئات المشاريع المتنوعة وابحث عن الفرصة المناسبة لك باستخدام الفلاتر المتقدمة
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Main Search */}
          <div className="mb-6">
            <div className="relative">
              <Input
                placeholder="ابحث عن مشاريع، مهارات، أو أشخاص..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-14 text-lg pr-14 pl-6 rounded-xl border-2 border-gray-200 focus:border-blue-500"
              />
              <Search className="absolute right-4 top-4 h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white appearance-none cursor-pointer"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white appearance-none cursor-pointer"
              >
                {projectTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            تم العثور على <span className="font-bold text-blue-600">{filteredProjects.length}</span> مشروع
          </p>
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
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 font-medium">{project.creator}</p>
                  <p className="text-xs text-purple-600">{project.type}</p>
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

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>التقدم</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">المدة المتوقعة</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">الميزانية</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.members}</span>
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

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لم يتم العثور على مشاريع تطابق معايير البحث</p>
            <p className="text-gray-400 mt-2">جرب تغيير الفلاتر أو البحث بكلمات مختلفة</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchProjects;
