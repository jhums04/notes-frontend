pipeline {
    agent any
    stages{
        stage("Build"){
            steps {
                sh "docker build -t my-react-app ."
            }
        }
        stage("Deploy image") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag my-react-app jbonganciso04/my-react-app:latest'
                    sh 'docker push jbonganciso04/my-react-app:latest'
                }
            }
        }
    }
}