# 🛒 DevOps E-Commerce Platform

![AWS](https://img.shields.io/badge/AWS-EKS-orange)
![Kubernetes](https://img.shields.io/badge/Kubernetes-1.28-blue)
![Terraform](https://img.shields.io/badge/Terraform-1.6-purple)
![Docker](https://img.shields.io/badge/Docker-24.0-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-green)

## 🏗️ Architecture

A production-grade e-commerce platform built with
microservices architecture, deployed on AWS using
Kubernetes, with full CI/CD, monitoring, and security.

## 🛠️ Tech Stack

### Cloud & Infrastructure
- AWS EKS, ECR, RDS, S3, CloudFront
- Terraform (Infrastructure as Code)
- Ansible (Configuration Management)

### Containers & Orchestration
- Docker, Kubernetes, Helm, ArgoCD

### CI/CD
- GitHub Actions, ArgoCD (GitOps)

### Monitoring
- Prometheus, Grafana, ELK Stack, Jaeger

### Security
- SonarQube, Trivy, HashiCorp Vault

## 📁 Project Structure# devops-ecommerce-platform


## 🚀 Microservices

| Service | Port | Description |
|---------|------|-------------|
| Frontend | 3000 | React UI |
| Auth Service | 4001 | Login/Register |
| Product Service | 4002 | Product catalog |
| Order Service | 4003 | Orders/Cart |
| Payment Service | 4004 | Payments |
| Notification | 4005 | Email/SMS |

## 🔄 CI/CD Pipeline

## 📊 Monitoring

- Prometheus → metrics collection
- Grafana → dashboards
- ELK Stack → log management
- Jaeger → distributed tracing

## 🔒 Security

- SonarQube → code quality scanning
- Trivy → container vulnerability scanning
- HashiCorp Vault → secrets management
- OPA → Kubernetes policies

## 🏃 Getting Started

### Prerequisites
- AWS Account
- Docker installed
- kubectl installed
- Terraform installed
- Helm installed

### Clone Repository
```bash
git clone https://github.com/nithinkure/devops-ecommerce-platform.git
cd devops-ecommerce-platform
```

## 👨‍💻 Author

**Nithin Kure**
- GitHub: [@nithinkure](https://github.com/nithinkure)
- LinkedIn: [linkedin.com/in/nithinkure](https://linkedin.com/in/nithinkure)

## 📄 License
MIT License