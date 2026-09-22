pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checked out from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '*.js, package.json', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Stopping old server (if running)...'
                bat '''
                    for /f "tokens=5" %%p in ('netstat -aon ^| findstr :9000') do (
                        taskkill /F /PID %%p 2>nul
                    )
                    exit 0
                '''

                echo 'Copying new files...'
                bat 'if not exist C:\\jenkins-deploy mkdir C:\\jenkins-deploy'
                bat 'xcopy /Y app.js C:\\jenkins-deploy\\'
                bat 'xcopy /Y package.json C:\\jenkins-deploy\\'

                echo 'Installing dependencies in deploy folder...'
                bat 'cd C:\\jenkins-deploy && npm install'

                echo 'Starting new server (detached via Task Scheduler)...'
                bat '''
                    schtasks /Create /TN "JenkinsNodeApp" /TR "cmd /c cd /d C:\\jenkins-deploy && npm start" /SC ONCE /ST 00:00 /F
                    schtasks /Run /TN "JenkinsNodeApp"
                '''

                echo 'Deployment complete! Visit http://localhost:9000'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully! App is live at http://localhost:9000'
        }
        failure {
            echo '❌ Pipeline failed. Check console output above.'
        }
    }
}
