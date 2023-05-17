// import * as XLSX from 'xlsx';

const XLSX = await import('xlsx');

interface SurveyQuestionStats {
  order: number;
  question: string;
  isMultipleChoice: boolean;
  multipleChoices: MultipleChoice[] | null;
  descriptiveChoices: DescriptiveChoice[] | null;
}

interface MultipleChoice {
  order: number;
  count: number;
  description: string;
}

interface DescriptiveChoice {
  answer: string;
}

export default function writeExcel(surveyStats: SurveyQuestionStats[], maxMultipleChoiceCount: number) {
  const multipleChoiceColumn = Array.from({ length: maxMultipleChoiceCount }, (_, i) => `choice ${i + 1}`);
  const column = ['order', 'question', 'isMultipleChoice', ...multipleChoiceColumn, 'descriptiveAnswers'];

  const data = surveyStats.map((q) => {
    const { order, question, isMultipleChoice, multipleChoices, descriptiveChoices } = q;

    const newMultipleChoices = multipleChoices
      ? [...multipleChoices.map((a) => a.count)]
      : Array.from({ length: maxMultipleChoiceCount }, () => '');

    const newDescriptiveAnswers = descriptiveChoices ? descriptiveChoices.map((a) => a.answer) : [];

    return [order, question, isMultipleChoice, ...newMultipleChoices, ...newDescriptiveAnswers];
  });

  const tableData: any = [column, ...data];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(tableData);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'survey.xlsx');
}
