import { SurveyCoverData } from '../../../types/surveyType';
import { go, map, slice, take } from '../../../module/fx';

declare global {
  interface Window {
    // 카카오 객체에 어떤 타입을 넣어야할지 모르겠어요
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

interface MappingKeyToKoreanType {
  [key: string]: string;
}

const mappingKeyToKorean: MappingKeyToKoreanType = {
  organization: '만든이',
  endDate: '조사기간',
  surveyParticipants: '참여인원',
  targetSurveyParticipants: '목표인원',
  lotto: '복권',
};

export const useSurveyCoverData = (surveyCoverResData: SurveyCoverData) => {
  const data = go(Object.entries(surveyCoverResData), slice(4), take(4), map(surveyInfoParser));
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
        mobileWebUrl: `https://k8a608.p.ssafy.io/survey/${surveyState.id}`,
        webUrl: `https://k8a608.p.ssafy.io/survey/${surveyState.id}`,
      },
    },
    buttons: [
      {
        title: '설문조사 바로가기',
        link: {
          mobileWebUrl: `https://k8a608.p.ssafy.io/survey/${surveyState.id}`,
          webUrl: `https://k8a608.p.ssafy.io/survey/${surveyState.id}`,
        },
      },
    ],
  });
};
