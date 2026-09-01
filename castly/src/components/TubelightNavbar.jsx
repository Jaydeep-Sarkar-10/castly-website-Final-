import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './TubelightNavbar.css';

export function TubelightNavbar({ items, className = "" }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update active tab on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Find corresponding item name
          const item = items.find((i) => i.url === `#${sectionId}`);
          if (item) {
            setActiveTab(item.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    items.forEach((item) => {
      const id = item.url.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className={`tubelight-header ${className}`}>
      <div className="tubelight-header-left">
        <a href="#home" className="tubelight-logo">CASTLY<span>MEDIA</span></a>
      </div>

      <div className="tubelight-navbar-wrapper">
        <div className="tubelight-navbar-container">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={`tubelight-nav-item ${isActive ? "active" : ""}`}
              >
                <span className="nav-item-text">{item.name}</span>
                <span className="nav-item-icon">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="tubelight-lamp-container"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="tubelight-lamp-top">
                      <div className="tubelight-lamp-blur blur-lg"></div>
                      <div className="tubelight-lamp-blur blur-md"></div>
                      <div className="tubelight-lamp-blur blur-sm"></div>
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
        </div>
      </div>

      <div className="tubelight-header-right">
        <a href="#contact" className="tubelight-cta" data-cursor="open">CONNECT</a>
      </div>
    </header>
  );
}
