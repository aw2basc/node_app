import sns = require('@aws-cdk/aws-sns');
const subs = require('@aws-cdk/aws-sns-subscriptions');
import sqs = require('@aws-cdk/aws-sqs');
import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import iam = require('@aws-cdk/aws-iam');
import { FargateService } from "./fargate_service";

export class NodeAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fargateService = new FargateService(this, 'node-app-fargate-construct');
    // asdf
    /*
    const queue = new sqs.Queue(this, 'NodeAppQueue');
    const topic = new sns.Topic(this, 'NodeAppTopic');
    topic.addSubscription(new subs.SqsSubscription(queue));
     */
    /*
    const bucket = new s3.Bucket(this, 'NodeAppBucket', {
      versioned: true
    });
     */
  }
}
