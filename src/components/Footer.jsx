import wordmarkWhite from '/assets/techvision-wordmark-white.png';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="company" className="tv-footer">
      <div className="tv-section tv-footer__inner">
        <div className="tv-footer__top">
          <img src={wordmarkWhite} alt="techvision" className="tv-footer__wm" />
          <p className="tv-footer__claim">
            We build the kind of software that&nbsp;can't go down.
          </p>
        </div>

        <div className="tv-footer__cols">
          <div className="tv-footer__col">
            <div className="tv-eyebrow tv-footer__eyebrow"><span aria-hidden="true">▾</span>Work</div>
            <ul>
              <li><a href="#work">Power Sector ERP</a></li>
              <li><a href="#work">Binimoy IDTP</a></li>
              <li><a href="#work">DNCC citizen app</a></li>
              <li><a href="#work">Proxy voting on chain</a></li>
            </ul>
          </div>
          <div className="tv-footer__col">
            <div className="tv-eyebrow tv-footer__eyebrow"><span aria-hidden="true">▾</span>What we do</div>
            <ul>
              <li><a href="#do">Enterprise platforms</a></li>
              <li><a href="#do">National infrastructure</a></li>
              <li><a href="#do">Banking compliance</a></li>
              <li><a href="#do">Blockchain &amp; settlement</a></li>
              <li><a href="#do">Clinical AI</a></li>
            </ul>
          </div>
          <div className="tv-footer__col">
            <div className="tv-eyebrow tv-footer__eyebrow"><span aria-hidden="true">▾</span>Company</div>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Writing</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press kit</a></li>
            </ul>
          </div>
          <div className="tv-footer__col">
            <div className="tv-eyebrow tv-footer__eyebrow"><span aria-hidden="true">▾</span>Reach us</div>
            <ul>
              <li><a href="mailto:hello@techvision.com.bd">hello@techvision.com.bd</a></li>
              <li><span className="tv-mono">+880 2 — 24/7 on-call</span></li>
              <li>House 42, Road 11, Banani, Dhaka</li>
              <li>By appointment · Midtown, NYC</li>
            </ul>
          </div>
        </div>

        <div className="tv-footer__base">
          <span className="tv-mono">© {year} TechVision Ltd</span>
          <span className="tv-mono"><span className="tv-status-dot tv-status-dot--ok" /> All systems · 99.997%</span>
          <span className="tv-mono">Dhaka · UTC+6 · awake</span>
        </div>
      </div>
    </footer>
  );
}
