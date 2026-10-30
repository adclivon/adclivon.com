import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import { LeadStorageModal } from "./components/LeadStorageModal";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { GuestPostingPage } from "./pages/GuestPostingPage";
import { LinkInsertionPage } from "./pages/LinkInsertionPage";
import { LinkBuildingPage } from "./pages/LinkBuildingPage";
import { TechnicalSeoPage } from "./pages/TechnicalSeoPage";
import { LocalSeoPage } from "./pages/LocalSeoPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";

import { BLOG_POSTS } from "./data/blogData";
import { SERVICES_DATA } from "./data/servicesData";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    return path && path !== "" ? path : "/";
  });

  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Consultation Modal State
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreselected, setConsultationPreselected] = useState<{
    service?: string;
    budget?: string;
    details?: string;
  }>({});

  // Lead Inspection Modal
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);

  // Sync with browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path || "/");
      // Check if URL matches /blog/:id
      if (path.startsWith("/blog/")) {
        const id = path.replace("/blog/", "");
        setSelectedPostId(id);
      } else {
        setSelectedPostId(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    setSelectedPostId(null);
    window.history.pushState(null, "", path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectPost = (postId: string) => {
    setSelectedPostId(postId);
    const postUrl = `/blog/${postId}`;
    setCurrentPath(postUrl);
    window.history.pushState(null, "", postUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenConsultationWithParams = (
    service?: string,
    budget?: string,
    details?: string
  ) => {
    setConsultationPreselected({ service, budget, details });
    setIsConsultationOpen(true);
  };

  // Render Current Page
  const renderPage = () => {
    // Check if viewing single blog post
    if (selectedPostId || currentPath.startsWith("/blog/")) {
      const idToFind = selectedPostId || currentPath.replace("/blog/", "");
      const post =
        BLOG_POSTS.find((p) => p.id === idToFind || p.slug === idToFind) || BLOG_POSTS[0];
      return (
        <BlogPostPage
          post={post}
          onNavigate={navigateTo}
          onBackToBlog={() => navigateTo("/blog")}
          onOpenConsultationWithParams={handleOpenConsultationWithParams}
        />
      );
    }

    switch (currentPath) {
      case "/":
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );

      case "/about":
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultationWithParams()}
          />
        );

      case "/services":
      case "/seo-services":
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );

      case "/guest-posting":
      case "/guest-posting-services":
        return (
          <GuestPostingPage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );

      case "/link-insertion":
      case "/link-insertion-services":
        return (
          <LinkInsertionPage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );

      case "/link-building":
      case "/link-building-services":
        return (
          <LinkBuildingPage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );

      case "/technical-seo":
        return (
          <TechnicalSeoPage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );

      case "/local-seo":
        return (
          <LocalSeoPage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );

      case "/blog":
        return <BlogPage onNavigate={navigateTo} onSelectPost={handleSelectPost} />;

      case "/contact":
        return (
          <ContactPage
            onNavigate={navigateTo}
            onOpenLeadsModal={() => setIsLeadsModalOpen(true)}
          />
        );

      case "/privacy":
        return <PrivacyPolicyPage onNavigate={navigateTo} />;

      case "/terms":
        return <TermsPage onNavigate={navigateTo} />;

      default: {
        // Check if path matches any service slug
        const matchedService = SERVICES_DATA.find(
          (s) => `/${s.slug}` === currentPath || `/${s.id}` === currentPath
        );
        if (matchedService) {
          // If specific dedicated page exists for this service:
          if (matchedService.id === "guest-posting") {
            return (
              <GuestPostingPage
                onNavigate={navigateTo}
                onOpenConsultationWithParams={handleOpenConsultationWithParams}
              />
            );
          }
          if (matchedService.id === "link-insertion") {
            return (
              <LinkInsertionPage
                onNavigate={navigateTo}
                onOpenConsultationWithParams={handleOpenConsultationWithParams}
              />
            );
          }
          if (matchedService.id === "quality-link-building") {
            return (
              <LinkBuildingPage
                onNavigate={navigateTo}
                onOpenConsultationWithParams={handleOpenConsultationWithParams}
              />
            );
          }
          if (matchedService.id === "technical-seo") {
            return (
              <TechnicalSeoPage
                onNavigate={navigateTo}
                onOpenConsultationWithParams={handleOpenConsultationWithParams}
              />
            );
          }
          if (matchedService.id === "local-seo") {
            return (
              <LocalSeoPage
                onNavigate={navigateTo}
                onOpenConsultationWithParams={handleOpenConsultationWithParams}
              />
            );
          }
          // Default to services catalog
          return (
            <ServicesPage
              onNavigate={navigateTo}
              onOpenConsultationWithParams={handleOpenConsultationWithParams}
            />
          );
        }

        // Fallback to Home
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultationWithParams={handleOpenConsultationWithParams}
          />
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultationWithParams()}
      />

      {/* Main Page Content */}
      <main className="flex-1">{renderPage()}</main>

      {/* Professional Agency Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultationWithParams()}
        onOpenLeadsModal={() => setIsLeadsModalOpen(true)}
      />

      {/* Global Free Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={consultationPreselected.service}
        preselectedBudget={consultationPreselected.budget}
        preselectedDetails={consultationPreselected.details}
      />

      {/* Agency Lead Verification / Export Modal */}
      <LeadStorageModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
      />
    </div>
  );
}
