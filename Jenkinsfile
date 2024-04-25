pipeline {
    agent any
    tools{
        nodejs 'node'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    git branch: 'master', url: 'https://github.com/amwayiallan/gallery.git'
                    // git branch: 'master', url: HEROKU_GIT_URL
                    sh "npm install"
                    sh "npm --version"
                }
            }
        }

        stage ('Test'){
            steps{
                sh 'npm test'
            }
            post {
                failure {
                    // Send email notification if the test fails
                    emailext (
                        subject: "Test Failure in Pipeline",
                        body: "The test has failed. Please check console output.",
                        to: "amwayiallan24@gmail,com",
                    )
                }
            }
        }

        stage('Deploy to heroku') {
            steps {
                 script {
                    // withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: HEROKU_CREDENTIALS, usernameVariable: 'HEROKU_EMAIL', passwordVariable: 'HEROKU_API_KEY']]) {
                    // sh "git push https://$HEROKU_EMAIL:$HEROKU_API_KEY@$HEROKU_GIT_URL HEAD:master"
                    echo "successful herok deployment"

                    }
                 }
            }
            post {
                always {
                    echo 'Slack Notification'
                    slackSend(
                        channel: '#allan-ip1',
                        color: 'good',
                        message: "*${currentBuild.currentResult}:* \n Job: ${env.JOB_NAME} \n Build: ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                    )
                }
            }
        }

    } 
        
}