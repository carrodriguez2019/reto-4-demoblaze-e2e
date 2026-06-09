pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        bat 'npm install'
        bat 'npx playwright install'
      }
    }

    stage('Ejecutar pruebas Playwright') {
      steps {
        bat 'npm run test:playwright'
      }
    }

    stage('Ejecutar pruebas Cypress') {
      steps {
        bat 'npm run test:cypress'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'reports/**/*, screenshots/**/*', allowEmptyArchive: true
      publishHTML([
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'reports',
        reportFiles: 'playwright-report.html,cypress-report.html',
        reportName: 'Reportes E2E Demoblaze'
      ])
    }
  }
}
