import { Resource } from 'sst';
import { Handler } from 'aws-lambda';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
const client = new SQSClient();

export const handler: Handler = async (event) => {
  // send a message
  await client.send(
    new SendMessageCommand({
      QueueUrl: Resource.MainQueue.url,
      MessageBody: 'Hello from the subscriber',
    }),
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'sent' }, null, 2),
  };
};
