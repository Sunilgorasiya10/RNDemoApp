import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = (isIphone && height === 812) || (isIphone && height === 896);
const widthPer = width / 100;
const heightPer = height / 100;
const screen_unused_height = isIphone ? (iPhoneX ? 78 : 28) : 24;
const screen_height = height - screen_unused_height;
const ratioCount = screen_height / 667; //smartScale

const isTablet = () => {
  if (isIphone) {
    return Platform.isPad;
  } else {
    return height / width <= 1.6;
  }
};
const APP_FONTS = {};
export default {
  countPixelRatio: size => size * ratioCount,
  responsiveHeight: size => size * heightPer,
  responsiveWidth: size => size * widthPer,
  fontSizeH1: (deviceType == 'phone' ? 28 : 50) * ratioCount,
  fontSizeH2: (deviceType == 'phone' ? 34 : 58) * ratioCount,
  fontSizeH1_2: (deviceType == 'phone' ? 24 : 33) * ratioCount,
  fontSizeH2_2: (deviceType == 'phone' ? 20 : 26) * ratioCount,
  fontSizeH2_3: (deviceType == 'phone' ? 18 : 22) * ratioCount,
  fontSizeH3: (deviceType == 'phone' ? 15 : 18) * ratioCount,
  fontSizeH3_4: (deviceType == 'phone' ? 12 : 15) * ratioCount,
  fontSizeH4: (deviceType == 'phone' ? 10 : 12) * ratioCount,
  fontSizeH5: (deviceType == 'phone' ? 8 : 10) * ratioCount,
  fontSizeParagraph: (deviceType == 'phone' ? 13 : 15) * ratioCount,
  width,
  height,
  iPhoneX,
  isPhone: !isTablet(),
  isTab: isTablet(),
  isIphone,
  greenLinearGradient: ['#25BC77', '#35E593'],
  orangeLinearGradient: ['#FD5739', '#F3914F'],
  COLOR: {

    Dodger_Blue: '#22a7f0',
    Facebook: '#3b5998',
    Google: '#dd4b39',
    THEME: '#0093BA',
    WHITE: '#FFFFFF',
    BLACK: '#000',
    RED: '#D00',
    GREEN: '#25BC77',
    WHITE_OFF: '#EEE',
    BLACK_OFF: '#333',
    GREY_LIGHT: '#D4D6DB',
    GREY_DIM: '#707070',
    BACKGROUND: '#91919D',
    LIGHTER_GREY: '#F6F7F9',
    RED_REDICAL: '#FC5739',
    GOOGLE_CINABAR: '#EA4335',
    ORANGE_OUTRAGEOUS: '#FD5739',
    HEADER_ICON: '#24253D',
    WECHAT_PARROT: '#2DC100',
    FACEBOOK_BLUE: '#3B579D',
    GREY_DARK: '#707070',
    CHAMBRAY: '#637591',
    WHITE_MODAL: '#E4E4E4',
    CORNFLOWER_BLUE: '#4392F920',
    YELLOW_RATING: '#FAAE32',
    ROCK_BLUE: '#959FB0',
    RESOLUTION_BLUE: '#213B73',
    PARROT: '#398215',
    BLUE_BRIGHT: '#1164B7',
    PURPLE_VIVID: '#6E0F8F',
    PINK: '#980667',
    GREEN_PINE: '#097470',
    HAWKES_BlUE: '#DEDFE2',
    ORANGE: '#FD5739',
    NEPAL: '#A4AFB8',
    PURPLE: '#A000FB',
    JAPANESE_PARROT: '#049904',
    SHAMROCK: '#2BD586',
    HEATHER: '#B7BBC0',
    MANATEE: '#848592',
    TORCH_RED: '#FF0F50',
    GREEN_LIGHT: '#CCD131',
    DEEP_SKY_BLUE: '#00C6F1',
    LIGHT_SEA_GREEN: '#1AB99B',
    YELLOW_GREEN: '#A7D129',
    GUN_POWDER: '#43425D',
  },
};
