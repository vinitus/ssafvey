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
  targetSurveyParticipants: '참여인원',
  lotto: '복권',
};

export const useSurveyCoverData = (surveyCoverResData: SurveyCoverData) => {
  const data = go(Object.entries(surveyCoverResData), slice(4), map(surveyInfoParser));
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
        mobileWebUrl: `http://k8a608.p.ssafy.io:3000/survey/${surveyState.id}`,
        webUrl: `http://k8a608.p.ssafy.io:3000/survey/${surveyState.id}`,
      },
    },
    buttons: [
      {
        title: '설문조사 바로가기',
        link: {
          mobileWebUrl: `http://k8a608.p.ssafy.io:3000/survey/${surveyState.id}`,
          webUrl: `http://k8a608.p.ssafy.io:3000/survey/${surveyState.id}`,
        },
      },
    ],
  });
};
