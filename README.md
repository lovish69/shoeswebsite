# 🚀 DevOps CI/CD Pipeline with GitHub Actions, Docker, Helm, and Argo CD

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

---

## 📐 Architecture Overview

```text
+-------------+     Push     +---------+       Trigger      +---------------+
| Developer   +------------->+ GitHub  +------------------->+ GitHub Actions|
+-------------+              +---------+                   +---------------+
                                                                  |
                                                                  v
                                                      +----------------------+
                                                      | Build & Push Docker  |
                                                      | Update Helm values   |
                                                      +----------------------+
                                                                  |
                                                                  v
                                                         +-----------------+
                                                         |    Git Repo     |
                                                         | (Manifests/Helm)|
                                                         +-----------------+
                                                                  |
                                                                  v
                                                      +---------------------+
                                                      |     Argo CD         |
                                                      |  Auto Sync & Deploy |
                                                      +---------------------+
                                                                  |
                                                                  v
                                                        +-----------------+
                                                        |  Kubernetes App |
                                                        |   (View in Web) |
                                                        +-----------------+

