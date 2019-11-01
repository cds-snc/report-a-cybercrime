export const canada = {
  name: 'my theme',
  rounding: 0,
  spacing: 20,
  global: {
    colors: {
      brand: '#000',
      'accent-1': '#008000',
      'accent-2': '#FFBF47',
      'neutral-1': '#00692F',
      'neutral-2': '#4C2C92',
      'neutral-3': '#005EA5',
      'accent-4': '#DC143C',
      'accent-3': '#2B8CC4',
      'status-critical': '#DC143C',
      'status-warning': '#FFBF47',
      'status-ok': '#008000',
    },
    font: {
      family: 'Helvetica',
      size: '15px',
      height: '20px',
      maxWidth: '300px',
    },
    control: {
      border: {
        radius: '0px',
      },
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '3.3333333333333335px',
      large: '10px',
      xlarge: '20px',
    },
    breakpoints: {
      small: {
        value: 640,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '3.3333333333333335px',
          large: '5px',
          xlarge: '10px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '2.5px',
          small: '5px',
          medium: '10px',
          large: '20px',
          xlarge: '40px',
        },
        size: {
          xxsmall: '20px',
          xsmall: '40px',
          small: '80px',
          medium: '160px',
          large: '320px',
          xlarge: '640px',
          full: '100%',
        },
      },
      medium: {
        value: 1280,
      },
      large: {},
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '2.5px',
      xsmall: '5px',
      small: '10px',
      medium: '20px',
      large: '40px',
      xlarge: '80px',
      responsiveBreakpoint: 'small',
    },
    input: {
      padding: '10px',
      weight: 600,
    },
    spacing: '20px',
    size: {
      xxsmall: '40px',
      xsmall: '80px',
      small: '160px',
      medium: '320px',
      large: '640px',
      xlarge: '960px',
      xxlarge: '1280px',
      full: '100%',
    },
  },
  formField: {
    border: false,
  },
  button: {
    border: {
      width: '2px',
      radius: '0px',
    },
    padding: {
      vertical: '12px',
      horizontal: '32px',
    },
  },
  checkBox: {
    check: {
      radius: '0px',
    },
    toggle: {
      radius: '20px',
      size: '40px',
    },
    size: '20px',
  },
  radioButton: {
    size: '20px',
  },
  calendar: {
    small: {
      fontSize: '11.666666666666666px',
      lineHeight: 1.375,
      daySize: '22.857142857142858px',
    },
    medium: {
      fontSize: '15px',
      lineHeight: 1.45,
      daySize: '45.714285714285715px',
    },
    large: {
      fontSize: '25px',
      lineHeight: 1.11,
      daySize: '91.42857142857143px',
    },
  },
  clock: {
    analog: {
      hour: {
        width: '6.666666666666667px',
        size: '20px',
      },
      minute: {
        width: '3.3333333333333335px',
        size: '10px',
      },
      second: {
        width: '2.5px',
        size: '8px',
      },
      size: {
        small: '60px',
        medium: '80px',
        large: '120px',
        xlarge: '180px',
        huge: '240px',
      },
    },
    digital: {
      text: {
        xsmall: {
          size: '8.333333333333332px',
          height: 1.5,
        },
        small: {
          size: '11.666666666666666px',
          height: 1.43,
        },
        medium: {
          size: '15px',
          height: 1.375,
        },
        large: {
          size: '18.333333333333332px',
          height: 1.167,
        },
        xlarge: {
          size: '21.666666666666668px',
          height: 1.1875,
        },
        xxlarge: {
          size: '28.333333333333336px',
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      '1': {
        small: {
          size: '28.333333333333336px',
          height: '33.333333333333336px',
          maxWidth: '566.6666666666667px',
        },
        medium: {
          size: '41.66666666666667px',
          height: '46.66666666666667px',
          maxWidth: '833.3333333333335px',
        },
        large: {
          size: '68.33333333333334px',
          height: '73.33333333333334px',
          maxWidth: '1366.666666666667px',
        },
        xlarge: {
          size: '95px',
          height: '100px',
          maxWidth: '1900px',
        },
      },
      '2': {
        small: {
          size: '21.666666666666668px',
          height: '26.666666666666668px',
          maxWidth: '433.33333333333337px',
        },
        medium: {
          size: '28.333333333333336px',
          height: '33.333333333333336px',
          maxWidth: '566.6666666666667px',
        },
        large: {
          size: '41.66666666666667px',
          height: '46.66666666666667px',
          maxWidth: '833.3333333333335px',
        },
        xlarge: {
          size: '55px',
          height: '60px',
          maxWidth: '1100px',
        },
      },
      '3': {
        small: {
          size: '18.333333333333332px',
          height: '23.333333333333332px',
          maxWidth: '366.66666666666663px',
        },
        medium: {
          size: '21.666666666666668px',
          height: '26.666666666666668px',
          maxWidth: '433.33333333333337px',
        },
        large: {
          size: '28.333333333333336px',
          height: '33.333333333333336px',
          maxWidth: '566.6666666666667px',
        },
        xlarge: {
          size: '35px',
          height: '40px',
          maxWidth: '700px',
        },
      },
      '4': {
        small: {
          size: '15px',
          height: '20px',
          maxWidth: '300px',
        },
        medium: {
          size: '15px',
          height: '20px',
          maxWidth: '300px',
        },
        large: {
          size: '15px',
          height: '20px',
          maxWidth: '300px',
        },
        xlarge: {
          size: '15px',
          height: '20px',
          maxWidth: '300px',
        },
      },
      '5': {
        small: {
          size: '13.333333333333334px',
          height: '18.333333333333332px',
          maxWidth: '266.6666666666667px',
        },
        medium: {
          size: '13.333333333333334px',
          height: '18.333333333333332px',
          maxWidth: '266.6666666666667px',
        },
        large: {
          size: '13.333333333333334px',
          height: '18.333333333333332px',
          maxWidth: '266.6666666666667px',
        },
        xlarge: {
          size: '13.333333333333334px',
          height: '18.333333333333332px',
          maxWidth: '266.6666666666667px',
        },
      },
      '6': {
        small: {
          size: '11.666666666666666px',
          height: '16.666666666666668px',
          maxWidth: '233.33333333333331px',
        },
        medium: {
          size: '11.666666666666666px',
          height: '16.666666666666668px',
          maxWidth: '233.33333333333331px',
        },
        large: {
          size: '11.666666666666666px',
          height: '16.666666666666668px',
          maxWidth: '233.33333333333331px',
        },
        xlarge: {
          size: '11.666666666666666px',
          height: '16.666666666666668px',
          maxWidth: '233.33333333333331px',
        },
      },
    },
  },
  paragraph: {
    small: {
      size: '11.666666666666666px',
      height: '16.666666666666668px',
      maxWidth: '233.33333333333331px',
    },
    medium: {
      size: '15px',
      height: '20px',
      maxWidth: '300px',
    },
    large: {
      size: '18.333333333333332px',
      height: '23.333333333333332px',
      maxWidth: '366.66666666666663px',
    },
    xlarge: {
      size: '21.666666666666668px',
      height: '26.666666666666668px',
      maxWidth: '433.33333333333337px',
    },
    xxlarge: {
      size: '28.333333333333336px',
      height: '33.333333333333336px',
      maxWidth: '566.6666666666667px',
    },
  },
  text: {
    xsmall: {
      size: '10px',
      height: '15px',
      maxWidth: '200px',
    },
    small: {
      size: '11.666666666666666px',
      height: '16.666666666666668px',
      maxWidth: '233.33333333333331px',
    },
    medium: {
      size: '15px',
      height: '20px',
      maxWidth: '300px',
    },
    large: {
      size: '18.333333333333332px',
      height: '23.333333333333332px',
      maxWidth: '366.66666666666663px',
    },
    xlarge: {
      size: '21.666666666666668px',
      height: '26.666666666666668px',
      maxWidth: '433.33333333333337px',
    },
    xxlarge: {
      size: '28.333333333333336px',
      height: '33.333333333333336px',
      maxWidth: '566.6666666666667px',
    },
  },
}
