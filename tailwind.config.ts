import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#06A56C",
      "primary-hover": "#37BD8D",
      "primary-active": "#06A56C",
      secondary: "#01579B",
      red: "#E93232",
      yellow: "#FFCD1B",
      dark: "#060F42",
      "dark-grey": "#333333",
      soft: "#F4F8FB",
      white: "#FFFFFF",
      "grey-100": "#000000",
      "grey-60": "#666666",
      "grey-40": "#999999",
      "grey-20": "#CCCCCC",
      "grey-10": "#E6E6E6",
    },
    fontSize: {
      "headings-h1-40": [
        "42px",
        {
          lineHeight: "42px",
          fontWeight: "700",
        },
      ],
      "headings-h2-32": [
        "36px",
        {
          lineHeight: "40px",
          fontWeight: "600",
        },
      ],
      "headings-h3-28": [
        "32px",
        {
          lineHeight: "36px",
          fontWeight: "600",
        },
      ],
      "headings-h3-24": [
        "28px",
        {
          lineHeight: "32px",
          fontWeight: "600",
        },
      ],
      "headings-h5-20": [
        "24px",
        {
          lineHeight: "28px",
          fontWeight: "600",
        },
      ],
      "headings-h6-16": [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: "600",
        },
      ],
      "titles-normal-t-24": [
        "24px",
        {
          fontWeight: "500",
          lineHeight: "28px",
        },
      ],
      "titles-normal-t-20": [
        "20px",
        {
          fontWeight: "500",
          lineHeight: "24px",
        },
      ],
      "titles-normal-t-18": [
        "18px",
        {
          fontWeight: "500",
          lineHeight: "20px",
        },
      ],
      "titles-normal-t-16": [
        "16px",
        {
          fontWeight: "500",
          lineHeight: "20px",
        },
      ],
      "titles-normal-t-14": [
        "14px",
        {
          fontWeight: "500",
          lineHeight: "16px",
        },
      ],
      "titles-normal-t-12": [
        "12px",
        {
          fontWeight: "500",
          lineHeight: "16px",
        },
      ],
      "titles-normal-t-10": [
        "10px",
        {
          fontWeight: "500",
          lineHeight: "12px",
        },
      ],
      "titles-strong-t-24": [
        "24px",
        {
          fontWeight: "700",
          lineHeight: "28px",
        },
      ],
      "titles-strong-t-20": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "24px",
        },
      ],
      "titles-strong-t-18": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "24px",
        },
      ],
      "titles-strong-t-16": [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "20px",
        },
      ],
      "titles-strong-t-14": [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "16px",
        },
      ],
      "titles-strong-t-12": [
        "12px",
        {
          fontWeight: "700",
          lineHeight: "16px",
        },
      ],
      "titles-strong-t-10": [
        "10px",
        {
          fontWeight: "700",
          lineHeight: "12px",
        },
      ],
      "body-normal-extra-large-20": [
        "20px",
        {
          fontWeight: "400",
          lineHeight: "28px",
        },
      ],
      "body-normal-large-18": [
        "18px",
        {
          fontWeight: "400",
          lineHeight: "28px",
        },
      ],
      "body-normal-middle-16": [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "24px",
        },
      ],
      "body-normal-medium-14": [
        "14px",
        {
          fontWeight: "400",
          lineHeight: "20px",
        },
      ],
      "body-normal-small-12": [
        "12px",
        {
          fontWeight: "400",
          lineHeight: "16px",
        },
      ],
      "body-normal-small-10": [
        "10px",
        {
          fontWeight: "400",
          lineHeight: "14px",
        },
      ],
      "body-strong-extra-large-20": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "28px",
        },
      ],
      "body-strong-large-18": [
        "18px",
        {
          fontWeight: "700",
          lineHeight: "28px",
        },
      ],
      "body-strong-middle-16": [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "24px",
        },
      ],
      "body-strong-medium-14": [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "20px",
        },
      ],
      "body-strong-small-12": [
        "12px",
        {
          fontWeight: "700",
          lineHeight: "16px",
        },
      ],
      "body-strong-small-10": [
        "10px",
        {
          fontWeight: "700",
          lineHeight: "14px",
        },
      ],
      "label-normal-extra-large-28": [
        "28px",
        {
          fontWeight: "500",
          lineHeight: "24px",
        },
      ],
      "label-normal-extra-large-24": [
        "24px",
        {
          fontWeight: "500",
          lineHeight: "22px",
        },
      ],
      "label-normal-extra-large-20": [
        "20px",
        {
          fontWeight: "500",
          lineHeight: "20px",
        },
      ],
      "label-normal-large-16": [
        "18px",
        {
          fontWeight: "500",
          lineHeight: "16px",
        },
      ],
      "label-normal-medium-14": [
        "14px",
        {
          fontWeight: "500",
          lineHeight: "14px",
        },
      ],
      "label-normal-small-12": [
        "12px",
        {
          fontWeight: "500",
          lineHeight: "12px",
        },
      ],
      "label-normal-extra-small-10": [
        "10px",
        {
          fontWeight: "500",
          lineHeight: "10px",
        },
      ],
      "label-normal-extra-small-8": [
        "10px",
        {
          fontWeight: "500",
          lineHeight: "8px",
        },
      ],
      "label-strong-extra-large-28": [
        "28px",
        {
          fontWeight: "700",
          lineHeight: "24px",
        },
      ],
      "label-strong-extra-large-24": [
        "24px",
        {
          fontWeight: "700",
          lineHeight: "24px",
        },
      ],
      "label-strong-extra-large-20": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "20px",
        },
      ],
      "label-strong-large-16": [
        "18px",
        {
          fontWeight: "700",
          lineHeight: "16px",
        },
      ],
      "label-strong-medium-14": [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "16px",
        },
      ],
      "label-strong-small-12": [
        "12px",
        {
          fontWeight: "700",
          lineHeight: "12px",
        },
      ],
      "label-strong-extra-small-10": [
        "10px",
        {
          fontWeight: "700",
          lineHeight: "10px",
        },
      ],
      "uppercase-extra-large-20": [
        "20px",
        {
          fontWeight: "900",
          lineHeight: "16px",
        },
      ],
      "uppercase-extra-large-16": [
        "16px",
        {
          fontWeight: "900",
          lineHeight: "16px",
        },
      ],
      "uppercase-large-14": [
        "14px",
        {
          fontWeight: "900",
          lineHeight: "14px",
        },
      ],
      "uppercase-medium-12": [
        "12px",
        {
          fontWeight: "900",
          lineHeight: "10px",
        },
      ],
      "uppercase-small-10": [
        "10px",
        {
          fontWeight: "900",
          lineHeight: "8px",
        },
      ],
      "uppercase-extra-small-8": [
        "8px",
        {
          fontWeight: "900",
          lineHeight: "8px",
        },
      ],
      "list-strong-middle-16": [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "28px",
        },
      ],
      "list-strong-medium-14": [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "24px",
        },
      ],
    },
  },
  plugins: [],
};
export default config;
