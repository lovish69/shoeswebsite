# 🚀 DevOps CI/CD Pipeline with GitHub Actions, Kubernetes , Docker, Helm, and Argo CD


This project sets up a complete CI/CD pipeline using GitHub Actions, Docker, Helm, and Argo CD to automate building, testing, packaging, and deploying applications to a Kubernetes cluster using GitOps practices.

---

## 📌 Table of Contents

- [🔧 Tools Used](#-tools-used)
- [📐 Architecture Overview](#-architecture-overview)
- [📁 Project Structure](#-project-structure)
- [✅ Prerequisites](#-prerequisites)
- [🔁 Workflow Explanation](#-workflow-explanation)
- [⚙️ Setup Guide](#️-setup-guide)
- [📦 Helm Chart Structure](#-helm-chart-structure)
- [🔄 Argo CD Configuration](#-argo-cd-configuration)
- [🌐 Accessing the Application](#-accessing-the-application)
- [🐛 Troubleshooting](#-troubleshooting)
- [📜 License](#-license)

---

## 🔧 Tools Used

| Tool         | Description |
|--------------|-------------|
| **GitHub**   | Source code management and version control |
| **GitHub Actions** | CI/CD pipeline that builds and pushes Docker images and Helm chart updates |
| **Docker**   | Containerization tool to build and run app images |
| **Kubernetes** | Container orchestration platform |
| **Helm**     | Package manager for Kubernetes |
| **Argo CD**  | Declarative GitOps continuous delivery tool |
| **Docker Hub / GHCR** | Container registry to host Docker images |

## 📐 Architecture Overview

![diagram-export-5-14-2025-6_03_38-AM](https://github.com/user-attachments/assets/b14535fb-216a-4269-bd9d-42fcf1a5e0ea)

## 📁 Project Structure
.
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions workflow
├── app/
│   └── Dockerfile                # App Dockerfile
├── helm/
│   └── myapp/
│       ├── Chart.yaml            # Helm chart metadata
│       ├── templates/
│       │   ├── deployment.yaml   # Kubernetes deployment
│       │   └── service.yaml      # Kubernetes service
│       └── values.yaml           # Configurable image and app values
├── README.md

## ✅ Prerequisites
Before starting, ensure you have the following:

- Docker installed locally
- A Kubernetes cluster (Minikube, KIND, EKS, GKE, AKS, etc.)
- Helm installed (helm version)
- Argo CD installed in the cluster
- GitHub repository with write access
- Docker Hub or GitHub Container Registry account

## 🔁 Workflow Explanation
1. Developer pushes code to GitHub.
2. GitHub Actions is triggered automatically.
3. Builds Docker image using the Dockerfile.
4. Pushes Docker image to registry (Docker Hub/GHCR).
5. Updates Helm values.yaml with the new image tag.
6. Commits and pushes the updated chart to the repo.
7. Argo CD detects changes and syncs the deployment.
8. The Kubernetes cluster updates the app.
9. The app becomes accessible via browser (LoadBalancer/Ingress).

## ⚙️ Setup Guide
### Clone the Repo
``` bash
https://github.com/lovish69/shoeswebsite.git
cd shoeswebsite
```
### Dockerfile
- Create dockerfile. 

![dcokerfile](https://github.com/user-attachments/assets/fc84613a-24a4-43f0-9bd1-4f06ed32d510)

- Run as container to test its working.

### Push the image to Docker Hub

![dockerpushing](https://github.com/user-attachments/assets/8c6273cf-29d6-4f50-b9b4-44edfb247bba)

### Create kubernetes manifests files

- Deployment.yml
- Service.yml
- Ingress.yml

### Apply the manifests files

![kubectl](https://github.com/user-attachments/assets/0f1df259-ab5b-4ba5-8cf3-693ca39a0318)

### Install kubectl and eksctl

kubectl – A command line tool for working with Kubernetes clusters. For more information, see Installing or updating kubectl.

eksctl – A command line tool for working with EKS clusters that automates many individual tasks. For more information, see Installing or updating.

``` bash
curl.exe -LO "https://dl.k8s.io/release/v1.33.0/bin/windows/amd64/kubectl.exe"
```
![kubectl](https://github.com/user-attachments/assets/e4b6b757-2112-469b-a61b-3ad27d81cdc3)

### Install minikube 

``` bash
choco install minikube
minikube start --vm-driver=hyper-v
minikube status
minikube start
minikube dashboard
```
![minikube](https://github.com/user-attachments/assets/7dc978a8-6f36-4eb6-b981-d28daeb0ba2a)

### Create Ingress controller

``` bash
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```

### 📦 Helm Chart Structure

- Install Helm
- Helm create website-chart
- Helm install 
- Helm uninstall website-chart

![helmcharts](https://github.com/user-attachments/assets/c7e6a71a-3d94-4633-a447-aeeb95a03128)


### Create Github action file
- Create .github/workflows folder.
- The name of folder should be same otherwise it will not work

![pipeline](https://github.com/user-attachments/assets/e64466d5-0e8d-405f-a43b-edc9ccc1bec9)

### Create GitHub Secrets
Go to your GitHub repo → Settings → Secrets → Actions:
``` text
Secret Name	Value
DOCKER_USERNAME	Your Docker Hub username
DOCKER_PASSWORD	Docker Hub password or token
```
![secrets](https://github.com/user-attachments/assets/59ead416-b2ca-4350-a887-366d3e7dd7fd)

### 🔄 Argo CD Configuration
``` bash
kubectl create namespace argocd
kubectl apply -n argocd \
  -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

### Port forward
``` bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```
![argo](https://github.com/user-attachments/assets/ff763427-b60e-47bc-8951-7d71e56d80e1)

## Deployment
![argodeployment](https://github.com/user-attachments/assets/a483047c-c6af-4132-96ae-1ee65879b93d)

## 🌐 Accessing the Application
``` bash
minikube service myapp
```

![dockerwebsite](https://github.com/user-attachments/assets/cf2682e9-6560-4434-a284-c86fd73f018e)

## 🐛 Troubleshooting

| Issue                          | Possible Cause                            | Solution                                                                 |
|-------------------------------|-------------------------------------------|--------------------------------------------------------------------------|
| Argo CD app not syncing       | Auto-sync might be disabled               | Enable auto-sync or manually sync via Argo CD UI or CLI (`argocd app sync`) |
| Image not updating in cluster | Image tag not updated in `values.yaml`    | Check GitHub Actions workflow for updating the image tag in `values.yaml` |
| Deployment fails              | Misconfiguration in manifests or Helm     | Use `kubectl describe pod` and `kubectl logs <pod-name>` to debug issues |
| Docker image not found        | Image not pushed or wrong image tag       | Verify Docker image pushed to registry and tag matches `values.yaml`     |
| Argo CD UI not loading        | Port forward not running or blocked       | Re-run `kubectl port-forward svc/argocd-server -n argocd 8080:443` and try again |
| GitHub Actions fails          | Missing secrets or permission issues      | Check Actions logs, ensure `DOCKER_USERNAME` and `DOCKER_PASSWORD` are set |
| Helm chart not rendering      | Syntax or template errors in chart files  | Run `helm lint` and `helm template` locally to verify before pushing     |
| Application not accessible    | Service type misconfigured                | Use `LoadBalancer` or run `minikube service myapp` for local clusters    |









## License

[MIT](https://choosealicense.com/licenses/mit/)
