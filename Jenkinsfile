pipeline {
	agent {
		docker {
			image 'node:latest'
			args '-p 3000:3000'
		}
	}
	environment {
		CI = 'true' 
	}
	stages {
		stage('Build') {
			steps {
				sh 'npm install'
			}
		}
		stage('Test') { 
			steps {
				sh 'npm test'
			}
		}
		stage('Deliver') { 
			steps {
				sh 'npm run build'
				sh 'npm start &'
				sh 'sleep 1' 
			}
		}
	}
}
