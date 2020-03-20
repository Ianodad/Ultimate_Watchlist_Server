node {
	def commit_id
	stage('Preparation'){
	chekout scm
	sh "git rev-parse --short HEAD .git/commit-id"
	commit_id = readFile('.git/commit-id').trim()	
	}
	stage('test'){
	myTestContainer.pull()
	myTestContainer.inside {
		sh 'npm install --only=dev'
		sh 'npm test'	
		}	
	}
	stage('docker build/bush') {
		docker.withRegistry('http://index.docker.io/v1', dockerhub){
		def app = docker.build("ianodad/ultimate_watchlist_server:${commit_id}", ".").push()		
		}
	}

}
