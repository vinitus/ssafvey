// import * as XLSX from 'xlsx';

const XLSX = await import('xlsx');

interface SurveyQuestionStats {
  order: number;
  question: string;
  isMultipleChoice: boolean;
  multipleChoiceStatDtoList: MultipleChoiceStatDto[] | null;
  descriptiveChoiceStatDtoList: DescriptiveChoiceStatDto[] | null;
}

interface MultipleChoiceStatDto {
  order: number;
  count: number;
  description: string;
}

interface DescriptiveChoiceStatDto {
  answer: string;
}

export const dummyParams: SurveyQuestionStats[] = [
  {
    order: 1,
    question: '1text',
    isMultipleChoice: true,
    multipleChoiceStatDtoList: [
      {
        order: 1,
        count: 5,
        description: '1text',
      },
      {
        order: 2,
        count: 3,
        description: '2text',
      },
    ],
    descriptiveChoiceStatDtoList: null,
  },
  {
    order: 2,
    question: '2text',
    isMultipleChoice: false,
    multipleChoiceStatDtoList: null,
    descriptiveChoiceStatDtoList: [
      {
        answer: 'i like apple',
      },
      {
        answer: 'i like apple',
      },
    ],
  },
];

export default function writeExcel(surveyStats: SurveyQuestionStats[]) {
  // 2차원 배열을 생성
  const multipleChoiceColumn = Array.from({ length: 5 }, (_, i) => `choice ${i + 1}`);
  const column = ['order', 'question', 'isMultipleChoice', ...multipleChoiceColumn, 'descriptiveAnswers'];

  // TODO: 객관식, 주관식 로직 코드분리
  // eslint-disable-next-line array-callback-return, consistent-return
  const data = surveyStats.map((q) => {
    const { order, question, isMultipleChoice, multipleChoiceStatDtoList, descriptiveChoiceStatDtoList } = q;
    if (multipleChoiceStatDtoList !== null) {
      const multipleChoiceCounts = multipleChoiceStatDtoList.map((a) => a.count);
      const counts = [...multipleChoiceCounts, ...Array.from({ length: 5 - multipleChoiceCounts.length }, () => '')];

      return [order, question, isMultipleChoice, ...counts, descriptiveChoiceStatDtoList];
    }

    if (descriptiveChoiceStatDtoList !== null) {
      const emptyChoices = Array.from({ length: 5 }, () => '');

      const descriptiveAnswerList = descriptiveChoiceStatDtoList.map((a) => a.answer);
      return [order, question, isMultipleChoice, ...emptyChoices, ...descriptiveAnswerList];
    }
  });

  const mergedData: any = [column, ...data];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(mergedData);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'survey.xlsx');
}

// writeExcel(dummyParams);
