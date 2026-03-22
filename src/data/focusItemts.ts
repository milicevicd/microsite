export interface FocusItem {
  id: string;
  title: string;
  description: string;
  stat: string;
}

export const focusItems: FocusItem[] = [
  {
    id: "strategy-insights",
    title: "Strategy & Insights",
    description: "Data-driven strategies that align with your business objectives and market opportunities.",
    stat: "Audience clarity",
  },
  {
    id: "digital-experience",
    title: "Digital Experience",
    description: "Seamless user experiences across all digital touchpoints, from web to mobile applications.",
    stat: "Cross-device quality",
  },
  {
    id: "growth-optimization",
    title: "Growth & Optimization",
    description: "Performance-driven solutions that maximize ROI and accelerate business growth.",
    stat: "Measured momentum",
  },
];