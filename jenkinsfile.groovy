pipeline {
    agent any

stage('Checkout') {
    steps {
        //git 'https://github.com/https-github-com-Sedkibani/nxtya.git'
        git credentialsId: 'Sedkibani', url: 'https://github.com/https-github-com-Sedkibani/nxtya.git'
    }
}


        stage('Build') {
            steps {
                sh 'docker build -t nxtya:1.0 -f docker/Dockerfile .'
            }
        }

        //stage('Unit Test') {
          //  steps {
            //    sh 'docker run --rm nxtya:1.0 vendor/bin/phpunit'
            //}
        //}

       // stage('Code Quality') {
           // steps {
//sh 'docker run --rm nxtya:1.0 vendor/bin/phpstan analyze'
//// Additional commands for other code quality tools like SonarQube
          //  }
      //  }

        stage('Deploy') {
            steps {
                // Use Ansible playbook to deploy to DigitalOcean server
                ansiblePlaybook(
                    playbook: 'deploy.yml',
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
