locals {
  region = var.aws_region
  instance_type_value = var.aws_ec2_instance_type
  instance_ami = var.aws_ec2_ami_value
  resources_tags = {
    label = "tf_test_resources"
  }
}

provider "aws" {
  access_key = "some_key"
  secret_key = "secret"
  region = local.region

  # only required for non virtual hosted-style endpoint use case.
  # https://registry.terraform.io/providers/hashicorp/aws/latest/docs#s3_use_path_style
  s3_use_path_style           = true
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    sts            = "http://localhost:4566"
    ec2            = "http://localhost:4566"
#     apigateway     = "http://localhost:4566"
#     apigatewayv2   = "http://localhost:4566"
#     cloudformation = "http://localhost:4566"
#     cloudwatch     = "http://localhost:4566"
#     dynamodb       = "http://localhost:4566"
#     es             = "http://localhost:4566"
#     elasticache    = "http://localhost:4566"
#     firehose       = "http://localhost:4566"
#     iam            = "http://localhost:4566"
#     kinesis        = "http://localhost:4566"
#     lambda         = "http://localhost:4566"
#     rds            = "http://localhost:4566"
#     redshift       = "http://localhost:4566"
#     route53        = "http://localhost:4566"
#     s3             = "http://localhost:4566"
#     s3control      = "http://localhost:4566"
#     secretsmanager = "http://localhost:4566"
#     ses            = "http://localhost:4566"
#     sns            = "http://localhost:4566"
#     sqs            = "http://localhost:4566"
#     ssm            = "http://localhost:4566"
#     stepfunctions  = "http://localhost:4566"
#     events         = "http://localhost:4566"
#     logs           = "http://localhost:4566"
  }

}

resource "aws_instance" "ec21" {
  ami = local.instance_ami
  instance_type = local.instance_type_value

  tags = local.resources_tags
}