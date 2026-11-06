import React, { useRef, useEffect } from 'react';
import { ExternalLink, Play, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import './SelectedWork.css';

function InstagramIcon({ size = 15, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}

function CaseStudyVideoCard({ project, onPlayVideo }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(() => {});
    }
  }, [project.previewVideo]);

  const handlePlay = () => {
    if (onPlayVideo) {
      onPlayVideo({
        title: `${project.client} — Case Study Showcase`,
        category: project.category,
        desc: project.howCastlyHelped,
        videoUrl: project.previewVideo,
        isVertical: true
      });
    }
  };

  return (
    <div 
      className="case-study-media-wrap"
      onClick={handlePlay}
      role="button"
      tabIndex={0}
      data-cursor="play"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePlay();
        }
      }}
    >
      <div className="case-study-media">
        <video
          ref={videoRef}
          src={project.previewVideo}
          className="case-study-video"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src={project.previewVideo} type="video/mp4" />
        </video>

        <div className="case-study-media-badges">
          <span className="case-study-tag">Case Study {project.index}</span>
          {project.badge && (
            <span className="case-study-viral-badge">
              <TrendingUp size={12} />
              <span>{project.badge}</span>
            </span>
          )}
        </div>

        <div className="case-study-play-overlay">
          <div className="case-study-play-btn">
            <Play size={24} fill="currentColor" />
          </div>
          <span className="play-caption">Click to Watch Showcase</span>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork({ onPlayVideo }) {
  const clientProjects = [
    {
      id: "earnedits",
      index: "01",
      client: "EARN EDITS",
      category: "Client Project | Video Editing & Creative Content",
      industry: "Creator Economy / SaaS",
      tagline: "Editable AE project files & tutorials for professional video editors",
      website: "https://earnedits.com/",
      websiteDisplay: "earnedits.com",
      previewVideo: "/videos/reel-3.mp4",
      badge: "Creative Partner",
      about: "EarnEdits is a platform built for video editors and content creators who want to improve their editing skills and create professional-quality videos in less time. It provides a growing library of fully editable After Effects project files, step-by-step tutorials, and creative resources across multiple editing styles, including storytelling, retro edits, motion graphics, SaaS animations, and viral content.",
      goal: "Help editors spend less time building projects from scratch and more time creating.",
      howCastlyHelped: "We collaborated with EarnEdits to create engaging short-form video content that showcases its creative offerings and communicates its value to video editors. Our focus was on translating its products and ideas into visually compelling videos through creative editing, storytelling, motion graphics, and polished visual execution. We helped bring its content to life with an emphasis on capturing attention and making complex creative offerings easier to understand.",
      approach: [
        {
          title: "Strong Hooks",
          desc: "Creating openings that immediately capture attention."
        },
        {
          title: "Storytelling",
          desc: "Presenting ideas in a way that keeps viewers interested."
        },
        {
          title: "Visual Execution",
          desc: "Using motion graphics, transitions, sound design, and creative editing to create a polished viewing experience."
        }
      ],
      approachSummary: "Our goal was to make EarnEdits' content as creative and engaging as the editing resources it offers.",
      workLinks: [
        {
          label: "Project 01",
          url: "https://www.instagram.com/reel/DZme2aQOz2M/"
        },
        {
          label: "Project 02",
          url: "https://www.instagram.com/reel/DZccgRsAPo8/"
        }
      ]
    },
    {
      id: "dylan-pondir",
      index: "02",
      client: "DYLAN PONDIR",
      category: "Client Project | Personal Brand & Short-Form Content",
      industry: "Entrepreneurship & Modern Marketing",
      tagline: "Personal brand content engine on business growth, e-commerce, advertising, and AI",
      previewVideo: "/videos/reel-1.mp4",
      badge: "Personal Brand Engine",
      about: "Dylan Pondir is an entrepreneur and marketing professional who shares insights on business growth, e-commerce, digital marketing, advertising, and AI. Through his personal brand, he focuses on sharing knowledge, ideas, and strategies that help business owners understand modern marketing and grow their businesses.",
      howCastlyHelped: "We collaborated with Dylan Pondir to bring his personal brand content to life through creative short-form video editing and visual storytelling. Our focus was to transform his ideas and expertise into engaging videos that communicate his message clearly while keeping viewers interested. We combined creative editing, motion graphics, sound design, and visual elements to give his content a polished and engaging presentation.",
      approach: [
        {
          title: "Attention",
          desc: "Strong hooks and engaging openings to capture viewers."
        },
        {
          title: "Clarity",
          desc: "Presenting business and marketing insights in an easy-to-follow format."
        },
        {
          title: "Visual Storytelling",
          desc: "Using dynamic editing, motion graphics, and sound design to make the content more engaging."
        }
      ],
      approachSummary: "Our goal was to help turn Dylan's knowledge and ideas into content that people would want to watch, learn from, and share.",
      workLinks: [
        {
          label: "Reel 01",
          url: "https://www.instagram.com/reel/DbBtlOBiybP/?cplk=aGhqZ2RndHowYWhy"
        },
        {
          label: "Reel 02",
          url: "https://www.instagram.com/reel/Da3cWt3ihcS/?xtok=YXowN25pNDNkY3p1"
        },
        {
          label: "Reel 03",
          url: "https://www.instagram.com/reel/DaBRLC_pWQ_/?xtok=MTlpN3JvYnY2czkwMw=="
        }
      ]
    },
    {
      id: "asylum-decoded",
      index: "03",
      client: "ASYLUM DECODED",
      category: "Client Project | Content Editing & Creative Production",
      industry: "Global Media & Brand Distribution",
      tagline: "High-retention storytelling across technology, business, psychology, and automotive",
      badge: "933K+ Viral Case Study",
      previewVideo: "/videos/reel-6.mp4",
      metrics: [
        { value: "933K", label: "NVIDIA & Hugging Face Story" },
        { value: "156K", label: "Porsche Automotive Story" },
        { value: "1M+", label: "Total Collaboration Reach" }
      ],
      about: "Asylum Decoded provides content and distribution services for global brands. They specialize in content strategy, creative production, video editing, and content clipping, helping brands strengthen their online presence and achieve organic growth. Their content covers a wide range of subjects, including technology, business, marketing, psychology, automotive, and trending industry stories.",
      howCastlyHelped: "We collaborated with Asylum Decoded to produce engaging short-form video content designed to capture attention and keep audiences watching. Our work focused on transforming ideas and industry stories into visually compelling videos through creative editing, motion graphics, sound design, and storytelling. From technology news and business acquisitions to automotive stories and marketing insights, we helped bring their content to life with distinctive visual execution.",
      approach: [
        {
          title: "1. Storytelling",
          desc: "Turning business news, industry updates, and complex topics into interesting, easy-to-follow stories."
        },
        {
          title: "2. Visual Execution",
          desc: "Using creative editing, motion graphics, cinematic visuals, sound design, and transitions to make every video visually engaging."
        },
        {
          title: "3. Audience Retention",
          desc: "Building strong openings, maintaining visual interest, and creating a smooth flow that encourages viewers to keep watching."
        }
      ],
      impact: "933K views. One creative collaboration. Stories worth watching.",
      impactDesc: "Our collaboration helped bring some of Asylum Decoded's strongest-performing content to life, with selected videos reaching hundreds of thousands of views.",
      workLinks: [
        {
          label: "NVIDIA Story (933K Views)",
          url: "https://www.instagram.com/reel/DdRIGIKMfzD/?obrf=Zm41czM3NzViY3Zi",
          highlight: true
        },
        {
          label: "Porsche Story (156K Views)",
          url: "https://www.instagram.com/reel/DdazhmWsDem/?dlrf=cjFmM216M3gybnk=",
          highlight: true
        },
        {
          label: "Tech Analysis Reel",
          url: "https://www.instagram.com/reel/DetY5p4M1RR/?obrf=eGhqN3Vnc3hrZWdp"
        },
        {
          label: "Acquisitions Reel",
          url: "https://www.instagram.com/reel/DctKS7nTPE2/?obrf=MWxkZjc0dWoyeGRseQ=="
        },
        {
          label: "Brand Breakdown Reel",
          url: "https://www.instagram.com/reel/Dcd6n1RsQWi/?vrfl=Ymx0cHR4YnhrYjM4"
        }
      ]
    }
  ];

  return (
    <section className="work-section" id="work">
      <div className="work-header reveal">
        <span className="section-label">Selected Client Case Studies</span>
        <h2 className="section-title">Client Work & Case Studies</h2>
        <p className="work-subtitle">
          Explore our creative collaborations with industry platforms, personal brands, and media agencies — translating complex ideas into high-retention, viral short-form video.
        </p>
      </div>

      <div className="case-studies-list">
        {clientProjects.map((project) => (
          <article key={project.id} className="case-study-card reveal">
            {/* Visual Media Column */}
            <div className="case-study-visual-col">
              <CaseStudyVideoCard project={project} onPlayVideo={onPlayVideo} />
            </div>

            {/* Narrative Content Column */}
            <div className="case-study-content-col">
              {/* Header */}
              <div className="case-study-meta-header">
                <div className="case-study-meta-top">
                  <span className="case-study-number">{project.index} &mdash; 03</span>
                  <span className="case-study-category">{project.category}</span>
                </div>

                <div className="case-study-name-row">
                  <h3 className="case-study-client-title">{project.client}</h3>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study-website-link"
                      data-cursor="open"
                    >
                      <span>{project.websiteDisplay}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="case-study-tagline">{project.tagline}</p>
              </div>

              {/* Metrics (if available, e.g. Asylum Decoded) */}
              {project.metrics && (
                <div className="case-study-metrics-grid">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="metric-box">
                      <div className="metric-val-row">
                        <TrendingUp size={15} className="metric-icon" />
                        <span className="metric-value">{metric.value}</span>
                      </div>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Narrative Sections */}
              <div className="case-study-narrative-sections">
                <div className="narrative-block">
                  <h4 className="narrative-title">About the Client</h4>
                  <p className="narrative-text">{project.about}</p>
                  {project.goal && (
                    <p className="narrative-subtext">
                      <strong>Core Goal:</strong> {project.goal}
                    </p>
                  )}
                </div>

                <div className="narrative-block">
                  <h4 className="narrative-title">How Castly Helped</h4>
                  <p className="narrative-text">{project.howCastlyHelped}</p>
                </div>
              </div>

              {/* Approach Pillars */}
              <div className="case-study-approach-wrap">
                <h4 className="narrative-title">Our Approach</h4>
                <div className="approach-grid">
                  {project.approach.map((item, aIdx) => (
                    <div key={aIdx} className="approach-pill-card">
                      <div className="approach-card-top">
                        <CheckCircle2 size={14} className="approach-check" />
                        <h5 className="approach-card-title">{item.title}</h5>
                      </div>
                      <p className="approach-card-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
                {project.approachSummary && (
                  <p className="approach-summary-text">{project.approachSummary}</p>
                )}
              </div>

              {/* Impact Callout (for Asylum Decoded) */}
              {project.impact && (
                <div className="case-study-impact-box">
                  <Sparkles size={16} className="impact-sparkle" />
                  <div className="impact-text-content">
                    <p className="impact-quote">“{project.impact}”</p>
                    <p className="impact-sub">{project.impactDesc}</p>
                  </div>
                </div>
              )}

              {/* The Work / Instagram Reels Links */}
              <div className="case-study-work-links-wrap">
                <div className="work-links-header">
                  <InstagramIcon size={15} />
                  <span>The Work &bull; Live Instagram Reels</span>
                </div>
                <div className="work-links-chips">
                  {project.workLinks.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`work-link-chip ${link.highlight ? 'highlight' : ''}`}
                      data-cursor="open"
                    >
                      <span className="chip-label">{link.label}</span>
                      <ExternalLink size={13} className="chip-icon" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
