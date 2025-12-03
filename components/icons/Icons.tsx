import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const iconProps: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  shapeRendering: "crispEdges",
};

export const SoccerBallIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    {/* contorno circular pixelado */}
    <path
      d="M9 2H15V4H9V2Z
         M5 4H9V6H5V4Z
         M15 4H19V6H15V4Z
         M3 6H5V10H3V6Z
         M19 6H21V10H19V6Z
         M5 14H3V18H5V14Z
         M19 14H21V18H19V14Z
         M5 18H9V20H5V18Z
         M15 18H19V20H15V18Z
         M9 20H15V22H9V20Z"
      fill="currentColor"
      stroke="none"
    />

    {/* pentágono central (preto para contraste) */}
    <path
      d="M10 9H14V11H10V9Z
         M9 11H15V13H9V11Z
         M10 13H14V15H10V13Z"
      fill="#000"
      stroke="none"
    />

    {/* hexágonos laterais (usando currentColor com leve transparência) */}
    <path
      d="M7 8H9V10H7V8Z
         M15 8H17V10H15V8Z
         M7 14H9V16H7V14Z
         M15 14H17V16H15V14Z
         M11 6H13V8H11V6Z
         M11 16H13V18H11V16Z"
      fill="currentColor"
      opacity="0.7"
      stroke="none"
    />
  </svg>
);


export const DashboardIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor"><path d="M4 4h6v8H4V4zm10 0h6v6h-6V4zm0 10h6v6h-6v-6zM4 16h6v4H4v-4z"></path></svg>
);

export const InfoIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor">
    <path d="M8 2h8v2H8V2z M4 4h4v2H4V4zm12 0h4v2h-4V4z M2 8h2v8H2V8zm18 0h2v8h-2V8z M4 18h4v2H4v-2zm12 0h4v2h-4v-2z M8 20h8v2H8v-2z"></path>
    <path d="M11 11h2v6h-2v-6zm0-4h2v2h-2V7z"></path>
  </svg>
);

export const CreditsIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor">
    <path d="M8 4h8v2H8V4zM4 8h2v8H4V8zm14 0h2v8h-2V8zM8 18h8v2H8v-2z"></path>
    <path d="M11 7h2v10h-2V7z M7 11h10v2H7v-2z"></path>
  </svg>
);

export const HistoryIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 20 a8 8 0 1 0 0 -16 a8 8 0 1 0 0 16" fill="none" />
    <path d="M12 6v6h6" strokeWidth="2" />
    <path d="M2 12h4m-2-2v4" />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor"><path d="M6 2h12v6h-2V4H8v4H6V2zm14 8h-4v4h-2v-4H6v4H4v-4H0v-2h2v-2h2v2h16v2h2v2zM8 14h8v8H8v-8z"></path></svg>
);

export const ChatIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor"><path d="M2 2h20v14H8v4H6v-4H2V2z"></path></svg>
);

export const ImageIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor"><path d="M2 2h20v20H2V2zm2 2v16h16V4H4zm4 4h2v2H8V8zm10 8l-4-4-4 4H6v-4l4-4 6 6v2h2z"></path></svg>
);

export const RestartIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} strokeWidth="2" fill="none">
    <path d="M6 4h12v4h-4M18 20H6v-4h4" />
    <path d="M4 10V6h4m12 8v4h-4" />
    <path d="M18 10a6 6 0 0 0 -6-6h-2m-2 12a6 6 0 0 0 6 6h2" />
  </svg>
);

export const HomeIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor">
    <path d="M2 10l10-8 10 8v10H2V10zm2 0v8h16v-8l-8-6.4L4 10z"></path>
    <path d="M10 12h4v6h-4v-6z"></path>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor">
    <path d="M10 0h4v4h-4V0zm10 4h4v4h-4V4zM0 10h4v4H0v-4zm20 10h4v4h-4v-4zM4 4h4v4H4V4zm-4 16h4v4H0v-4zm16-4h4v4h-4v-4zM8 10h8v4H8v-4z"></path>
  </svg>
);


export const DownloadIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor"><path d="M4 18h16v2H4v-2zM12 4l-6 6h4v6h4v-6h4l-6-6z"></path></svg>
);

export const SendIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} stroke="none" fill="currentColor"><path d="M2 3l20 9-20 9 4-9-4-9zM2 12h10"></path></svg>
);

export const BackIcon: React.FC<IconProps> = (props) => (
  <svg {...iconProps} {...props} strokeWidth="2" fill="none"><path d="M10 18l-6-6 6-6M20 12H4"></path></svg>
);