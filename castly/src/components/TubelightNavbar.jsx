import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import './TubelightNavbar.css';

export function TubelightNavbar({ items, className = "" }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const containerRef = useRef(null);
  const itemRefs = useRef({});
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const [indicatorState, setIndicatorState] = useState({
    x: 0,
    width: 0,
    ready: false
  });

  const updateIndicatorPosition = useCallback(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeTab];
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();

      setIndicatorState({
        x: itemRect.left - containerRect.left,
        width: itemRect.width,
        ready: true
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicatorPosition();
  }, [updateIndicatorPosition]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicatorPosition);
    if (document.fonts) {
      document.fonts.ready.then(updateIndicatorPosition);
    }
    const timer = setTimeout(updateIndicatorPosition, 50);
    return () => {
      window.removeEventListener("resize", updateIndicatorPosition);
      clearTimeout(timer);
    };
  }, [updateIndicatorPosition]);

  // Accurate scroll spy that correctly handles sections of any height (including tall sections like Work)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const triggerPoint = window.innerHeight * 0.38;
          const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

          if (isBottom) {
            setActiveTab(items[items.length - 1].name);
            ticking = false;
            return;
          }

          let currentSection = null;

          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const id = item.url.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
                currentSection = item.name;
                break;
              }
            }
          }

          if (currentSection) {
            setActiveTab(currentSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleTabClick = (e, item) => {
    e.preventDefault();
    setActiveTab(item.name);
    isClickScrolling.current = true;

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);

    const targetId = item.url.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', item.url);
    }
  };

  return (
    <header className={`tubelight-header ${className}`}>
      <div className="tubelight-header-left">
        <a href="#home" className="tubelight-logo">CASTLY<span>.MEDIA</span></a>
      </div>

      <div className="tubelight-navbar-wrapper">
        <nav 
          ref={containerRef}
          className="tubelight-navbar-container" 
          aria-label="Main Navigation"
        >
          {/* Single Persistent Butter-Smooth GPU Sliding Tubelight Indicator */}
          <motion.div
            className="tubelight-lamp-indicator"
            initial={false}
            animate={{
              x: indicatorState.x,
              width: indicatorState.width,
              opacity: indicatorState.ready ? 1 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 28,
              mass: 0.6
            }}
          >
            <div className="tubelight-lamp-top">
              <div className="tubelight-lamp-blur blur-lg"></div>
              <div className="tubelight-lamp-blur blur-md"></div>
              <div className="tubelight-lamp-blur blur-sm"></div>
            </div>
          </motion.div>

          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                ref={(el) => (itemRefs.current[item.name] = el)}
                href={item.url}
                onClick={(e) => handleTabClick(e, item)}
                className={`tubelight-nav-item ${isActive ? "active" : ""}`}
              >
                <span className="nav-item-text">{item.name}</span>
                <span className="nav-item-icon">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="tubelight-header-right">
        <a href="#contact" className="tubelight-cta" data-cursor="open">CONNECT</a>
      </div>
    </header>
  );
}
