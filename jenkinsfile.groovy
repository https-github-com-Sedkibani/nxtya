pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {  
                git branch: 'main', credentialsId: 'Sedkibani', url: 'git@github.com:https-github-com-Sedkibani/nxtya.git'
            }
        }
        
        stage('Build') {
            steps {
                sh  'docker build -t nxtya:1.0 -f docker/Dockerfile .'
            }
        }
        
        stage('Docker Login') {
            steps {
                // Login to Docker Hub with username and password
                withCredentials([
                    usernamePassword(credentialsId: 'banisedki', url: 'https://hub.docker.com/repository/docker/banisedki/nxtya')
                                     /* usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')*/
                ]) {
                    sh 'docker login -u  'DOCKER_USERNAME' -p 'DOCKER_PASSWORD' '
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                sh 'docker push banisedki/nxtya:latest'
            }
        }

        /* stage('Unit Test') {
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
                    playbook: '/var/lib/jenkins/workspace/nxtya/ansible.yml',
                    inventory: '/var/lib/jenkins/workspace/nxtya/inventory.ini',
                    extras: "-e 'docker_image=nxtya:1.0'"
                )
            }
        }
    }

    // Additional stages for monitoring and security checks

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
