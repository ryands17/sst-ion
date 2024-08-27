sst.Linkable.wrap(aws.ssm.Parameter, (param) => ({
  properties: { name: param.name },
  include: [
    sst.aws.permission({
      actions: ['ssm:GetParameter'],
      resources: [param.arn],
    }),
  ],
}));

const param = new aws.ssm.Parameter('testParam', {
  type: 'String',
  value: 'test',
});

export const main = new sst.aws.Function('main', {
  handler: './functions/main.handler',
  url: false,
  link: [param],
});
