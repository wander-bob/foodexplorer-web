export const theme = {
  screens: {
    small: 'min-width: 440px',
    medium: 'min-width: 768px',
    large: 'min-width: 1024px',
    extra_large: 'min-width: 1280px',
  },
  image_sizes: {
    smaller_88x88: `
      height: 8.8rem;
      width: 8.8rem`,
    small_176x176: `
      height: 17.6rem;
      width: 17.6rem`,
    medium_264x264: `
      height: 26.4rem;
      width: 26.4rem`,
    large_389x389: `
      height: 38.9rem;
      width: 38.9rem`,
    banner_mobile_191x149: `
      height: 14.9rem;
      width:  19.1rem`,
    banner_tablet_360x280: `
      height: 24rem;
      width:  32rem`,
    banner_desktop_632x406: `
      height: 40.6rem;
      width:  63.2rem`,
  },
  icon_sizes: {
    smaller_18x18: `
      height: 1.8rem;
      width: 1.8rem`,
    small_24x24: `
      height: 2.4rem;
      width: 2.4rem`,
    medium_32x32: `
      height: 3.2rem;
      width: 3.2rem`,
    large_48x48: `
      height: 4.8rem;
      width: 4.8rem`,
  },
  colors: {
    light: {
      _100: "#FFFFFF",
      _200: "#FFFAF1",
      _300: "#E1E1E6",
      _400: "#C4C4CC",
      _500: "#7C7C8A",
      _600: "#76797B",
      _700: "#4D585E",
    },
    dark: {
      _100: "#000405",
      _200: "#00070A",
      _300: "#000204",
      _400: "#000A0F",
      _500: "#000C12",
      _600: "#00111A",
      _700: "#001119",
      _800: "#0D161B",
      _900: "#0D1D25",
      _1000: "#192227",
    },
    gradient: {
      _100: "linear-gradient(90deg,  #000A0F 27.25%, #000A0F 100%)",
      _200: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
      _300: "background: var(--Gradients-300, linear-gradient(90deg, #606066 12.5%, #1D1D1E 87.5%))",
    },
    tomato: {
      _100: "#750310",
      _200: "#92000E",
      _300: "#AB222E",
      _400: "#AB4D55",
    },
    cake: {
      _100: "#82F3FF",
      _200: "#065E7C",
    },
    carrot: {
      _100: "#FBA94C",
    },
    mint: {
      _100: "#04D361",
      _200: "#18A748",
    },
  },
  fonts: {
    poppins: {
      _100_medium: `
        font-family: Poppins, sans-serif; 
        font-weight: 500; 
        font-size: 1.4rem;
        line-height: 2.4rem;`,
      _200_medium: `
        font-family: Poppins, sans-serif; 
        font-weight: 500; 
        font-size: 2rem;
        line-height: 160%;`,
      _300_bold: `
        font-family: Poppins, sans-serif; 
        font-weight: 700; 
        font-size: 2.4rem;
        line-height: 140%;`,
      _300_regular: `
        font-family: Poppins, sans-serif; 
        font-weight: 400; 
        font-size: 2.4rem;
        line-height: 140%;`,
      _300_light: `
        font-family: Poppins, sans-serif; 
        font-weight: 300; 
        font-size: 2.4rem;
        line-height: 140%;`,
      _400_medium: `
        font-family: Poppins, sans-serif; 
        font-weight: 500; 
        font-size: 3.2rem;
        line-height: 140%;`,
      _500_medium: `
        font-family: Poppins, sans-serif; 
        font-weight: 500; 
        font-size: 4rem;
        line-height: 140%;`,
    },
    roboto: {
      _100_regular_smallest: `
        font-family: Roboto, sans-serif; 
        font-weight: 400; 
        font-size: 1.2rem;
        line-height: 160%;`,
      _200_regular_smaller: `
        font-family: Roboto, sans-serif; 
        font-weight: 400; 
        font-size: 1.4rem;
        line-height: 160%;`,
      _200_bold_smaller: `
        font-family: Roboto, sans-serif; 
        font-weight: 700; 
        font-size: 1.4rem;
        line-height: 160%;`,
      _300_bold_small: `
        font-family: Roboto, sans-serif; 
        font-weight: 700; 
        font-size: 1.6rem;
        line-height: 160%;`,
      _300_regular_spaced_small: `
        font-family: Roboto, sans-serif; 
        font-weight: 400; 
        font-size: 1.6rem;
        line-height: 160%;`,
      _300_regular_small: `
        font-family: Roboto, sans-serif; 
        font-weight: 400; 
        font-size: 1.6rem;
        line-height: 100%;`,
      _400_bold_big: `
        font-family: Roboto, sans-serif; 
        font-weight: 700; 
        font-size: 2rem;
        line-height: normal;`,
      _400_regular_big: `
        font-family: Roboto, sans-serif; 
        font-weight: 400; 
        font-size: 2rem;
        line-height: 160%;`,
      _500_bold_bigger: `
        font-family: Roboto, sans-serif; 
        font-weight: 700; 
        font-size: 2.4rem;
        line-height: normal;`,
      _600_regular_biggest: `
        font-family: Roboto, sans-serif; 
        font-weight: 400; 
        font-size: 3.2rem;
        line-height: 160%;`,
      _700_regular_giant: `
        font-family: Roboto, sans-serif; 
        font-weight: 700; 
        font-size: 4.2rem;
        line-height: normal;`,
    },
    dm_sans: {
      _100_regular: `
        font-family: "DM Sans", sans-serif; 
        font-weight: 400; 
        font-size: 1.2rem;
        line-height: 160%;`
      }
    },
};