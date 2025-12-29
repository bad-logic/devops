provider "aws" {
  region = "us-west-2"
}


resource "aws_instance" "ec21" {
  ami = var.ami_value
  instance_type = var.instance_type_value

  tags = {
    Name = var.tag_name
  }
}