// create dead letter queue
export const dlq = new sst.aws.Queue('MainQueueDlq');
dlq.subscribe('./functions/subscriber.dlq');

// create main queue
export const queue = new sst.aws.Queue('MainQueue', {
  dlq: dlq.arn,
});
queue.subscribe('./functions/subscriber.main');

export const app = new sst.aws.Function('publisher', {
  handler: './functions/publisher.handler',
  link: [queue],
  url: true,
});
