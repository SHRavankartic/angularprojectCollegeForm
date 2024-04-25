pipeline{
    agent any
    stages{
        stage('build docker image'){
            steps{
                scripts{
                    sh '/usr/local/bin/docker build -t angularapp-image .'
                }
            }
        }
        stage('run docker'){
            steps{
                scripts{
                    sh '/usr/local/bin/docker build run -p 8090:80 angularapp-image'
                }
            }
        }
    }
}
