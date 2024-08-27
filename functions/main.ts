import { Handler } from 'aws-lambda';
import { Resource } from 'sst';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';

const client = new SSMClient();

export const handler: Handler = async () => {
  const command = new GetParameterCommand({ Name: Resource.testParam.name });

  const { Parameter } = await client.send(command);

  console.log('value', Parameter?.Value);
};
