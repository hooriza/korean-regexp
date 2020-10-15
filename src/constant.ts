export const BASE = '가'.charCodeAt(0); // 한글 코드 시작: 44032

export const INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

export const MEDIALS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];

export const FINALES = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

export const MIXED: any = {
  ㄲ: ['ㄱ', 'ㄱ'],
  ㄳ: ['ㄱ', 'ㅅ'],
  ㄵ: ['ㄴ', 'ㅈ'],
  ㄶ: ['ㄴ', 'ㅎ'],
  ㄺ: ['ㄹ', 'ㄱ'],
  ㄻ: ['ㄹ', 'ㅁ'],
  ㄼ: ['ㄹ', 'ㅂ'],
  ㄽ: ['ㄹ', 'ㅅ'],
  ㄾ: ['ㄹ', 'ㅌ'],
  ㄿ: ['ㄹ', 'ㅍ'],
  ㅀ: ['ㄹ', 'ㅎ'],
  ㅄ: ['ㅂ', 'ㅅ'],
  ㅆ: ['ㅅ', 'ㅅ'],
  ㅘ: ['ㅗ', 'ㅏ'],
  ㅙ: ['ㅗ', 'ㅐ'],
  ㅚ: ['ㅗ', 'ㅣ'],
  ㅝ: ['ㅜ', 'ㅓ'],
  ㅞ: ['ㅜ', 'ㅔ'],
  ㅟ: ['ㅜ', 'ㅣ'],
  ㅢ: ['ㅡ', 'ㅣ'],
};

export const MEDIAL_RANGE: any = {
  ㅗ: ['ㅗ', 'ㅚ'],
  ㅜ: ['ㅜ', 'ㅟ'],
  ㅡ: ['ㅡ', 'ㅢ'],
};

export const PRESENT_ON_KEYBOARD = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ',
];

export const KEYS = [
  ['ㄱ', 'r'],
  ['ㄲ', 'R'],
  ['ㄴ', 's'],
  ['ㄷ', 'e'],
  ['ㄸ', 'E'],
  ['ㄹ', 'f'],
  ['ㅁ', 'a'],
  ['ㅂ', 'q'],
  ['ㅃ', 'Q'],
  ['ㅅ', 't'],
  ['ㅆ', 'T'],
  ['ㅇ', 'd'],
  ['ㅈ', 'w'],
  ['ㅉ', 'W'],
  ['ㅊ', 'c'],
  ['ㅋ', 'z'],
  ['ㅌ', 'x'],
  ['ㅍ', 'v'],
  ['ㅎ', 'g'],
  ['ㅏ', 'k'],
  ['ㅐ', 'o'],
  ['ㅑ', 'i'],
  ['ㅒ', 'O'],
  ['ㅓ', 'j'],
  ['ㅔ', 'p'],
  ['ㅕ', 'u'],
  ['ㅖ', 'P'],
  ['ㅗ', 'h'],
  ['ㅛ', 'y'],
  ['ㅜ', 'n'],
  ['ㅠ', 'b'],
  ['ㅡ', 'm'],
  ['ㅣ', 'l'],
];
