pipeline {
    agent any
 
    tools {nodejs "node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente_1"
                    }
                    steps {
                        git url: 'https://github.com/FerMorales35/Cypress_Jenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 17dafe1f-e915-4de9-b3f5-c44d7549c878  --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agente_2"
                    }
                    steps {
                        git url: 'https://github.com/FerMorales35/Cypress_Jenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 17dafe1f-e915-4de9-b3f5-c44d7549c878  --parallel'
                    
                    }
                }
 
                stage('Slave 3') {
                    agent {
                        label "Agente_3"
                    }
                    steps {
                        git url: 'https://github.com/FerMorales35/Cypress_Jenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 17dafe1f-e915-4de9-b3f5-c44d7549c878  --parallel'
                    
                    }
                }
 
                stage('Slave 4') {
                    agent {
                        label "Agente_4"
                    }
                    steps {
                        git url: 'https://github.com/FerMorales35/Cypress_Jenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 17dafe1f-e915-4de9-b3f5-c44d7549c878  --parallel'
                    
                    }
                }
 
               stage('Slave 5') {
                    agent {
                        label "Agente_5"
                    }
                    steps {
                        git url: 'https://github.com/FerMorales35/Cypress_Jenkins.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 17dafe1f-e915-4de9-b3f5-c44d7549c878  --parallel'
                    
                    }
                }     
            }
        }
    }   
}
