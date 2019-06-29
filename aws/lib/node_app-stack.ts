import sns = require('@aws-cdk/aws-sns');
const subs = require('@aws-cdk/aws-sns-subscriptions');
import sqs = require('@aws-cdk/aws-sqs');
import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');

export class NodeAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'FargateQueue');
    const topic = new sns.Topic(this, 'FargateTopic');
    const bucket = new s3.Bucket(this, 'FargateBucket', {
      versioned: true
    });
    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
