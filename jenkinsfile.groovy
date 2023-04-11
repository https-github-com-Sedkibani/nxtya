pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                 git branch: 'main', credentialsId: 'Sedkibani', url: 'git@github.com:https-github-com-Sedkibani/nxtya.git'
                //git 'git@github.com:https-github-com-Sedkibani/nxtya.git'
               // git branch: 'main', url: 'git@github.com:https-github-com-Sedkibani/nxtya.git'
               // git credentialsId: 'Sedkibani', url: 'git@github.com:https-github-com-Sedkibani/nxtya.git'
            }
        }
        
        stage('Docker Login') {
            steps {
                // Authenticate with Docker Hub using provided credentials
                withCredentials([usernamePassword(credentialsId: 'Sedkibani', usernameVariable: 'banisedki', passwordVariable: 'heisenberg.1889')]) {
                    sh "docker login -u ${env.DOCKER_USERNAME} -p ${env.DOCKER_PASSWORD}"
                }
            }
        }

        stage('Build') {
            steps {
                sh  'docker build -t nxtya:1.0 -f docker/Dockerfile .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'docker push nxtya:1.0'
            }
        }

        /*stage('Unit Test') {
            steps {
                sh 'docker run --rm nxtya:1.0 vendor/bin/phpunit'
            }
        }*/

        /*stage('Code Quality') {
            steps {
                sh 'docker run --rm nxtya:1.0 vendor/bin/phpstan analyze'
                // Additional commands for other code quality tools like SonarQube
            }
        }*/

        stage('Deploy') {
            steps {
                // Use Ansible playbook to deploy to DigitalOcean server
                ansiblePlaybook(
                    playbook: 'ansible.yml',
                    inventory: 'inventory.ini',
                    extras: "-e 'docker_image=nxtya:1.0'"
                )
            }
        }

        // Additional stages for monitoring and security checks
    }

    post {
        always {
            // Set up email notifications
            emailext (
                to: 'sedki99bani@gmail.com',
                subject: 'Pipeline Status - ${currentBuild.result}',
                body: """<p>Pipeline Status: ${currentBuild.result}</p>
                         <p>Build URL: ${env.BUILD_URL}</p>""",
                recipientProviders: [[$class: 'RequesterRecipientProvider']],
                replyTo: 'jenkins@yourdomain.com',
                mimeType: 'text/html'
            )
        }
    }
}
