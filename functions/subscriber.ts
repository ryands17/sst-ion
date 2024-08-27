import { SQSHandler } from 'aws-lambda';

export const main: SQSHandler = async (event) => {
  console.log(event);

  return { batchItemFailures: [] };
};

export const dlq: SQSHandler = async (event) => {
  console.log(event);

  return { batchItemFailures: [] };
};
