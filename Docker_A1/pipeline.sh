pipeline {
    agent any
    stages {
        stage("hello world") {
            steps {
                echo "hello world"
            }
        }
    }
    post {
        always {
            script {
                build job: "mini_project_client", waitForStart: true
            }
        }
    }
}

