
output "public_ip" {
  value = aws_instance.ec21.public_ip
}

output "public_dns" {
  value = aws_instance.ec21.public_dns
}

output "security_group" {
  value = aws_instance.ec21.security_groups
}
