
import { Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const SearchSection = () => {
  const categories = [
    "البرمجة", "الطب", "الهندسة", "التسويق", "التصميم", "إدارة الأعمال", 
    "الفنون", "التعليم", "الزراعة", "البيئة"
  ];

  const locations = [
    "الجزائر العاصمة", "وهران", "قسنطينة", "سطيف", "عنابة", "تلمسان",
    "بجاية", "باتنة", "ورقلة", "غرداية"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ابحث عن مشروعك المثالي
          </h2>
          <p className="text-xl text-gray-600">
            استخدم الفلاتر المتقدمة للعثور على المشاريع والأشخاص المناسبين
          </p>
        </div>

        {/* Main Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Input
              placeholder="ابحث عن مشاريع، أشخاص، أو تخصصات..."
              className="h-14 text-lg pr-14 pl-6 rounded-xl border-2 border-gray-200 focus:border-blue-500"
            />
            <Link to="/search">
              <Button 
                size="sm" 
                className="absolute left-2 top-2 h-10 bg-gradient-to-r from-blue-600 to-green-500"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">التخصصات</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="secondary" 
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">الولايات</h3>
            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <Badge 
                  key={location}
                  variant="outline" 
                  className="px-4 py-2 cursor-pointer hover:bg-green-100 hover:border-green-500 hover:text-green-700 transition-colors"
                >
                  {location}
                </Badge>
              ))}
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <select className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white appearance-none cursor-pointer">
                <option>نوع المشروع</option>
                <option>تطبيق ويب</option>
                <option>تطبيق موبايل</option>
                <option>مشروع تجاري</option>
                <option>مشروع بحثي</option>
              </select>
              <ChevronDown className="absolute left-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white appearance-none cursor-pointer">
                <option>مستوى الخبرة</option>
                <option>مبتدئ</option>
                <option>متوسط</option>
                <option>متقدم</option>
                <option>خبير</option>
              </select>
              <ChevronDown className="absolute left-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white appearance-none cursor-pointer">
                <option>حالة المشروع</option>
                <option>فكرة</option>
                <option>قيد التطوير</option>
                <option>مكتمل</option>
                <option>يبحث عن تمويل</option>
              </select>
              <ChevronDown className="absolute left-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="text-center">
            <Link to="/search">
              <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3 text-lg">
                بحث متقدم
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
