import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Truck,
  PackageOpen,
  Network,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  LogOut,
  Menu,
  BarChart
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeSubSection, setActiveSubSection] = useState('');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSection = (sectionName: string) => {
    const isActive = activeSection === sectionName;
    setActiveSection(isActive ? '' : sectionName);
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !isActive
    }));
    setActiveSubSection('');
  };

  const sidebarSections = [
    {
      name: 'dashboard',
      icon: <LayoutDashboard />,
      label: 'Dashboard',
    },
    {
      name: 'outlets',
      icon: <Network />,
      label: 'Outlets',
      subSections: [
        { name: 'outletList', label: 'Outlet List' },
        { name: 'addChannel', label: 'Add Channel' },
        { name: 'integrationStatus', label: 'Integration Status' }
      ]
    },
    {
      name: 'deliveryPartners',
      icon: <Truck />,
      label: 'Delivery Partners',
      subSections: [
        { name: 'partnerList', label: 'Partner List' },
        { name: 'addPartner', label: 'Add Partner' },
        { name: 'partnerSettings', label: 'Partner Settings' }
      ]
    },
    {
      name: 'orderManagement',
      icon: <PackageOpen />,
      label: 'Order Management',
      subSections: [
        { name: 'orderList', label: 'Order List' },
        { name: 'orderTracking', label: 'Order Tracking' }
      ]
    },
    {
      name: 'menuManagement',
      icon: <Menu />,
      label: 'Menu Management',
      subSections: [
        { name: 'menuList', label: 'Menu List' },
        { name: 'addMenu', label: 'Add Menu' },
        { name: 'menuSettings', label: 'Menu Settings' }
      ]
    },
    {
      name: 'operations',
      icon: <BarChart />,
      label: 'Operations',
      subSections: [
        { name: 'manageOperations', label: 'Manage Operations' },
        { name: 'analytics', label: 'Analytics' }
      ]
    },
    {
      name: 'settings',
      icon: <Settings />,
      label: 'Settings',
      subSections: [
        { name: 'generalSettings', label: 'General Settings' },
        { name: 'userManagement', label: 'User Management' }
      ]
    }
  ];

  const renderSubSections = (section: any) => {
    if (!section.subSections || activeSection !== section.name) return null;
  
    return (
      <div className="pl-6 space-y-2 mt-2">
        {section.subSections.map((subSection: any) => (
          <div
            key={subSection.name}
            onClick={() => setActiveSubSection(subSection.name)}
            className={`
              flex items-center relative
              text-sm 
              ${activeSubSection === subSection.name 
                ? 'bg-blue-100 text-blue-600 font-semibold' 
                : 'text-gray-600 hover:bg-gray-100'}
              py-2 
              pl-4
              rounded-md
              cursor-pointer
              transition-all
              duration-200
            `}
          >
            {subSection.label}
          </div>
        ))}
      </div>
    );
  };

  const renderSidebarContent = () => {
    return (
      <>
        {/* Logo Section */}
        <div className="flex items-center justify-between p-6 border-b mb-8">
          {isExpanded && (
            <div className="text-2xl font-bold text-blue-600">
              Channel Manager
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-100 p-2 rounded"
          >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-grow px-4 space-y-6 overflow-y-auto">
          {sidebarSections.map((section) => (
            <div 
              key={section.name}
              onClick={() => section.subSections ? toggleSection(section.name) : setActiveSection(section.name)}
              className={`
                group
                ${activeSection === section.name 
                  ? 'bg-blue-50' 
                  : 'hover:bg-gray-100'}
                rounded-md
                transition-all
                duration-200
                cursor-pointer
              `}
            >
              <div className={`
                flex 
                items-center 
                p-3 
              `}>
                <div className={`
                  mr-3 
                  ${activeSection === section.name 
                    ? 'text-blue-600' 
                    : 'text-gray-400 group-hover:text-gray-600'}
                `}>
                  {section.icon}
                </div>

                {isExpanded && (
                  <span className="text-lg flex-grow">
                    {section.label}
                  </span>
                )}

                {isExpanded && section.subSections && (
                  expandedSections[section.name] 
                    ? <ChevronUp className="text-gray-400" /> 
                    : <ChevronDown className="text-gray-400" />
                )}
              </div>

              {isExpanded && renderSubSections(section)}
            </div>
          ))}
        </nav>

        {/* Notifications Section */}
        {isExpanded && (
          <Card className="mx-4 my-4 p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Notifications</span>
              <div className="flex items-center">
                <Bell className="text-gray-500 mr-2" size={32} />
                <Badge variant="destructive">3</Badge>
              </div>
            </div>
          </Card>
        )}

        {/* Bottom Sections */}
        <div className="border-t pt-4 px-4">
          {/* Logout/Settings */}
          <div className="flex flex-col space-y-2 mb-8">
            <Button
              className={`
                w-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-red-50 
                  text-red-600 
                  py-2 
                  rounded 
                  hover:bg-red-100 
                  transition-colors
              `}  
            >
              <LogOut className="mr-2"/>
              {isExpanded && <span className="ml-2 text-lg">Logout</span>}
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className={`
        fixed 
        left-0 
        top-0 
        h-screen 
        bg-white 
        shadow-lg 
        transition-all 
        duration-300 
        ${isExpanded ? 'w-80' : 'w-24'}
        flex 
        flex-col
        overflow-y-auto
        md:relative
        z-50
      `}
    >
      {renderSidebarContent()}
    </div>
  );
};

export default Sidebar;