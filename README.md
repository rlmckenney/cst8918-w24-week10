# Lab 10: Extract, Transform, Load (ELT) Using Ansible

1. Infrastructure setup

- Create a demo environment in Azure using Terraform with the following resources:

  - A resource group
  - Azure Kubernetes Service (AKS) cluster
  - Workload Pods:
    - API server with sample JSON data
    - Target database server with empty schema
    - Ansible control node

- Ansible playbook
  - Create the inventory file with the following groups:
    - `api` for the API server
    - `db` for the database server
  - Create steps to extract data from the API server, transform it, and load it into the target database server
