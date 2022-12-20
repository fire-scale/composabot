variable "public_key" {
  description = "Public API key to authenticate to Atlas"
}
variable "private_key" {
  description = "Private API key to authenticate to Atlas"
}
variable "org_id" {
  description = "MongoDB Organization ID"
}
variable "region" {
  description = "MongoDB Atlas Cluster Region"
}
provider "mongodbatlas" {
  public_key  = var.public_key
  private_key = var.private_key
}