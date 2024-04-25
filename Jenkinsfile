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
                    sh '/usr/local/bin/docker build -t angularapp-image .'
                }
            }
        }
        stage('run docker'){
            steps{
                scripts{
                    sh '/usr/local/bin/docker run -p 8090:80 angularapp-image'
                }
            }
        }
    }
}
