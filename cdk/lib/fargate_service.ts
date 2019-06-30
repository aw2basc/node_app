import cdk = require('@aws-cdk/core');
import ecs = require('@aws-cdk/aws-ecs');
import ec2 = require('@aws-cdk/aws-ec2');
import iam = require('@aws-cdk/aws-iam');
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import elbv2 = require('@aws-cdk/aws-elasticloadbalancingv2');
import { AddressRecordTarget, ARecord, IHostedZone } from '@aws-cdk/aws-route53';
import route53targets = require('@aws-cdk/aws-route53-targets');
import path = require('path');

export class FargateService extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props?: any) {
    super(scope, id);

    const cpu: number = 1024;
    const memoryLimitMiB: number = 2048;
    const serviceName: string = "node-app-service-name";
    const desiredCount: number = 2;
    const environment: any = { ENV_VAR: "envVar" };
    const availabilityZones: string[] = ["us-east-1a"];

    const taskRole: iam.IRole = iam.Role.fromRoleArn(this, 'node-app-role', 'arn:aws:iam::881385135648:role/acct-managed/aws-ec2-container-service-task-role');
    const taskDefinition: ecs.FargateTaskDefinition = new ecs.FargateTaskDefinition(this, 'node-app-task-definition', {
      memoryLimitMiB,
      cpu,
      taskRole,
      executionRole: taskRole
    });

    const image: ecs.ContainerImage = ecs.ContainerImage.fromAsset(path.join(__dirname, '../../app'));
    const logging: ecs.LogDriver = new ecs.AwsLogDriver({ streamPrefix: this.node.id });
    const container = taskDefinition.addContainer('node-app-container', {
      image,
      logging,
      environment
    });

    container.addPortMappings({
      containerPort: 80,
    });

    const cluster: ecs.ICluster = new ecs.Cluster(this, 'node-app-cluster', { vpc: props.vpc });
    const service = new ecs.FargateService(this, 'node-app-fargate-service', {
      cluster,
      desiredCount,
      taskDefinition,
      assignPublicIp: true,
      serviceName,
    });
    // this.service = service;

    /*
    this.loadBalancer = new elbv2.ApplicationLoadBalancer(this, 'LB', {
      vpc: ECS_CLUSTER.vpc,
      internetFacing: true
    });
    this.listener = (this.loadBalancer as elbv2.ApplicationLoadBalancer).addListener('PublicListener', {
      port: 80,
      open: true
    });
    this.targetGroup = this.listener.addTargets('ECS', { port: 80 });
     */
  }
}
