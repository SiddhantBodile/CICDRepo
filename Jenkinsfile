
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from the Git repository for the 'main' branch
                checkout([$class: 'GitSCM', branches: [[name: 'main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '13.234.196.146', url: 'https://github.com/SiddhantBodile/CICDRepo.git']]])
            }
        }
        
        stage('Build and Run') {
            steps {
                // Install Node.js and run the TypeScript project
                sh 'npx ts-node src/index.ts'
            }
        }
    }
    
    post {
        success {
            // Notify on success (e.g., send an email or notification)
        }
        failure {
            // Notify on failure (e.g., send an email or notification)
        }
    }
}
