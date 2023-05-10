import { SurveyCoverData } from '../../../types/surveyType';
import { go, map, slice } from '../../../module/fx';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface MappingKeyToKoreanType {
  [key: string]: string;
}

const mappingKeyToKorean: MappingKeyToKoreanType = {
  creator: '만든이',
  endDate: '조사기간',
  surveyParticipants: '참여인원',
  targetSurveyParticipants: '목표인원',
  lotto: '복권',
};

export const useSurveyCoverData = (surveyCoverResData: SurveyCoverData) => {
  const data = go(Object.entries(surveyCoverResData), slice(3), map(surveyInfoParser));
  return [data, kakaoshare];
};

const surveyInfoParser = ([key, value]: string[]) => {
  return {
    key: mappingKeyToKorean[key],
    value,
  };
};

const kakaoshare = (surveyState: SurveyCoverData) => {
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: surveyState.title,
      description: surveyState.description,
      imageUrl: 'http://k.kakaocdn.net/dn/rDzHQ/btsdi3qPQnW/nPUA8K0ihLCCakUjLcQEu0/kakaolink40_original.png',
      link: {
        mobileWebUrl: 'http://localhost:5173/survey/1',
        webUrl: 'http://localhost:5173/survey/1',
      },
    },
    buttons: [
      {
        title: '설문조사 바로가기',
        link: {
          mobileWebUrl: 'http://localhost:5173/survey/1',
          webUrl: 'http://localhost:5173/survey/1',
        },
      },
    ],
  });
};
