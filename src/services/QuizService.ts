import {QuestionType} from '../components/Question/type';

export function fetchQuiz(): Promise<QuestionType[]> {
  return new Promise<QuestionType[]>((resolve, reject) => {
    try {
      fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => response.json())
        .then((data) => {
          resolve(data.results);
        });
    } catch (error) {
      reject(error);
    }
  });
}
