job('NodeJS API Containerised') {
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
    steps {
        dockerBuildAndPublish {
            repositoryName('varundhanak/docker-nodejs-api')
            tag('${GIT_REVISION,length=9}')
            registryCredentials('dockerhub')
            forcePull(false)
            forceTag(false)
            createFingerprints(false)
            skipDecorate()
        }
    }
}