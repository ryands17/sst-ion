/// <reference path="./.sst/platform/config.d.ts" />

import { isProd } from './stacks/utils';

export default $config({
  app(input) {
    const isProd = () => input?.stage === 'prod';

    return {
      name: 'test-sst',
      removal: isProd() ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    // globals defined here: https://sst.dev/docs/reference/global/#app
    $transform(sst.aws.Function, (args, _opts) => {
      args.runtime = 'nodejs20.x';
      args.architecture = 'arm64';
      args.logging = {
        format: 'text',
        retention: isProd() ? '1 month' : '1 week',
      };
    });

    const sqsStack = await import('./stacks/sqs-lambda.js');
    await import('./stacks/ssm-lambda.js');

    return {
      app: sqsStack.app.url,
      queue: sqsStack.queue.url,
      dlq: sqsStack.dlq.url,
    };
  },
});
