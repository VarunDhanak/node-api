job('NodeJS example') {
    scm {
        git('https://github.com/VarunDhanak/node-api.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('Varun Dhanak')
            node / gitConfigEmail('varundhanak@gmail.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in 
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("npm install")
    }
}