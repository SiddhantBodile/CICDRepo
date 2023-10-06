pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from the Git repository
                checkout scm
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
