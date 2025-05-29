import { Search, Users, BookOpen, Briefcase, ArrowUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TargetUsers from '@/components/TargetUsers';
import SearchSection from '@/components/SearchSection';
import LatestProjects from '@/components/LatestProjects';
import CoreFeatures from '@/components/CoreFeatures';
import Footer from '@/components/Footer';
import PricingPlans from '@/components/PricingPlans';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" dir="rtl">
      <Header />
      <HeroSection />
      <TargetUsers />
      <SearchSection />
      <LatestProjects />
      <CoreFeatures />
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default Index;
