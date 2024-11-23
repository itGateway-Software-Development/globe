import { ref } from "vue";

const products = ref([
  {
    id: 1,
    type: "Drawing Tablet",
    name: "Deco Pro S",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Mechanical wheel - 1, Virtual wheel - 1, Stylus - Battery Free Stylus Pen, Dimensions - 350.8 x 199.5 x 16.5 mm, Work Area - 9 x 5 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 2,
    type: "Drawing Tablet",
    name: "Deco Pro SW",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Mechanical wheel - 1, Virtual wheel - 1, Wireless trch - Bluetooth v5.0, Working time - >10h, Charging time - ≤2h, Stylus - Battery Free Stylus Pen, Dimensions - 350.8 x 199.5 x 16.5 mm, Work Area - 9 x 5 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 3,
    type: "Drawing Tablet",
    name: "Deco Pro M",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Mechanical wheel - 1, Virtual wheel - 1, Stylus - Battery Free Stylus Pen, Dimensions - 399.7 x 227 x 16.5 mm, Work Area - 11 x 6 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 4,
    type: "Drawing Tablet",
    name: "Deco Pro MW",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Mechanical wheel - 1, Virtual wheel - 1, Wireless trch - Bluetooth v5.0, Working time - >12h, Charging time - ≤2h, Stylus - Battery Free Stylus Pen, Dimensions - 399.7 x 227 x 16.5 mm, Work Area - 11 x 6 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 5,
    type: "Drawing Tablet",
    name: "Deco Pro MW (Gen 2)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Dimensions - 283 x 227.1 x 10.66 mm, Work Area - 9 x 6 inches, Resolution - 5080 LPI, Report Rate - 200 RPS (max), Connectivity - Bluetooth 5.0/Wired, Battery Life - ≥10 hrs, Battery - 3030mAh/3.7V, Stylus - X3 Pro Smart Chip Stylus, Pressure Level - 16K levels, Tilt Recognition - 60°, Port - USB-C",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 6,
    type: "Drawing Tablet",
    name: "Deco Pro LW (Gen 2)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Dimensions - 333 x 258.1 x 10.66 mm, Work Area - 11 x 7 inches, Resolution - 5080 LPI, Report Rate - 200 RPS (max), Connectivity - Bluetooth 5.0/Wired, Battery Life - ≥10 hrs, Battery - 3030mAh/3.7V, Stylus - X3 Pro Smart Chip Stylus, Pressure Level - 16K levels, Tilt Recognition - 60°, Port - USB-C",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 7,
    type: "Drawing Tablet",
    name: "Deco M",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Stylus - X3 Elite Pen, Dimensions - 259.8 x 15.7.8 x 8.8 mm, Work Area - 8 x 5 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 8,
    type: "Drawing Tablet",
    name: "Deco MW",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Stylus - X3 Elite Pen, Wireless trch - Bluetooth v5.0, Working time - >10h, Charging time - ≤2h, Dimensions - 259.8 x 15.7.8 x 8.8 mm, Work Area - 8 x 5 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 9,
    type: "Drawing Tablet",
    name: "Deco L",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Stylus - X3 Elite Pen, Dimensions - 315 x 187 x 8.8 mm, Work Area - 10 x 6 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 10,
    type: "Drawing Tablet",
    name: "Deco LW",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Stylus - X3 Elite Pen, Wireless trch - Bluetooth v5.0, Working time - >10h, Charging time - ≤2h, Dimensions - 315 x 187 x 8.8 mm, Work Area - 10 x 6 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 11,
    type: "Drawing Tablet",
    name: "Deco 01 V2",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Stylus - Battery Free, Dimensions - 13.8 x 8.5 x 0.3 inches, Work Area - 10 x 6.25 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 12,
    type: "Drawing Tablet",
    name: "Deco 640",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Reading Height - 10mm, Tilt - 60°, Pen Pressure Level - 16384, Resolution - 5080 LPI, Report Rate - ≥220RPS, Ports Included - USB-C, Dimensions - 149.96 x 183.34 x 7.7 mm, Work Area - 16cm x 9cm",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 13,
    type: "Drawing Tablet",
    name: "Deco Mini 7",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Resolution - 5080 LPI, Report Rate - 220 RPS (max), Stylus - Battery Free, Dimensions - 260.2 x 162.2 x 9.3 mm, Work Area - 7 x 4.37 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 14,
    type: "Drawing Tablet",
    name: "Deco Mini 7W",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 8 keys, Tilt - 60°, Pen Pressure Level - 8192, Stylus - Battery Free, Wireless tech - USB Receiver, Transmission Distance- 10 m (max), Working time - >10h, Charging time - ≤2h, Dimensions -260.2 x 162.2 x 9.3 mm, Work Area - 7 x 4.37 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 15,
    type: "Drawing Tablet",
    name: "Deco 02",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 6 keys, Roller wheel - 1, Pen Pressure Level - 8192, Stylus - Battery Free, Dimensions -362 x 210 x 9 mm, Work Area - 10 x 5.63 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 16,
    type: "Drawing Tablet",
    name: "Deco 03 Wireless",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 6 keys, Dial wheel - 1, Pen Pressure Level - 8192, Stylus - Battery Free, Wireless system - USB Receiver, Dimensions -354 x 218 x 8 mm, Work Area - 10 x 5.62 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 17,
    type: "Drawing Tablet",
    name: "Deco Fun XS",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Pen Pressure Level - 8192, Report rate - 220 RPS (max), Reading height - 10 mm, Stylus - Battery Free, Dimensions - 182.4 x 134.7 x 10.5 mm, Work Area - 4.8 x 3 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later), Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 18,
    type: "Drawing Tablet",
    name: "Deco Fun S",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Pen Pressure Level - 8192, Tilt - 60°, Report rate - 220 RPS (max), Reading height - 10 mm, Stylus - Battery Free, Dimensions - 210.5 x 159.8 x 12.9 mm, Work Area - 6.3 x 4 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later), Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 19,
    type: "Drawing Tablet",
    name: "Deco Fun L",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Pen Pressure Level - 8192, Tilt - 60°, Report rate - 220 RPS (max), Reading height - 10 mm, Stylus - Battery Free, Dimensions - 315 x 222.9 x 12.5 mm, Work Area - 10 x 6.27 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later), Android 6.0 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 20,
    type: "Drawing Tablet",
    name: "Star G430s",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Pen Pressure Level - 8192, Report rate - 266 RPS, Reading height - 10 mm, Stylus - Battery Free, Dimensions - 130 x 107 x 2 mm, Work Area - 4 x 3 inches",
    com: "Compatibility - Window 7 (or later), Linux, MacOS X 10.10 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 21,
    type: "Drawing Tablet",
    name: "Star G440",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Pen Pressure Level - 8192, Report rate - 266 RPS, Reading height - 10 mm, Stylus - Battery Free, Dimensions - 190 x 107 x 2 mm, Work Area - 6 x 4 inches",
    com: "Compatibility - Window 7 (or later), Linux, MacOS X 10.10 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 22,
    type: "Drawing Tablet",
    name: "Star G960s Plus",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 4 keys, Pen Pressure Level - 8192, Tilt - 60°, Report Rate - 220 RPS (max), Reading height - 10 mm, Stylus - Battery Free with digital eraser, Dimensions - 319.5 x 209.5 x 10 mm, Work Area - 9 x 6 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 23,
    type: "Drawing Tablet",
    name: "Star G960s",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 4 keys, Pen Pressure Level - 8192, Tilt - 60°, Report Rate - 220 RPS (max), Reading height - 10 mm, Stylus - Battery Free, Dimensions - 319.5 x 209.5 x 10 mm, Work Area - 9 x 6 inches",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 24,
    type: "Drawing Tablet",
    name: "Star 06 Wireless",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut Keys - 6 keys, Tilt - 60°, Resolution - 5080 LI, Pen Pressure Level - 8192, Dimensions - 354 x 220 x 9.9 mm, Work Area - 10 x 6 inches, Report rate - 250 RPS (max), Reading height - 10 mm, Stylus - Battery Free, Wireless - Yes (Up to 16 Hours)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 25,
    type: "Drawing Display",
    name: "Artist 10 (2nd Gen)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortxut Keys - 6 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Stylus - X3 Elite, Full Lamination - Yes (High Transparency), Dimensions - 299 x 173.3 x 12.9 mm, Work Area - 10.1 inches (224.49 x 126.7 mm), Display Resolution - 1920 x 1080 px [Full HD]",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later), Andriod (USB3.1 DP1.2)  ",
    color: "Color Gamut - 85% NTSC, 120% sRGB, 88% Adobe RGB",
    img: require("@/assets/images/xp_pen/artist10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/deco_pro.jpg"),
  },
  {
    id: 26,
    type: "Drawing Display",
    name: "Artist 12 (2nd Gen)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortxut Keys - 8 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Stylus - X3 Elite, Full Lamination - Yes (High Transparency), Dimensions - 346.20 x 209 x 12 mm, Work Area - 11.9 inches (263.23 x 148.07 mm), Display Resolution - 1920 x 1080 px [Full HD]",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later), Andriod (USB3.1 DP1.2)  ",
    color: "Color Gamut - 90% NTSC, 127% sRGB, 94% Adobe RGB",
    img: require("@/assets/images/xp_pen/5.jpg"),
    hoverimg: require("@/assets/images/xp_pen/6.jpg"),
  },
  {
    id: 27,
    type: "Drawing Display",
    name: "Artist 13 (2nd Gen)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortxut Keys - 9 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Stylus - X3 Elite, Full Lamination - Yes (High Transparency), Dimensions - 378 x 255 x 11.99 mm, Work Area - 13.3 inches (293.76 x 165.24 mm), Display Resolution - 1920 x 1080 px [Full HD]",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later), Andriod (USB3.1 DP1.2)  ",
    color: "Color Gamut - 92% NTSC, 130% sRGB, 96% Adobe RGB",
    img: require("@/assets/images/xp_pen/8.jpg"),
    hoverimg: require("@/assets/images/xp_pen/7.jpg"),
  },
  {
    id: 28,
    type: "Drawing Display",
    name: "Artist 16 (2nd Gen)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortxut Keys - 10 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Stylus - X3 Elite, Full Lamination - Yes (High Transparency), Dimensions - 434 x 255.8 x 12.89 mm, Work Area - 15.4 inches (340.99 x 148.07 mm), Display Resolution - 1920 x 1080 px [Full HD]",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later), Andriod (USB3.1 DP1.2)  ",
    color: "Color Gamut - 90% NTSC, 127% sRGB, 94% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 29,
    type: "Drawing Display",
    name: "Artist 22 (2nd Gen)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Mechanical Buttons - 5, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Stylus - Battery-Free, Adjustable Stand - 16° to 90°, Full Lamination - Yes (High Transparency), Dimensions - 538 x 332 x 25.8 mm, Work Area - 21.5 inches (476.064 x 267.786 mm), Display Resolution - 1920 x 1080 px [Full HD]",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color: "Color Gamut - 86% NTSC, 122% sRGB, 90% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 30,
    type: "Drawing Display",
    name: "Artist 12 Pro",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut keys - 8 keys, Tilt - 60°, Resolution - 5080 LPI, Pen Pressure Level - 8192, Dial wheel - 1, Full Lamination - Yes (High Transparency), Dimensions - 351.52 x 225.38 x 12.9 mm, Work Area - 11.6 inches (256.32 x 144.18 mm), Display Resolution - 1920 x 1080 px (Full HD), ",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut - 72% NTSC, 100% sRGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 31,
    type: "Drawing Display",
    name: "Artist 13.3 Pro",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut keys - 8 keys, Tilt - 60°, Resolution - 5080 LPI, Pen Pressure Level - 8192, Dial wheel - 1, Full Lamination - Yes (High Transparency), Dimensions - 390.4 x 249.98 x 12.9 mm, Work Area - 13.3 inches (293.76 x 165.24 mm), Display Resolution - 1920 x 1080 px (Full HD), ",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut - 88% NTSC, 123% sRGB, 91% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 32,
    type: "Drawing Display",
    name: "Artist 15.6 Pro",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut keys - 8 keys, Tilt - 60°, Resolution - 5080 LPI, Pen Pressure Level - 8192, Dial wheel - 1, Full Lamination - Yes (High Transparency), Dimensions - 443 x 280 x 12.6 mm, Work Area - 15.6 inches (344.16 x 193.59 mm), Display Resolution - 1920 x 1080 px (Full HD), ",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut - 88% NTSC, 120% sRGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 33,
    type: "Drawing Display",
    name: "Artist Pro 14 (Gen 2)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 16384, Stylus - X3 Pro Smart Chip Stylus, Full Lamination - Yes (High Transparency), Dimensions - 359.30 X 268.57 X 19.31 mm, Work Area - 298.94 X 186.84 mm, Display Resolution - 1920 x 1200, Reading Height - 10 mm, Report Rate - 200 RPS (max)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut Coverage Ratio (typical) - 99% sRGB, 85% Adobe RGB",
    color2: "Color Gamut Area Ratio (typical) - 123% sRGB, 91% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 34,
    type: "Drawing Display",
    name: "Artist Pro 16 (Gen 2)",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 16384, Stylus - X3 Pro Smart Chip Stylus, Full Lamination - Yes (High Transparency), Dimensions - 405.11 X 291.37 X 20.23 mm, Work Area - 344.68 X 215.42 mm, Display Resolution - 2560 x 1600, Reading Height - 10 mm, Report Rate - 200 RPS (max)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1:
      "Color Gamut Coverage Ratio (typical) - 99% sRGB, 97% Adobe RGB, 99% DCI-P3",
    color2:
      "Color Gamut Area Ratio (typical) - 159% sRGB, 118% Adobe RGB, 117% DCI-P3",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 35,
    type: "Drawing Display",
    name: "Artist Pro 16",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut keys - 8 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Virtual wheel - 1, Mechanic wheel -1, Stylus - X3 Elite Plus, Full Lamination - Yes (High Transparency), Dimensions - 443.27 x 256.45x 9 mm, Work Area - 15.4 inches (340.99 x 191.81 mm), Display Resolution - 1920 x 1080 px (FHD)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut - 94% NTSC, 133% sRGB, 99% Adobe RGB",

    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 36,
    type: "Drawing Display",
    name: "Artist 22R Pro EU",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut keys - 20 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Dial wheel - 2, Full Lamination - Yes (High Transparency), Dimensions - 570 x 334.8 x 44.8 mm, Work Area - 21.5 inches (476.064 x 267.786 mm), Display Resolution - 1920 x 1080 px (FHD)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut - 88% NTSC, 120% sRGB, 90% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 37,
    type: "Drawing Display",
    name: "Artist 24 Pro EU",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut keys - 20 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Dial wheel - 2, Full Lamination - Yes (High Transparency), Dimensions - 632 x 370 x 44.8 mm, Work Area - 23.8 inches (526.85 x 296.35 mm), Display Resolution - 2560 x 1440 px (2K QHD)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut - 90% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 38,
    type: "Drawing Display",
    name: "Artist 22 Plus",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 16384, Stylus - X3 Pro Smart Chip Stylus, Full Lamination - Yes (High Transparency), Dimensions - 547 x 364.67 x 33.4 mm, Work Area - 476.06 x 267.79 mm, Display Resolution - 2560 x 1600, Reading Height - 10 mm, Report Rate - 200 RPS (max)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color Gamut Coverage Ratio (typical) - 99% sRGB, 91% Adobe RGB",
    color2: "Color Gamut Area Ratio (typical) - 130% sRGB, 103% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 39,
    type: "Drawing Display",
    name: "Innovator 16",
    price: "400",
    stock: "20",
    warrenty: "3",
    spec: "Shortcut keys - 8 keys, Tilt - 60°, Resolution - 5080LPI, Pen Pressure Level - 8192, Virtual wheel -1, Mechanic wheel -1, Stylus - Battery Free Stylus Pen, Dimensions - 443.27 x 256.45 x 9 mm, Work Area - 15.6 inches (344.16 x 193.59 mm), Display Resolution - 1920 x 1080 px (FHD)",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later),Andriod (USB3.1, DP1.2)",
    color1: "Color Gamut - 88% NTSC, 125% sRGB, 92% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
  {
    id: 40,
    type: "Drawing Display",
    name: "Magic Drawing Pad",
    price: "400",
    stock: "20",
    warrenty: "3",
    cpu: "CPU - Octa-core Mt8771 (2 x A76 2.4GHz, 6 x A55 2.0 GHz)",
    spec: "RAM - 8GB, ROM -256GB, Micro SD - Up to 512GB expandable, Battery - 8000mAh, Rear Camera -13MP, Front Camera -8MP, Bluetooth - Bluetooth 5.1, USB - Type-C, Microphones - 2 microphones, Speakers - 4 speakers, Dimesions 279 x 192 x 6.9 mm, Pressure Levels - 16,384, Resolution - 2540 LPI, Size - 12.2 inches, GPU - ARM G57 MC2, OS - Andriod 12, Brightness - 360 nit, Display Technology - TFT-LCD (IPS), Viewing Angel - 178°, Contrast - 1200:1",
    com: "Compatibility - Window 7 (or later), Chrome OS 88 (or later), Linux, MacOS X 10.10 (or later)",
    color1: "Color - 16.77 million colors, 77% NTSC, 109% sRGB, 82% Adobe RGB",
    img: require("@/assets/images/xp_pen/10.jpg"),
    hoverimg: require("@/assets/images/xp_pen/9.jpg"),
  },
]);

export default {
  state: {
    products,
  },
  getters: {
    productList: (state) => {
      return state.products;
    },
  },
  mutations: {},
  actions: {},
};
