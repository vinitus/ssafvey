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

export default function writeExcel(surveyStats: SurveyQuestionStats[], maxMultipleChoiceCount: number) {
  const multipleChoiceColumn = Array.from({ length: maxMultipleChoiceCount }, (_, i) => `choice ${i + 1}`);
  const column = ['order', 'question', 'isMultipleChoice', ...multipleChoiceColumn, 'descriptiveAnswers'];

  const data = surveyStats.map((q) => {
    const { order, question, isMultipleChoice, multipleChoiceStatDtoList, descriptiveChoiceStatDtoList } = q;

    const multipleChoices = multipleChoiceStatDtoList
      ? [...multipleChoiceStatDtoList.map((a) => a.count)]
      : Array.from({ length: maxMultipleChoiceCount }, () => '');

    const descriptiveAnswers = descriptiveChoiceStatDtoList ? descriptiveChoiceStatDtoList.map((a) => a.answer) : [];

    return [order, question, isMultipleChoice, ...multipleChoices, ...descriptiveAnswers];
  });

  const tableData: any = [column, ...data];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(tableData);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'survey.xlsx');
}
