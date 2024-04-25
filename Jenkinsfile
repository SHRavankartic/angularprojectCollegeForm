pipeline{
    agent any
    tools{
        dockerTool  'TestAppAngularDocker'
    }
    stages{
        stage('clone repository'){
            steps{
                git 'https://github.com/SHRavankartic/angularprojectCollegeForm'
            }
        }
        stage('build docker image'){
            steps{
                scripts{
                    sh 'C:\Program Files\Docker\Docker\resources\bin build -t angularapp-image .'
                }
            }
        }
        stage('run docker'){
            steps{
                scripts{
                    sh 'C:\Program Files\Docker\Docker\resources\bin run -p 8090:80 angularapp-image'
                }
            }
        }
    }
}
