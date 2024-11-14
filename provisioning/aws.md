### IAM

users -> user, developer, qa
groups -> entities that contain list of policies
policies -> what they can access

roles -> communicate from one aws service to another service

### VPC ( virtual private cloud )

VPC Flow logs
Internet gateway
public subnet
load balancers
Route tables
security groups, NACL
NAT, SNAT

### security groups:

- serves at instance level
  Inbound traffic -> traffic coming to your application
  Outbound traffic -> traffic going outside to access information from third services
- can only add allow rules

### NACL (Network access control list)

- Applied at subnet level
- can add allow or deny rules

#### Route 53

- DNS as a service

### Auto Scaling Group ( For Scaling )

### Availability zones ( For availability )

### AWS Load Balancer

- ALB (Application load balancer) , layer 7
- NLB (Network load balancer) , layer 4
- GWLB (Gateway load balancer) high security, encryption, VPN,FIREWALL, etc

### Target Group

### Bastion Host or Jump Server

- A bastion host is a computer that acts as a secure gateway to control access to a private network from an external network
- used to login to the private subnet, so that we have proper logging , auditing
- we do not directly connect to the private subnet for security reasons

### S3 ( Simple Storage Service )

- Scalable
- Highly Available
- Secure
- Cost Effective
- Performance

### AWS Cloud Watch

### Serverless ( Lambda, Fargate )

### Lambda

### AWS Cloud Front (CDN)

### ECS (Elastic Container Service)

### ECR (Elastic Container Registry)

### EKS (Elastic Kubernetes Service) with EC2/fargate
