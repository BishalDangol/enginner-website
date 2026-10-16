"use client";

import React from "react";

export default function ProblemSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<section class="home-problem"><div class="line line-horizital top left right"></div><div class="w-layout-blockcontainer container full-h w-container"><div class="home-problem-inner"><div class="home-problem-head"><div class="home-problem-title-wrap"><div class="home-problem-label"><div class="txt txt-font-mono txt-14">PROBLEMS</div></div><div class="home-problem-title"><h2 class="heading h2 tb-h3 mb-h2">Your design tools do what you tell them, nothing more</h2></div></div><div class="home-problem-sub"><div class="txt txt-16">Design software is powerful but passive. It waits for every instruction, gives no advice, and can&#x27;t act on its own, so all the repetitive work stays on you.</div></div></div><div class="home-problem-content"><div class="line line-horizital top left right"></div><div class="home-problem-cms"><div class="home-problem-list"><div data-problem="manual" class="home-problem-item"><div class="home-problem-item-head"><div class="home-problem-item-head-title"><div class="txt txt-font-mono txt-14">Manual</div></div><div class="home-problem-item-head-num"><div class="txt txt-font-mono txt-14">[01]</div></div><div class="line line-dash line-horizital bot left right"></div><div class="home-problem-item-dot"></div></div><div class="home-problem-item-main"><div class="home-problem-item-img"><div class="home-problem-item-img-inner"><div class="embed-ic w-embed"><svg
  width="100%"
  viewBox="0 0 200 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="manual-svg"
>
  <!-- Dashed top connections -->
  <path
    class="manual-dash manual-dash-top"
    d="
      M183.574 121.794L99.787 73.1054
      M16 121.794L99.787 73.1054
      M99.787 39.5125V73.1054
      M124.5 55.5L99.787 39.5125L74.5 55.5
    "
    stroke="#B3B3AF"
    stroke-dasharray="0.93 2.8 9.35 2.8"
  />

  <!-- Database top ellipse -->
  <ellipse
    class="manual-draw manual-database-top"
    cx="99.0227"
    cy="18.0954"
    rx="24.4748"
    ry="14.0954"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Database inner curve -->
  <path
    class="manual-draw manual-database-inner"
    d="
      M123.498 18.0954
      C123.498 19.9583 122.87 21.7368 121.73 23.3646
      C118.106 28.539 109.305 32.1907 99.0227 32.1907
      C88.7404 32.1907 79.939 28.539 76.3154 23.3646
      C75.1754 21.7368 74.5479 19.9583 74.5479 18.0954
    "
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Upper left column -->
  <path
    class="manual-draw manual-column-upper-left"
    d="M74.5479 18.0954V94.701"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Upper right column -->
  <path
    class="manual-draw manual-column-upper-right"
    d="M123.498 18.0954V94.701"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Middle left dashed line -->
  <line
    class="manual-dash manual-dash-left"
    x1="74.5679"
    y1="97.1006"
    x2="74.5679"
    y2="151.809"
    stroke="#B3B3AF"
    stroke-dasharray="0.93 2.8 9.35 2.8"
  />

  <!-- Middle right dashed line -->
  <line
    class="manual-dash manual-dash-right"
    x1="123.518"
    y1="97.1006"
    x2="123.518"
    y2="153.729"
    stroke="#B3B3AF"
    stroke-dasharray="0.93 2.8 9.35 2.8"
  />

  <!-- Lower left column -->
  <path
    class="manual-draw manual-column-lower-left"
    d="M74.5479 157.168V180.905"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Lower right column -->
  <path
    class="manual-draw manual-column-lower-right"
    d="M123.498 158.128V180.905"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Database bottom curve -->
  <path
    class="manual-draw manual-database-bottom"
    d="
      M123.498 180.905
      C123.498 188.689 112.54 195 99.0227 195
      C85.5056 195 74.5479 188.689 74.5479 180.905
    "
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Package center vertical -->
  <path
    class="manual-draw manual-package-center"
    d="M99.787 140.494V171.817"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Package top left -->
  <path
    class="manual-draw manual-package-top-left"
    d="M99.787 140.494L16 90.4708"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Package top right -->
  <path
    class="manual-draw manual-package-top-right"
    d="M99.787 140.494L183.574 90.4708"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Package upper left outer edge -->
  <path
    class="manual-draw manual-package-upper-left"
    d="M16 90.4708C16.254 90.6224 47.2614 71.7089 74.539 55.0002"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Package upper right outer edge -->
  <path
    class="manual-draw manual-package-upper-right"
    d="M123.5 53.9346L183.574 90.4708"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Package right side -->
  <path
    class="manual-draw manual-package-right-side"
    d="
      M183.574 90.4708
      V121.794
      L160.865 135.351
      L99.787 171.817
    "
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Package left side -->
  <path
    class="manual-draw manual-package-left-side"
    d="
      M99.787 171.817
      L38.7086 135.351
      L16 121.794
      V90.4708
    "
    stroke="currentColor"
    stroke-width="1.5"
  />
</svg></div></div><div class="home-problem-item-plus left top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus right top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot left"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot right"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div></div><div class="home-problem-item-content"><div class="home-problem-item-title-wrap"><div class="home-problem-item-title"><div class="heading h5 tb-h6 mb-h4">Every <br/>change is <br/>on you</div></div><div class="home-problem-item-sub-wrap"><div class="home-problem-item-sub"><div class="txt txt-16 fw-nomal">You make each edit by hand, one at a time, even the ones you&#x27;ve done a hundred times before.</div></div></div></div><div class="line line-dash line-horizital top left right"></div></div></div><div class="line line-horizital bot left right"></div></div><div data-problem="disjointed" class="home-problem-item"><div class="line line-vertical left top"></div><div class="home-problem-item-head"><div class="home-problem-item-head-title"><div class="txt txt-font-mono txt-14">Disjointed</div></div><div class="home-problem-item-head-num"><div class="txt txt-font-mono txt-14">[02]</div></div><div class="line line-dash line-horizital bot left right"></div><div class="home-problem-item-dot"></div></div><div class="home-problem-item-main"><div class="home-problem-item-img"><div class="home-problem-item-img-inner"><div class="embed-ic w-embed"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  viewBox="0 0 200 200"
  fill="none"
  class="automation-svg"
>
  <defs>
    <!-- Dashed line reveal mask -->
    <mask
      id="automation-dash-mask"
      maskUnits="userSpaceOnUse"
      x="20"
      y="25"
      width="160"
      height="140"
    >
      <path
        class="automation-mask-draw"
        d="
          M170.702 154.097L99.9215 113.508
          M29.5215 154.097L99.9215 113.508
          M99.9215 113.508V32.7083
          M122.395 45.9027L99.9215 32.7083L77.5343 45.9027
        "
        fill="none"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </mask>
  </defs>

  <!-- Dashed connections -->
  <path
    class="automation-dash"
    d="
      M170.702 154.097L99.9215 113.508
      M29.5215 154.097L99.9215 113.508
      M99.9215 113.508V32.7083
      M122.395 45.9027L99.9215 32.7083L77.5343 45.9027
    "
    stroke="#B3B3AF"
    stroke-dasharray="0.93 2.8 9.35 2.8"
    mask="url(#automation-dash-mask)"
  />

  <!-- Top circle -->
  <ellipse
    class="automation-draw automation-circle"
    cx="100"
    cy="32"
    rx="27.25"
    ry="26.25"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Left top edge -->
  <path
    class="automation-draw automation-left-top"
    d="M77.083 45.9028L29.5215 73.3805"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Left vertical edge -->
  <path
    class="automation-draw automation-left-side"
    d="M29.5215 73.3805V154.636"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Left bottom edge -->
  <path
    class="automation-draw automation-left-bottom"
    d="M29.5215 154.636L99.9215 195"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Right top edge -->
  <path
    class="automation-draw automation-right-top"
    d="M122.883 45.9028L170.702 73.3805"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Right vertical edge -->
  <path
    class="automation-draw automation-right-side"
    d="M170.702 73.3805V154.636"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Right bottom edge -->
  <path
    class="automation-draw automation-right-bottom"
    d="M170.702 154.636L99.9215 195"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Top left diagonal -->
  <path
    class="automation-draw automation-box-top-left"
    d="M99.9215 114.273L29.5215 73.3805"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Top right diagonal -->
  <path
    class="automation-draw automation-box-top-right"
    d="M99.9215 114.273L170.702 73.3805"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Center vertical line -->
  <path
    class="automation-draw automation-center-line"
    d="M99.9215 114.273V195"
    stroke="currentColor"
    stroke-width="1.5"
  />
</svg></div></div><div class="home-problem-item-plus left top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus right top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot left"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot right"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div></div><div class="home-problem-item-content"><div class="home-problem-item-title-wrap"><div class="home-problem-item-title"><div class="heading h5 tb-h6 mb-h4">AI help <br/>sits outside <br/>your model</div></div><div class="home-problem-item-sub-wrap"><div class="home-problem-item-sub"><div class="txt txt-16 fw-nomal">Generic AI tools can&#x27;t see your project, so you keep copying, pasting, and re-explaining the same context.</div></div></div></div><div class="line line-dash line-horizital top left right"></div></div></div><div class="line line-horizital bot left right"></div></div><div data-problem="blind" class="home-problem-item"><div class="line line-vertical left top"></div><div class="home-problem-item-head"><div class="home-problem-item-head-title"><div class="txt txt-font-mono txt-14">BLIND</div></div><div class="home-problem-item-head-num"><div class="txt txt-font-mono txt-14">[03]</div></div><div class="line line-dash line-horizital bot left right"></div><div class="home-problem-item-dot"></div></div><div class="home-problem-item-main"><div class="home-problem-item-img"><div class="home-problem-item-img-inner"><div class="embed-ic w-embed"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  viewBox="0 0 188 188"
  fill="none"
  class="blind-svg"
>
  <!-- Outer dashed connections -->
  <path
    class="blind-dash blind-dash-outer"
    d="
      M176.115 140.46L93.7784 93.5164
      M11.8848 140.46L93.7784 93.5164
      M93.7784 93.5164V0.540283
    "
    stroke="#B3B3AF"
    stroke-dasharray="0.93 2.8 9.35 2.8"
  />

  <!-- Main circle -->
  <circle
    class="blind-draw blind-circle"
    cx="94"
    cy="94"
    r="93.25"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <!-- Inner dashed cube -->
  <path
    class="blind-dash blind-dash-cube"
    d="
      M93.866 151.264V94.2951
      M44.2988 65.4378L93.866 36.7356
      L143.701 65.4378
      V122.78
      L93.866 151.264
      L44.2988 122.78
      V65.4378
      Z
      M93.866 94.2951L143.701 65.4378
      M93.866 94.2951L44.2988 65.4378
    "
    stroke="#B3B3AF"
    stroke-dasharray="0.93 2.8 9.35 2.8"
  />
</svg></div></div><div class="home-problem-item-plus left top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus right top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot left"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot right"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div></div><div class="home-problem-item-content"><div class="home-problem-item-title-wrap"><div class="home-problem-item-title"><div class="heading h5 tb-h6 mb-h4">Nothing <br/>watches for <br/>problems</div></div><div class="home-problem-item-sub-wrap"><div class="home-problem-item-sub"><div class="txt txt-16 fw-nomal">Issues sit quietly in your model until you happen to spot them, if you spot them at all.</div></div></div></div><div class="line line-dash line-horizital top left right"></div></div></div><div class="line line-horizital bot left right"></div></div><div data-problem="slow" class="home-problem-item"><div class="line line-vertical left top"></div><div class="home-problem-item-head"><div class="home-problem-item-head-title"><div class="txt txt-font-mono txt-14">SLOW</div></div><div class="home-problem-item-head-num"><div class="txt txt-font-mono txt-14">[04]</div></div><div class="line line-dash line-horizital bot left right"></div><div class="home-problem-item-dot"></div></div><div class="home-problem-item-main"><div class="home-problem-item-img"><div class="home-problem-item-img-inner"><div class="embed-ic w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 200 200" fill="none" class="slow-svg">
  <!-- Dashed connections -->
  <path
    class="slow-dash"
    d="
      M13.5 146.5L100.733 94.982
      M100.733 94.982L186.5 146.5
      M100.733 94.982V62.8343
      M38 100L100.733 62.8343L163.5 99.5
      M100.733 33.609V0
      M100.733 33.609L13.5 85.5
      M100.733 33.609L186.5 85
    "
    stroke="#B3B3AF"
    stroke-width="1"
    stroke-dasharray="0.78 2.34 7.81 2.34"
  />

  <!-- Upper left roof -->
  <path class="slow-draw slow-upper-left" d="M100.298 0.878906L14.5264 53.1299" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper right roof -->
  <path class="slow-draw slow-upper-right" d="M100.298 0.878906L186.139 53.0859" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper left side -->
  <path class="slow-draw slow-upper-left-side" d="M14.5264 53.1299L13.75 85.3008" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper right side -->
  <path class="slow-draw slow-upper-right-side" d="M186.139 53.0859L186.843 85.3008" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper left bottom edge -->
  <path class="slow-draw slow-upper-left-bottom" d="M13.75 85.3008L38.1035 99.8418L99.9121 137" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper right bottom edge -->
  <path class="slow-draw slow-upper-right-bottom" d="M186.843 85.3008L163.549 99.209L99.9121 137" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper center left diagonal -->
  <path class="slow-draw slow-upper-center-left" d="M100.296 104.338L14.5264 53.1299" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper center right diagonal -->
  <path class="slow-draw slow-upper-center-right" d="M100.296 104.338L186.139 53.0859" stroke="currentColor" stroke-width="1.5" />

  <!-- Upper center vertical -->
  <path class="slow-draw slow-upper-center-line" d="M99.9121 137L100.296 104.338" stroke="currentColor" stroke-width="1.5" />

  <!-- Lower left top edge -->
  <path class="slow-draw slow-lower-left-top" d="M38.1035 99.8418L13.75 115.786" stroke="currentColor" stroke-width="1.5" />

  <!-- Lower right top edge -->
  <path class="slow-draw slow-lower-right-top" d="M163.549 99.209L186.843 113.98" stroke="currentColor" stroke-width="1.5" />

  <!-- Lower left side -->
  <path class="slow-draw slow-lower-left-side" d="M13.75 115.786V146.674L100 198.356" stroke="currentColor" stroke-width="1.5" />

  <!-- Lower right side -->
  <path class="slow-draw slow-lower-right-side" d="M186.843 113.98V146.674L100 198.356" stroke="currentColor" stroke-width="1.5" />

  <!-- Lower left diagonal -->
  <path class="slow-draw slow-lower-left-diagonal" d="M13.75 115.786L100 166.5" stroke="currentColor" stroke-width="1.5" />

  <!-- Lower right diagonal -->
  <path class="slow-draw slow-lower-right-diagonal" d="M186.843 113.98L100 166.5" stroke="currentColor" stroke-width="1.5" />

  <!-- Lower center vertical -->
  <path class="slow-draw slow-lower-center-line" d="M100 166.5V198.356" stroke="currentColor" stroke-width="1.5" />
</svg></div></div><div class="home-problem-item-plus left top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus right top"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot left"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div><div class="home-problem-item-plus bot right"><div class="embed-ic w-embed"><svg width="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 0V8V12" stroke="currentColor" class="path-vertical"/>
<path d="M12 5.995L4 5.99499L0 5.99499" class="path-horizital" stroke="currentColor"/>
</svg></div></div></div><div class="home-problem-item-content"><div class="home-problem-item-title-wrap"><div class="home-problem-item-title"><div class="heading h5 tb-h6 mb-h4">Small <br/>tasks pile up into <br/>lost days</div></div><div class="home-problem-item-sub-wrap"><div class="home-problem-item-sub"><div class="txt txt-16 fw-nomal">The fiddly work that fills your week is exactly the work software should be doing for you.</div></div></div></div><div class="line line-dash line-horizital top left right"></div></div></div><div class="line line-horizital bot left right"></div></div></div></div><div class="home-problem-pagi"></div></div><div class="line line-horizital bot left right"></div></div></div></section>`,
      }}
    />
  );
}
