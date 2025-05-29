
import { useState } from 'react';
import { Search, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "تم تسجيل الخروج",
        description: "نراك قريباً!",
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">م</span>
            </div>
            <span className="text-xl font-bold text-gray-800">مشروعي</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">الصفحة الرئيسية</a>
            <a href="/graduation-projects" className="text-gray-700 hover:text-blue-600 transition-colors">مشاريع التخرج</a>
            <a href="/search" className="text-gray-700 hover:text-blue-600 transition-colors">تصفّح المشاريع</a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            {user ? (
              <div className="flex items-center space-x-reverse space-x-4">
                <span className="text-gray-700">مرحباً، {user.email}</span>
                <Button
                  onClick={() => navigate('/add-project')}
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                >
                  أضف مشروعك
                </Button>
                <Button variant="outline" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 ml-2" />
                  خروج
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate('/auth')}>
                  تسجيل الدخول
                </Button>
                <Button
                  onClick={() => navigate('/auth')}
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                >
                  أضف مشروعك
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">الصفحة الرئيسية</a>
              <a href="/graduation-projects" className="text-gray-700 hover:text-blue-600 transition-colors">مشاريع التخرج</a>
              <a href="/search" className="text-gray-700 hover:text-blue-600 transition-colors">تصفّح المشاريع</a>
              
              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <>
                    <span className="text-gray-700 text-sm">مرحباً، {user.email}</span>
                    <Button
                      onClick={() => navigate('/add-project')}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-500"
                    >
                      أضف مشروعك
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleSignOut}>
                      تسجيل الخروج
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="w-full" onClick={() => navigate('/auth')}>
                      تسجيل الدخول
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-green-500"
                      onClick={() => navigate('/auth')}
                    >
                      أضف مشروعك
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
