export const BASE_URL = {
  RIOT_API: 'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR',
  RIOT_IMAGE: 'https://ddragon.leagueoflegends.com/cdn/15.5.1/img',
  ROTATION_CHAMPIONS:
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
  CHAMPION_SPLASH_IMAGE:
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash',
} as const;

export const ERROR_MESSAGE = {
  ERROR_403: '접근 권한이 없습니다. 로그인 후 다시 시도해주세요.',
  ERROR_404: '요청한 페이지를 찾을 수 없습니다.',
  ERROR_500: '서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
  DEFAULT: '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.',
} as const;
