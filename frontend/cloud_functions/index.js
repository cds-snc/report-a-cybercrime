const octokit = require('@octokit/rest')()

exports.buildPubSub = (event, context, callback) => {
  const data = event.data
    ? JSON.parse(Buffer.from(event.data, 'base64').toString())
    : false

  if (data) {
    octokit.authenticate({
      type: 'token',
      token: process.env.GITHUB_TOKEN,
    })
    let state
    let message
    switch (event.attributes.status) {
      case 'QUEUED':
        state = 'pending'
        message = 'Queueing cloud build'
        break
      case 'WORKING':
        state = 'pending'
        message = 'Running cloud build'
        break
      case 'SUCCESS':
        state = 'success'
        message = 'Passed'
        break
      case 'INTERNAL_ERROR':
        state = 'error'
        message = 'Failed!'
        break
      case 'TIMEOUT':
        state = 'error'
        message = 'Timeout'
        break
      case 'FAILURE':
        state = 'error'
        message = 'Failed!'
        break
      case 'CANCELLED':
        state = 'error'
        message = 'Cancelled'
        break
      default:
        console.log(
          `build ${event.attributes.buildId} event:`,
          JSON.stringify(event),
        )
        console.log(
          `build ${event.attributes.buildId} context:`,
          JSON.stringify(context),
        )
        console.log(
          `build ${event.attributes.buildId} data:`,
          JSON.stringify(data),
        )
    }

    octokit.repos.createStatus({
      state: state,
      target_url: data.logUrl,
      description: message,
      owner: 'cds-snc',
      repo: data.source.repoSource.repoName.replace('github_cds-snc_', ''),
      sha: data.sourceProvenance.resolvedRepoSource.commitSha,
      context: 'CloudBuild',
    })
  }

  callback()
}
