pipeline{
    agent any
    stages{
        stage('build docker image'){
            steps{
                scripts{
                    sh '/Users/7kart/AppData/Local/Docker build -t angularapp-image .'
                }
            }
        }
        stage('run docker'){
            steps{
                scripts{
                    sh '/Users/7kart/AppData/Local/Docker run -p 8090:80 angularapp-image'
                }
            }
        }
    }
}
